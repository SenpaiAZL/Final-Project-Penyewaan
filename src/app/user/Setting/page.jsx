// pages/settings.js
"use client";

import { useState } from "react";
import Head from "next/head";

export default function Settings() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");
  const [notifications, setNotifications] = useState(true);

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleNotificationsChange = (e) => {
    setNotifications(e.target.checked);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Settings - Voltify</title>
      </Head>
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Website Settings</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          {/* Theme Setting */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Theme
            </label>
            <select
              value={theme}
              onChange={handleThemeChange}
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          {/* Language Setting */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Language
            </label>
            <select
              value={language}
              onChange={handleLanguageChange}
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              {/* Add more languages as needed */}
            </select>
          </div>
          {/* Notifications Setting */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Notifications
            </label>
            <input
              type="checkbox"
              checked={notifications}
              onChange={handleNotificationsChange}
              className="shadow-md appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <span className="ml-2 text-gray-700">Enable Notifications</span>
          </div>
        </div>
      </main>
    </div>
  );
}
