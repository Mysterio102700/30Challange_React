import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Clock from "../Clock/Clock";
import ArrayCardioDay from "../ArrayCardioDay/ArrayCardioDay";
import FlexPanelsImageGallery from "../FlexPanelsImageGallery/FlexPanelsImageGallery";
import AjaxTypeAhead from "../AjaxTypeAhead/AjaxTypeAhead";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/array-cardio-day" element={<ArrayCardioDay />} />
        <Route path="/image-gallery" element={<FlexPanelsImageGallery />} />
        <Route path="/ajax-type-ahead" element={<AjaxTypeAhead />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
