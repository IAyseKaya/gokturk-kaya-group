import { useState } from "react";
import "./App.css";
import MainPage from "./MainPage/MainPage.jsx";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from  "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const [theme, setTheme] = useState(true);

  const changeMode = () => {
    if (theme) {
      setTheme(false);
    } else {
      setTheme(true);
    }
  };

  return (
    <div
      id="body"
      className={theme ? "bg-zinc-300 text-zinc-600" : "bg-zinc-600 text-zinc-300" }
    >
      <BrowserRouter>
        <Navbar />
        <div className="sticky h-0  ml-40 bg-transparent top-6 z-50 cursor-pointer text-lg flex item-center justify-start border-spacing-1">
          <div className="inner relative">
            <label className="switch">
              <input
                type="checkbox"
                onClick={changeMode}
                onChange={(e) => {}}
                checked={theme == true}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="about" element={<About />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
