import axios from "axios";

const BASE_URL = "https://api-elektronik-finalproject.aran8276.site/api";
let ACCESS_TOKEN = null; // Access token akan di-update setelah login
const REFRESH_TOKEN_KEY = "refresh_token"; // Key untuk menyimpan refresh token di localStorage

// Fungsi untuk memperbarui access token menggunakan refresh token
const refreshAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
    if (!refreshToken) {
      throw new Error("No refresh token available in localStorage");
    }

    console.log("Refreshing token with refresh token:", refreshToken); // Logging

    const response = await axios.post(
      `${BASE_URL}/auth/refresh`, // Gunakan backticks di sini
      { refresh_token: refreshToken },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " +refreshToken
        },
      }
    );

    console.log("Response from /auth/refresh:", response.data); // Logging

    const newAccessToken = response.data.access_token;
    if (!newAccessToken) {
      throw new Error("Invalid response from /auth/refresh: Missing access_token");
    }

    ACCESS_TOKEN = newAccessToken; // Perbarui access token global
    return newAccessToken;
  } catch (error) {
    console.error("Failed to refresh access token:", error);
    throw error;
  }
};

// Axios instance untuk API requests
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Axios interceptor untuk menangani token kadaluwarsa
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Jika status 401 (Unauthorized) dan belum mencoba refresh token
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        // Jika sedang refresh token, masukkan request ke antrian
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return apiClient(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const newAccessToken = await refreshAccessToken();
        apiClient.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${newAccessToken}`;
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        processQueue(null, newAccessToken);
        return apiClient(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        throw refreshError;
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

// Fungsi untuk login
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, credentials); // Gunakan backticks di sini
    console.log("Response from /auth/login:", response.data); // Tambahkan logging

    const { access_token, refresh_token } = response.data;
    if (!access_token || !refresh_token) {
      throw new Error("Invalid response from server: Missing tokens");
    }

    ACCESS_TOKEN = access_token;
    localStorage.setItem(REFRESH_TOKEN_KEY, refresh_token);
    localStorage.setItem("access_token", access_token); // Simpan refresh token di localStorage
    apiClient.defaults.headers.common["Authorization"] = `Bearer ${ACCESS_TOKEN}`;
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

// Fungsi untuk logout
export const logout = () => {
  ACCESS_TOKEN = null;
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  delete apiClient.defaults.headers.common["Authorization"];
};

// Fungsi untuk fetch data alat
export const fetchAlat = async () => {
  try {
    const response = (await apiClient.get("/alat" ));
    return response?.data;
  } catch (error) {
    console.error("Error fetching alat:", error);
    throw error;
  }
};


export const reset =async(email, token, password, password_confirmation)=>{
  try {
    const response = await apiClient.post(
    "https://api-elektronik-finalproject.aran8276.site/api/auth/reset-password",
    {
      email,
      token,
      password,
      password_confirmation,
    }
  );
  console.log("Response dari API:", response.data);
  return response.data}
  catch(error){
    console.error("Error fetching alat:", error);
    throw error;
  }

  
}


export const fetchSewa = async () => {
  try {
    const response = (await apiClient.get("/penyewaan" ));
    return response?.data;
  } catch (error) {
    console.error("Error fetching alat:", error);
    throw error;
  }
};
