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
          Authorization: "Bearer " + refreshToken,
        },
      }
    );

    console.log("Response from /auth/refresh:", response.data); // Logging

    const newAccessToken = response.data.access_token;
    if (!newAccessToken) {
      throw new Error(
        "Invalid response from /auth/refresh: Missing access_token"
      );
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
        const newAccessToken = await refreshAccessToken();
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(() => {
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
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
    apiClient.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${ACCESS_TOKEN}`;
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
    const response = await apiClient.get("/alat");
    return response?.data;
  } catch (error) {
    console.error("Error fetching alat:", error);
    throw error;
  }
};

export const reset = async (email, token, password, password_confirmation) => {
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
    return response.data;
  } catch (error) {
    console.error("Error fetching alat:", error);
    throw error;
  }
};

// Fungsi untuk fetch semua kategori
export const fetchKategori = async () => {
  try {
    const response = await apiClient.get("/kategori");
    return response.data;
  } catch (error) {
    console.error("Error fetching kategori:", error);
    throw error;
  }
};

// Fungsi untuk menambahkan kategori baru
export const createKategori = async (data) => {
  try {
    const response = await apiClient.post("/kategori", data);
    return response.data;
  } catch (error) {
    console.error("Error creating kategori:", error);
    throw error;
  }
};

// Fungsi untuk memperbarui kategori
export const updateKategori = async (id, data) => {
  try {
    const response = await apiClient.put(`/kategori/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating kategori:", error);
    throw error;
  }
};

// Fungsi untuk menghapus kategori
export const deleteKategori = async (id) => {
  try {
    const response = await apiClient.delete(`/kategori/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting kategori:", error);
    throw error;
  }
};

// Fungsi untuk mengambil data alat
export const fetchalat = async () => {
  try {
    const response = await apiClient.get("/alat");
    return response.data;
  } catch (error) {
    console.error("Error fetching alat:", error);
    throw error;
  }
};

// Fungsi untuk menambahkan alat baru
export const createAlat = async (data) => {
  try {
    const response = await apiClient.post("/alat", data);
    return response.data;
  } catch (error) {
    console.error("Error creating alat:", error);
    throw error;
  }
};

// Fungsi untuk memperbarui alat
export const updateAlat = async (id, data) => {
  try {
    const response = await apiClient.put(`/alat/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating alat:", error);
    throw error;
  }
};

// Fungsi untuk menghapus alat
export const deleteAlat = async (id) => {
  try {
    const response = await apiClient.delete(`/alat/${Number(id)}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting alat:", error.response);
    throw error;
  }
};

// Fungsi untuk fetch semua pengguna
export const fetchUsers = async () => {
  try {
    const response = await apiClient.get("/pelanggan");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// Fungsi untuk membuat pengguna baru
export const createUser = async (data) => {
  try {
    const response = await apiClient.post("/pelanggan", data);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

// Fungsi untuk memperbarui pengguna
export const updateUser = async (id, data) => {
  try {
    const response = await apiClient.put(`/pelanggan/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

// Fungsi untuk menghapus pengguna
export const deleteUser = async (id) => {
  try {
    const response = await apiClient.delete(`/pelanggan/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};

// Fungsi untuk fetch semua penyewaan
export const fetchPenyewaan = async () => {
  try {
    const response = await apiClient.get("/penyewaan");
    return response.data;
  } catch (error) {
    console.error("Error fetching penyewaan:", error);
    throw error;
  }
};

// Fungsi untuk membuat penyewaan baru
export const createPenyewaan = async (data) => {
  try {
    const response = await apiClient.post("/penyewaan", data);
    return response.data;
  } catch (error) {
    console.error("Error creating penyewaan:", error);
    throw error;
  }
};

// Fungsi untuk memperbarui penyewaan
export const updatePenyewaan = async (id, data) => {
  try {
    const response = await apiClient.put(`/penyewaan/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating penyewaan:", error);
    throw error;
  }
};

// Fungsi untuk menghapus penyewaan
export const deletePenyewaan = async (id) => {
  try {
    const response = await apiClient.delete(`/penyewaan/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting penyewaan:", error);
    throw error;
  }
};

// Fungsi untuk fetch semua penyewaan_detail
export const fetchPenyewaanDetail = async () => {
  try {
    const response = await apiClient.get("/penyewaan_detail");
    return response.data;
  } catch (error) {
    console.error("Error fetching penyewaan_detail:", error);
    throw error;
  }
};

// Fungsi untuk membuat penyewaan_detail baru
export const createPenyewaanDetail = async (data) => {
  try {
    const response = await apiClient.post("/penyewaan_detail", data);
    return response.data;
  } catch (error) {
    console.error("Error creating penyewaan_detail:", error);
    throw error;
  }
};

// Fungsi untuk memperbarui penyewaan_detail
export const updatePenyewaanDetail = async (id, data) => {
  try {
    const response = await apiClient.put(`/penyewaan_detail/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating penyewaan_detail:", error);
    throw error;
  }
};

// Fungsi untuk menghapus penyewaan_detail
export const deletePenyewaanDetail = async (id) => {
  try {
    const response = await apiClient.delete(`/penyewaan_detail/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting penyewaan_detail:", error);
    throw error;
  }
};
