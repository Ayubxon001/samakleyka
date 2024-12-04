import { Route, Routes } from "react-router-dom";
import "./App.css";

import GlatkiAll from "./Pages/GlatkiAll";
import RootLayout from "./layout/RootLayout";
import Home from "./components/Home";
import DekorAll from "./Pages/DekorAll";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/all-glatki" element={<GlatkiAll />} />
        <Route path="/all-dekor" element={<DekorAll />} />
      </Routes>
    </div>
  );
}

export default App;
