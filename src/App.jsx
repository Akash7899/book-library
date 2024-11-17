import React from "react";
import Home from "./Home/Home";
// import Course from "./components/Course";
import { Route, Routes } from "react-router-dom";
import Courses from "./Courses/Courses";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/course" element={<Courses />}></Route>
      </Routes>
    </>
  );
}

export default App;
