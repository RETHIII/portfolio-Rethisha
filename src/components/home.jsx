import { useState, useEffect } from "react";
import resume from "../assets/document/Rethisha_R_resume.pdf";

export default function Home() {
  const roles = [
    "FULL STACK JAVA DEVELOPER",
    "FRONTEND DEVELOPER",
    "BACKEND DEVELOPER",
    "DATA ANALYST",
  ];
  const [text, setText] = useState("");
  const [roleNo, setRoleNo] = useState(0);
  const [typeNo, setTypeNo] = useState(0);
  const [tyspeed, setTyspeed] = useState(120);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleNo];
    const time = setTimeout(() => {
      if (!isEnd) {
        setText(currentRole.substring(0, typeNo + 1));
        setTypeNo(typeNo + 1);
        if (typeNo + 1 === currentRole.length) {
          setTyspeed(2000);
          setIsEnd(true);
        }
      } else {
        setText(currentRole.substring(0, typeNo - 1));
        setTypeNo(typeNo - 1);
        if (typeNo - 1 === 0) {
          setIsEnd(false);
          setRoleNo((prev) => (prev + 1) % roles.length);
          setTyspeed(120);
        } else {
          setTyspeed(70);
        }
      }
    }, tyspeed);

    return () => clearTimeout(time);
  }, [typeNo, isEnd, roleNo, tyspeed]);
  return (
    <div className="home-page" id="home">
      <h1>
        HI, I AM <span>RETHISHA</span>
      </h1>
      <h2>{text}</h2>
      <div className="home-content">
        <p>
          I’m a passionate Full Stack Java Developer who enjoys building modern,
          responsive, and scalable web applications. I specialize in creating
          seamless user experiences using Java, Spring Boot, React, and
          PostgreSQL, while also leveraging my data analytics skills to develop
          efficient, data-driven solutions.
        </p>
      </div>
      <div className="home-btn">
        <a href="#projects" className="btn1">
          View My Work
        </a>
        <a href={resume} download className="btn2">
          Download CV
        </a>
      </div>
    </div>
  );
}
