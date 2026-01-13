import { useLocation } from "react-router-dom";

export default function Pitch() {
  const { state } = useLocation();

  if (!state || !state.pitch) {
    return <p>No pitch data available.</p>;
  }

  const pitch = state.pitch;

  return (
    <div style={{ padding: "40px" }}>
      <h1>🎤 Startup Pitch</h1>

      <h3>30-Second Pitch</h3>
      <p>{pitch.short}</p>

      <h3>1-Minute Pitch</h3>
      <p>{pitch.long}</p>
    </div>
  );
}
