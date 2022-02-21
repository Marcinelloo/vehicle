import React from "react";
import { Route, Routes } from "react-router-dom";
import { FilterProvider } from "./components/FilterContext";
import Home from "./pages/Home";

function App() {
  return (
    <FilterProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </FilterProvider>
  );
}

export default App;
