import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";
import Work from "./components/Work";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
