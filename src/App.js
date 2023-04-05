import { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const projectsRef = useRef(null);
  return (
    <>
      <Navbar
        aboutRef={aboutRef}
        homeRef={homeRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      ></Navbar>
      <Routes>
        <Route
          index
          path="/"
          element={
            <Home
              aboutRef={aboutRef}
              homeRef={homeRef}
              projectsRef={projectsRef}
              contactRef={contactRef}
            ></Home>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
