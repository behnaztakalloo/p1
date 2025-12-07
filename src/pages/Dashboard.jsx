import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("loggedInUser");
    if (!data) {
      navigate("/login");
    } else {
      setUser(JSON.parse(data));
    }
  }, []);

  function logout() {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  }

  return (
    <div style={{ padding: "40px" }}>
      <h2>Dashboard</h2>

      {user && (
        <p>
          سلام {user.name}! — کد ملی شما: {user.nationalId}
        </p>
      )}

      <button onClick={logout} style={{ marginTop: "20px" }}>
        خروج از حساب
      </button>
    </div>
  );
}
