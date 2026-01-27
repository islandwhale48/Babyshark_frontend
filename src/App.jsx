import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import AIGenerator from "./Pages/AIGenerator";
import Dashboard from "./Pages/Dashboard";

import Roadmap from "./Pages/Project/Roadmap";
import Pitch from "./Pages/Project/Pitch";
import Licenses from "./Pages/Project/Licenses";
import Progress from "./Pages/Project/Progress";
import Planner from "./Pages/Project/Planner";
import Explore from "./Pages/Explore";
import FeasibilityCheck from "./Pages/FeasibilityCheck";
import Workspace from "./Pages/Workspace";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/ai" element={<AIGenerator />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<FeasibilityCheck />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/pitch" element={<Pitch />} />
        <Route path="/licenses" element={<Licenses />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/workspace" element={<Workspace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
