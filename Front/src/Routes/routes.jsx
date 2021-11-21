import React from "react";
import { Routes, Route } from 'react-router-dom';
import EmployeePage from "../Components/EmployeePage";
import { Home } from "../Components/Homepage";
import { Packaging } from "../Components/Packaging";
import TrackProduct from "../Components/TrackProduct";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/employee" element={<EmployeePage />}>
            </Route>
            <Route path="/track" element={<TrackProduct />}>
            </Route>
            <Route path="/packaging" element={<Packaging />}>
            </Route>
        </Routes>
    );
}

export { AllRoutes };