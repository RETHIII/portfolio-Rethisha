import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function footer(){
    return(
        <div className="footer-box">
            <div className="icon-box">
                <a href="https://github.com/RETHIII"className="icon-1"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/rethisha-radhakrishnan-a00009233/"className="icon-2"><FaLinkedin/></a>
            </div>
            <div className="name-box">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#journey">Journey</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="footer-content">
                <p>Copyright © 2026 Rethisha Radhakrishnan. All rights reserved.</p>
            </div>
    </div>

    );
};