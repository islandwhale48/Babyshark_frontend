import { useLocation, useNavigate } from "react-router-dom";

export default function SelectView() {
  const navigate = useNavigate();
  const { state } = useLocation(); // AI data

  return (
    <div style={{ padding: "40px" }}>
      <h1>Choose what you want to view</h1>

      <div style={{ display: "flex", gap: "30px", marginTop: "40px" }}>
        
        <div
          onClick={() => navigate("/roadmap", { state })}
          style={{
            flex: 1,
            padding: "40px",
            border: "2px solid black",
            borderRadius: "16px",
            cursor: "pointer"
          }}
        >
          <h2>📌 Roadmap</h2>
          <p>Step-by-step plan to execute your startup</p>
        </div>

        <div
          onClick={() => navigate("/pitch", { state })}
          style={{
            flex: 1,
            padding: "40px",
            border: "2px solid black",
            borderRadius: "16px",
            cursor: "pointer"
          }}
        >
          <h2>🎤 Pitch</h2>
          <p>Investor-ready startup pitch</p>
        </div>

      </div>
    </div>
  );
}
