import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../auth.css";

export default function Signup() {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState("");
  const [nationalID, setNationalID] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleProfileUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSignup = () => {
    if (!fullname || !nationalID || !mobile || !password) {
      setMessage("تمام فیلدها را کامل کنید");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.some(
      (u) => u.nationalID === nationalID || u.mobile === mobile
    );

    if (exists) {
      setMessage("این کاربر قبلاً ثبت‌نام کرده است ❌");
      return;
    }

    const newUser = {
      fullname,
      nationalID,
      mobile,
      password,
      profileImage: previewImage,
    };

    localStorage.setItem("users", JSON.stringify([...users, newUser]));

    setMessage("ثبت‌نام با موفقیت انجام شد ✔");
    setTimeout(() => navigate("/login"), 1000);
  };

  return (
    <div className="auth-page">
      <div className="page-container">
        <h2>ثبت‌نام</h2>

        {/* آپلود پروفایل */}
        <div className="profile-upload">
          <label className="profile-circle" htmlFor="profilePicker">

  <img
    src={previewImage || "/image/profile.webp"}
    alt="profile"
  />

 
</label>

<input
  id="profilePicker"
  type="file"
  style={{ display: "none" }}
  accept="image/*"
  onChange={handleProfileUpload}
/>


          <div className="profile-text">آپلود عکس پروفایل</div>
        </div>

        {/* فرم ثبت‌نام */}
        <form>
          <input
            type="text"
            placeholder="نام و نام خانوادگی"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />

          <input
            type="text"
            placeholder="کد ملی"
            value={nationalID}
            onChange={(e) => setNationalID(e.target.value)}
          />

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

          <button type="button" onClick={handleSignup}>
            ثبت‌نام
          </button>

          <p>
            حساب داری؟{" "}
            <span className="link" onClick={() => navigate("/login")}>
              ورود
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
