import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Docs from "./pages/Docs";
import ProtectedLayout from "./components/ProtectedLayout";
import { useImageLoader } from "./components/AppHooks";

function App() {
  useImageLoader();
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Docs />} />
            <Route index={true} element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
