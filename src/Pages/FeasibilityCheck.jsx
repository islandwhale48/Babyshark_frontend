import { useState } from "react";
import MainLayout from "../Layout/MainLayout";
import { useNavigate } from "react-router-dom"

export default function FeasibilityCheck() {
  const [form, setForm] = useState({
    idea: "",
    location: "",
    budget: "",
    audience: ""
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);
  const [startupName, setStartupName] = useState("")
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleContinue = () => {
    if (!startupName.trim()) {
      alert("Please enter a startup name");
      return;
    }

    navigate("/workspace", {
      state: {
        startupName,
        feasibilityResult: result
      }
    });
  };
 const score = Number(result?.feasibilityScore?.score);
  const isPromising = score >= 0.6;
  const checkFeasibility = async () => {
    setError("");
    setResult(null);

    if (!form.idea || !form.location || !form.budget || !form.audience) {
      setError("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/feasibility", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!res.ok) throw new Error("Failed");

      const data = await res.json();
      setResult(data);

    } catch (err) {
      setError("Feasibility analysis failed");
    }

    setLoading(false);
  };
 

  return (


    <div style={styles.container}>
      <h1>Startup Feasibility Checker</h1>

      <textarea
        name="idea"
        placeholder="Describe your startup idea"
        rows={4}
        value={form.idea}
        onChange={handleChange}
      />

      <input
        name="location"
        placeholder="Target location (India, Bangalore, etc.)"
        value={form.location}
        onChange={handleChange}
      />

      <select name="budget" value={form.budget} onChange={handleChange}>
        <option value="">Select Budget</option>
        <option value="low">Low (₹0–2L)</option>
        <option value="medium">Medium (₹2–10L)</option>
        <option value="high">High (₹10L+)</option>
      </select>

      <select name="audience" value={form.audience} onChange={handleChange}>
        <option value="">Select Audience</option>
        <option value="students">Students</option>
        <option value="professionals">Professionals</option>
        <option value="businesses">Businesses</option>
        <option value="general">General Public</option>
      </select>

      <button onClick={checkFeasibility} disabled={loading}>
        {loading ? "Analyzing..." : "Check Feasibility"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {result && (
        <>
          <h2>Problem</h2>
          <p>{result.problem}</p>

          <h2>Existing Solutions</h2>
          <p>{result.existingSolutions}</p>

          <h2>Market Gap</h2>
          <p>{result.marketGap}</p>

          <h2>Feasibility Score</h2>
          <p>{result.feasibilityScore.score} / 10</p>

          <h2>Justification</h2>
          <p>{result.feasibilityScore.justification}</p>
        </>
      )}

      {result && (
  <>
    <p><strong>Problem:</strong> {result.problem}</p>
    <p><strong>Existing Solutions:</strong> {result.existingSolutions}</p>
    <p><strong>Market Gap:</strong> {result.marketGap}</p>
    <p><strong>Feasibility Score:</strong> {score} / 10</p>
    <p><strong>Justification:</strong> {result.feasibilityScore.justification}</p>
  </>
)}

{isPromising && (
  <div className="success-box">
    <h2>🎉 Yay! Your idea seems promising!</h2>
    <p>Let’s go ahead and give it a name.</p>

    <input
      type="text"
      placeholder="Enter your startup name"
      value={startupName}
      onChange={(e) => setStartupName(e.target.value)}
    />

    <button onClick={handleContinue}>
      Continue →
    </button>
  </div>
)}

    </div>


  );
}

const styles = {
  container: {
    width: 1250,
    height: 1000,
    margin: "auto",
    padding: 40,
    display: "flex",
    flexDirection: "column",
    gap: 14,
    color: "#f5f5f5",          // 👈 LIGHT TEXT
    backgroundColor: "#0f0f0f" // 👈 DARK BG
  },
  input: {
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
    border: "1px solid #333",
    padding: "10px",
    borderRadius: "6px"
  },
  select: {
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
    border: "1px solid #333",
    padding: "10px",
    borderRadius: "6px"
  },
  button: {
    marginTop: 10,
    padding: "12px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },
  resultBox: {
    marginTop: 30,
    padding: 20,
    border: "1px solid #333",
    borderRadius: 8,
    backgroundColor: "#121212",
    color: "#e5e5e5"
  }

};

