import { Outlet, useNavigate, useLocation } from "react-router-dom";

export default function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <div>
      {/* ✅ DARK AESTHETIC NAVBAR */}
      <div style={navbarStyle}>
        {/* LOGO */}
        <h2
          style={{ cursor: "pointer", margin: 0, color: "white" }}
          onClick={() => navigate("/")}
        >
          BabyShark 🚀
        </h2>

        {/* NAV BUTTONS */}
        <div style={navBtnContainer}>
          <button
            onClick={() => navigate("/explore")}
            style={{
              ...navBtn,
              ...(isActive("/explore") ? activeBtn : {})
            }}
          >
            Explore
          </button>

          <button
            onClick={() => navigate("/")}
            style={{
              ...navBtn,
              ...(isActive("/") ? activeBtn : {})
            }}
          >
            Home
          </button>
        </div>
      </div>

      {/* PAGE CONTENT */}
      <div style={{ paddingTop: 80 }}>
        <Outlet />
      </div>
    </div>
  );
}

/* ===== STYLES ===== */

const navbarStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: 70,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 50px",
  background:" #242424",
  borderBottom: "1px solid white",
  zIndex: 1000
};

const navBtnContainer = {
  display: "flex",
  alignItems: "center",
  gap: 20
};

const navBtn = {
  background: "transparent",
  color: "white",
  border: "none",
  fontSize: 15,
  cursor: "pointer",
  padding: "6px 10px",
  borderBottom: "2px solid transparent",
  transition: "0.2s"
};

const activeBtn = {
  borderBottom: "2px solid white",
  fontWeight: "bold"
};
