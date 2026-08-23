import "./App.css";
import React, { useState } from "react";
import Loader from "./components/Loader.jsx";
import Nav from "./components/Nav.jsx";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Journey from "./components/journey.jsx";
import Project from "./components/project.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/footer.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      <div className={`container ${loading ? "app-hidden" : "app-visible"}`}>
        <Nav />
        <Home />
        <About />
        <Journey />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
}