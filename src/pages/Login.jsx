import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../auth.css";

export default function Login() {
  const navigate = useNavigate();

  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const found = users.find(
      (u) => u.mobile === mobile && u.password === password
    );

    if (!found) {
      setMessage("اطلاعات وارد شده صحیح نیست ❌");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(found));
    setMessage("ورود موفقیت‌آمیز ✔");

    setTimeout(() => navigate("/dashboard"), 700);
  };

  return (
    <div className="auth-page">
      <div className="page-container login-form">
        <h2>ورود</h2>

        <input
          type="text"
          placeholder="شماره موبایل"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <input
          type="password"
          placeholder="رمز عبور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {message && (
          <p
            className={
              message.includes("✔") ? "message-success" : "message-error"
            }
          >
            {message}
          </p>
        )}

        <button onClick={handleLogin}>ورود</button>

        <p>
          هنوز ثبت‌نام نکردی؟{" "}
          <span className="link" onClick={() => navigate("/signup")}>
            ثبت‌نام
          </span>
        </p>
      </div>
    </div>
  );
}
