import Header from "./components/Header";
import Footer from "./components/Footer";
import ToolsAndTechnologies from "./pages/ToolsAndTechnologies";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import FloatingBackground from "./components/FloatingBackground";
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Achievements from "./pages/Achievements";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/tools", element: <ToolsAndTechnologies /> },
  { path: "/projects", element: <ProjectPage /> },
  { path: "/aboutme", element: <AboutMe /> },
  { path: "/experience", element: <Experience /> },
  { path: "/achievements", element: <Achievements /> },
]);

const App = () => {
  return (
    <div className="w-full min-h-screen bg-[#050414] text-white font-['Nunito'] overflow-hidden">
      <FloatingBackground />
      <Header />
      <ScrollToTop />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};

export default App;
