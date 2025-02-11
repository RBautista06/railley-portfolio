import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navigation from "./Navigation.jsx";
import Header from "./Header.jsx";
import TechnicalSkills from "./TechnicalSkills.jsx";
import SoftSkills from "./SoftSkills.jsx";
import ShortMessage from "./ShortMessage.jsx";
import Programs from "./Programs.jsx";
import Footer from "./Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navigation />
    <Header />
    <TechnicalSkills />
    <SoftSkills />
    <ShortMessage />
    <Programs />
    <Footer />
  </StrictMode>
);
