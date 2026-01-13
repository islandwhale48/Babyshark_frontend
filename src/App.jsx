import { BrowserRouter, Routes, Route } from "react-router-dom";
import AIGenerator from "./Pages/AIGenerator";
import SelectView from "./Pages/SelectView";
import Roadmap from "./Pages/Roadmap";
import Pitch from "./Pages/Pitch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AIGenerator />} />
        <Route path="/select" element={<SelectView />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/pitch" element={<Pitch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

