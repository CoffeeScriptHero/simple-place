import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignUp/SignUp.js";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />}></Route>
    </Routes>
  );
};

export default AppRoutes;
