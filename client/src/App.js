import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContents from "./mainUI/component/MainContents";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<MainContents />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
