import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Layout from "./components/Layout"
import Contact from "./pages/Contact"
import AuthRequired from "./components/AuthRequired"
import Dominik from "./pages/Dominik"
import ITSolutions from "./pages/ITSolutions"
import Projects from "./pages/Projects"




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="certifications" element={<ITSolutions />} />
          <Route path="experience" element={<Dominik />} />
          <Route path="contact" element={<Contact />} />     
          
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
