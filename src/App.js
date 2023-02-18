import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Boiler2 from "./pages/Boiler2";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path='/' element={<Home/>} /> */}
        {/* <Route path='/' element={<Boiler />} /> */}
        <Route path='/' element={<Boiler2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
