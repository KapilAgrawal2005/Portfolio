import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ToolsAndTechnologies from "./components/ToolsTechnology/ToolsAndTechnologies";
import Home from "./components/Home";
import ProjectPage from "./components/Projects/ProjectPage";
import FloatingBackground from "./components/FloatingBackground";
import AboutMe from "./components/About/AboutMe";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/tools", element: <ToolsAndTechnologies /> },
  { path: "/projects", element: <ProjectPage /> },
  { path: "/aboutme", element: <AboutMe /> },
]);

const App = () => {
  return (
    <div className="w-full min-h-screen bg-[#111] text-white font-['Nunito'] overflow-hidden">
      <FloatingBackground />
      <Header />
      <ScrollToTop />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};

export default App;
