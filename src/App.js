import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { styled } from "./stitches.config";
import React, { useState, useRef, useEffect } from "react";
import PrintLayout from "./pages/PrintLayout";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import ArtDirection from "./pages/ArtDirection";
import Digital from "./pages/Digital";
import About from "./pages/About";

function App() {
  const [liveSection, setLiveSection] = useState("home");
  return (
    <>
      <Router>
        <Routes>
          {" "}
          <Route
            path="/"
            element={
              <Homepage
                liveSection={liveSection}
                setLiveSection={setLiveSection}
              />
            }
          />
          <Route
            path="/projects"
            element={
              <Projects
                liveSection={liveSection}
                setLiveSection={setLiveSection}
              />
            }
          />
          <Route
            path="/print"
            element={
              <PrintLayout
                liveSection={liveSection}
                setLiveSection={setLiveSection}
              />
            }
          />
          <Route
            path="/digital"
            element={
              <Digital
                liveSection={liveSection}
                setLiveSection={setLiveSection}
              />
            }
          />
          <Route
            path="/art-direction"
            element={
              <ArtDirection
                liveSection={liveSection}
                setLiveSection={setLiveSection}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About
                liveSection={liveSection}
                setLiveSection={setLiveSection}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
