import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import TestMyPC from "./pages/TestMyPC";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      {/* صفحه اصلی */}
      <Route path="/" element={<HomePage />} />

      {/* تست مای پی‌سی */}
      <Route path="/testmypc" element={<TestMyPC />} />

      {/* احراز هویت */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* داشبورد */}
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
