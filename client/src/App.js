import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import MainPage from "./pages/MainPage";
import CSProject from "./pages/project-pages/CSProject";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainPage/>}/>
          <Route path="about-me" element={<AboutMe/>}/>
          <Route path="projects">
            <Route index element={<Projects/>}/>
            <Route path="cs-project" element={<CSProject/>}/>
          </Route>
          <Route path="contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
