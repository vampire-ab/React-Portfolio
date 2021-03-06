import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Portfolio from "./components/portfolio/Portfolio";
import Menu from "./components/menu/Menu";
import { useState } from "react";
import "./app.scss";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <Menu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
    <div className="sections">
      <Intro />
      <Portfolio/>
      <Works/>
      <Testimonials/>
      <Contact/>
    </div>
    </div>
    
  )
}
