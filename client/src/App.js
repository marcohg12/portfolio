import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import MainPage from "./pages/MainPage";
import CSProject from "./pages/project-pages/CSProject";
import SOProject2 from "./pages/project-pages/SOProject2";
import APProject from "./pages/project-pages/APProject";
import DB1Project from "./pages/project-pages/DB1Project";
import DB2Project from "./pages/project-pages/DB2Project";
import DSProject from "./pages/project-pages/DSProject";
import SOProject1 from "./pages/project-pages/SOProject1";
import NotFoundPage from "./pages/NotFoundPage";
import './App.css';

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
            <Route path="so-project-2" element={<SOProject2/>}/>
            <Route path="ap-project" element={<APProject/>}/>
            <Route path="so-project-1" element={<SOProject1/>}/>
            <Route path="db1-project" element={<DB1Project/>}/>
            <Route path="db2-project" element={<DB2Project/>}/>
            <Route path="ds-project" element={<DSProject/>}/>
          </Route>
          <Route path="contact" element={<Contact/>}/>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
