import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";


export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="nav-bar">
      <div className="nav-left">
        <div className="nav-logo">
          <a href="#home" onClick={closeMenu}><span>RR</span></a>
        </div>
      </div>
      <div className="nav-menu" onClick={toggleMenu} aria-label="Toggle navigation">
        {isOpen ? <MdOutlineClose /> : <GiHamburgerMenu />}
      </div>
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#journey" onClick={closeMenu}>Journey</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
      <div className="nav-right">
        <a href="#about">About</a>
        <a href="#journey">Journey</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}
