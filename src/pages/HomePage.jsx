import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function HomePage() {
  const navigate = useNavigate();

  const [cpu, setCpu] = useState("");
  const [ram, setRam] = useState("");
  const [gpu, setGpu] = useState("");
  const [hdd, setHdd] = useState("");

  const handleCheck = () => {
    alert("Compatibility Checked!");
  };

  const goToTestMyPC = () => {
    navigate("/testmypc");
  };

  return (
    <div className="page">

      {/* ===== HEADER ===== */}
      <header className="top-header">

        {/* لوگو سمت چپ */}
        <div className="header-left">
          <img
            src="/image/assemble.jpg"
            alt="logo"
            className="header-logo"
          />
        </div>

        {/* منوی وسط */}
        <nav className="top-nav">
          <span className="nav-item" onClick={() => navigate("/testmypc")}>TEST MY PC</span>
          <span className="nav-item">GPU BENCHMARK</span>
          <span className="nav-item">CPU BENCHMARK</span>
          <span className="nav-item">LAPTOP BENCHMARK</span>
          <span className="nav-item">CASE BENCHMARK</span>
        </nav>

        {/* پروفایل + لینک‌های ورود */}
        <div className="header-right">
          <img
            src="/image/profile.webp"
            alt="profile"
            className="header-profile"
          />

          <div className="auth-links">
            <span onClick={() => navigate("/login")}>LOGIN</span>
            <span onClick={() => navigate("/signup")}>REGISTER</span>
          </div>
        </div>

      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main className="main">

        {/* ردیف بالایی */}
        <section className="row row-top">

          {/* عکس بزرگ هرو */}
          <div className="hero-image-wrapper">
            <img src="/image/diver-placeholder.png" alt="hero" className="hero-image" />
          </div>

          {/* کارت WHY */}
          <div className="why-card">
            <h2 className="why-title">WHY ASSEMBLE YAR?</h2>
            <p className="why-text">
              assembleyar is a comprehensive software that allows you to select
              and assemble computer components with ease.
            </p>
            <div className="why-tag">TEST MY PC</div>
          </div>

          {/* کارت Compatibility */}
          <div className="compatibility-side-card">
            <h3>Compatibility</h3>
            <ul>
              <li>Component selection</li>
              <li>Price comparison</li>
              <li>Smart recommendations</li>
            </ul>
          </div>

        </section>

        {/* ردیف پایینی */}
        <section className="row row-bottom">

          {/* انتخاب قطعات */}
          <div className="system-card">
            <h3 className="system-title">SYSTEM Assembly</h3>

            <div className="system-selects">
              <select value={cpu} onChange={(e) => setCpu(e.target.value)}>
                <option>CPU</option>
                <option>INTEL i5</option>
                <option>INTEL i7</option>
                <option>RYZEN 5</option>
              </select>

              <select value={ram} onChange={(e) => setRam(e.target.value)}>
                <option>RAM</option>
                <option>8GB</option>
                <option>16GB</option>
                <option>32GB</option>
              </select>

              <select value={gpu} onChange={(e) => setGpu(e.target.value)}>
                <option>GPU</option>
                <option>RTX 3060</option>
                <option>RTX 4060</option>
                <option>RX 6600</option>
              </select>

              <select value={hdd} onChange={(e) => setHdd(e.target.value)}>
                <option>HDD</option>
                <option>1TB</option>
                <option>2TB</option>
                <option>SSD 512GB</option>
              </select>
            </div>

            <button className="btn-primary" onClick={handleCheck}>
              Check Compatibility
            </button>
          </div>

          {/* نتایج */}
          <div className="result-card">
            <h3 className="result-title">Results</h3>

            <div className="result-row">
              <span className="result-label">CPU</span>
              <span className="result-value">INTEL</span>
            </div>

            <div className="result-row">
              <span className="result-label">Motherboard</span>
              <span className="result-value">ASUS P41</span>
            </div>

            <div className="result-row">
              <span className="result-label">RAM</span>
              <span className="result-value">16GB</span>
            </div>

            <div className="result-row">
              <span className="result-label">Storage</span>
              <span className="result-value">256GB</span>
            </div>

            <button className="btn-secondary" onClick={goToTestMyPC}>
              Select This System
            </button>
          </div>

        </section>

        <hr className="blue-divider" />
      </main>

    </div>
  );
}
