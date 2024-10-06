import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import LoginPopup from "./components/loginPopup/LoginPopup";

function App() {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    {showLogin? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/loginPopup" element={<LoginPopup />} /> */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
