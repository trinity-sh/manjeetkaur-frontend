import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import Donate from "./pages/Donate";
import Footer from "./components/Footer";
import Work from "./pages/Work";
import About from "./pages/About";

const App = () => {
    return (
        <BrowserRouter>
            <div className="wide:pt-[263px] mob:pt-20 invisible" />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/donate" element={<Donate />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
