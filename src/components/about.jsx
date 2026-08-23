import profile from "../assets/images/photo.png";
import html from "../assets/images/htmllogo.png";
import css from "../assets/images/csslogo.png";
import bootstrap from "../assets/images/bootstraplogo.png";
import js from "../assets/images/jslogo.png";
import react from "../assets/images/reactlogo.png";
import java from "../assets/images/javalogo.png";
import springboot from "../assets/images/springbootlogo.png";
import postgresql from "../assets/images/postgresqllogo.png";
import git from "../assets/images/gitlogo.png";
import github from "../assets/images/githublogo.png";
import powerbi from "../assets/images/powerbilogo.png";
import excel from "../assets/images/excellogo.png";
import { useEffect, useState } from "react";

export default function About() {
    const skills = [
        { name: "Html", logo: html },
        { name: "css", logo: css },
        { name: "bootstrap", logo: bootstrap },
        { name: "js", logo: js },
        { name: "react", logo: react },
        { name: "java", logo: java },
        { name: "springboot", logo: springboot },
        { name: "postgresql", logo: postgresql },
        { name: "git", logo: git },
        { name: "github", logo: github },
        { name: "powerbi", logo: powerbi },
        { name: "excel", logo: excel },
    ];
    const [rad, setRad] = useState(220);
    useEffect(() => {
        const uprad = () => {
            if (window.innerWidth <= 480) {
                setRad(120);
            } else if (window.innerWidth <= 768) {
                setRad(170);
            } else {
                setRad(220);
            }
        };
        uprad();
        window.addEventListener("resize", uprad);
        return () => {
            window.removeEventListener("resize", uprad);
        };
    }, []);
    return (
        <div className="about-page" id="about">
            <div className="about-box-1">
                <h1>About me </h1>
                <div className="about-content">
                    <h2>Hello!, I am Rethisha</h2>
                    <p>I'm a passionate Full Stack Developer who enjoys turning ideas into real, user-friendly web applications. I love exploring new technologies, solving problems, and building projects that are both functional and visually appealing. Whether it's developing responsive websites, working on backend logic, or analyzing data, I'm always excited to learn something new and improve my skills.<br></br><br></br>

                        Over the past few years, I've worked on projects like a UPI Fraud Detection System, a Bus Booking Application, and Power BI dashboards, which helped me gain practical experience in web development and data analytics. I enjoy challenging myself with new ideas and believe that every project teaches me something valuable. Right now, I'm focused on growing as a Java Full Stack Developer, creating meaningful digital experiences, and continuously learning to become a better developer every day. Thanks for stopping by—feel free to explore my projects and see what I've been working on!</p>

                </div>
            </div>
            <div className="about-box-2">
                <div className="orbit-container">
                    <div className="profile">
                        <img src={profile} alt="profile" className="profile-image" />
                    </div>
                    <div className="orbit-ring">
                        {skills.map((skill, index) => {
                            const angle = (360 / skills.length) * index;

                            return (
                                <div
                                    key={index}
                                    className="skill"
                                    style={{
                                        "--angle": `${angle}deg`,
                                        "--radius": `${rad}px`,
                                    }}
                                >
                                    <img
                                        src={skill.logo}
                                        alt={skill.name}
                                        style={{
                                            transform: `rotate(-${angle}deg)`,
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
