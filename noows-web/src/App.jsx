import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Article from "./pages/Article/Article";
import Saved from "./pages/Saved/Saved";
import BriefReader from "./pages/briefReader/BriefReader";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/article/:id" element={<Article />} />

      <Route path="/saved" element={<Saved />} />
      <Route path="/brief" element={<BriefReader />} />
    </Routes>
  );
}

export default App;