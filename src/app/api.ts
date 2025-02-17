// src/app/api.ts
import axios from "axios";

const BASE_URL = "https://api-elektronik-finalproject.aran8276.site/api";
let ACCESS_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLWVsZWt0cm9uaWstZmluYWxwcm9qZWN0LmFyYW44Mjc2LnNpdGUvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3Mzk3NTIwOTcsImV4cCI6MTczOTc1NTY5NywibmJmIjoxNzM5NzUyMDk3LCJqdGkiOiJTUkhqNlVBeFZ1OHVMMnY4Iiwic3ViIjoiMjAiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3IiwicmVmcmVzaCI6ZmFsc2V9.d5BO6sS2cgU2vkC6tDUeqf8LM38KANisVbnWDlqzfr4";
const REFRESH_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLWVsZWt0cm9uaWstZmluYWxwcm9qZWN0LmFyYW44Mjc2LnNpdGUvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3Mzk3NTIwOTcsImV4cCI6MTc0MDM1Njg5NywibmJmIjoxNzM5NzUyMDk3LCJqdGkiOiJKcEtiRktITmZkNUZtMzd6Iiwic3ViIjoiMjAiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3IiwicmVmcmVzaCI6dHJ1ZSwidXNlcl9pZCI6MjB9.KXd24KzjMmo4n6AWDctpNd-UTSN5pM0KivngoaAhvsI"; // Ganti dengan refresh token Anda

// Fungsi untuk memperbarui access token menggunakan refresh token
const refreshAccessToken = async () => {
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/refresh`, // Endpoint untuk refresh token
      { refresh_token: REFRESH_TOKEN },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const newAccessToken = response.data.access_token; // Asumsikan respons berisi access_token baru
    ACCESS_TOKEN = newAccessToken; // Perbarui access token global
    return newAccessToken;
  } catch (error) {
    console.error("Failed to refresh access token:", error);
    throw error;
  }
};

export const fetchAlat = async () => {
  const retryRequest = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/alat`, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      });
      return response.data; // Asumsikan data alat ada di `response.data`
    } catch (error) {
      if (error.response?.status === 401) {
        // Jika token kedaluwarsa, coba refresh token
        console.log("Access token expired. Refreshing token...");
        const newAccessToken = await refreshAccessToken();
        // Coba lagi dengan token baru
        const response = await axios.get(`${BASE_URL}/alat`, {
          headers: {
            Authorization: `Bearer ${newAccessToken}`,
          },
        });
        return response.data;
      }
      console.error("Error fetching alat:", error);
      throw error;
    }
  };

  return retryRequest();
};

