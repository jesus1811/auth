import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Inicio from "../pages/Inicio";
import Register from "../pages/Register";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
