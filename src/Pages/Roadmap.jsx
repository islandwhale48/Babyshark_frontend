import { useLocation } from "react-router-dom";

export default function Roadmap() {
  const { state } = useLocation();

  // SAFETY CHECK
  if (!state || !state.roadmap) {
    return <p>No roadmap data available.</p>;
  }

  const roadmap = state.roadmap;

  return (
    <div style={{ padding: "40px" }}>
      <h1>📌 Startup Roadmap</h1>

      {roadmap.map((item) => (
        <div key={item.step} style={{ marginBottom: "20px" }}>
          <h3>
            Step {item.step}: {item.title}
          </h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
