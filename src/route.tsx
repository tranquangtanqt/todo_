import { Route, Routes, HashRouter } from "react-router-dom";
import React from "react";
import { MasterLayout } from "./pages/_layout/master-layout";

export const RoutesRoot = () => {
  return (
    <HashRouter>
      <MasterLayout>
        <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
      </MasterLayout>
    </HashRouter>
  );
};
