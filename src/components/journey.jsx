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
import { useEffect } from "react";

const educationData = [
  {
    year: "2018 - 2019",
    school: "MPB Government Girls Higher Secondary School",
    degree: "10th Grade",
    score: "Percentage: 73%",
  },
  {
    year: "2020 - 2021",
    school: "MPB Government Girls Higher Secondary School",
    degree: "12th Grade",
    score: "Percentage: 81.07%",
  },
  {
    year: "2021 - 2025",
    school: "Sathyabama Institute of Science and Technology",
    degree: "B.Tech Information Technology",
    score: "CGPA: 7.90 / 10",
  },
];

export default function EducationTimeline() {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);
  const skillsTop = [
  { name: "HTML", image: html, percentage: 97, color: "#ff6b00" },
  { name: "CSS", image: css, percentage: 95, color: "#2196F3" },
  { name: "Bootstrap", image: bootstrap, percentage: 90, color: "#7952B3" },
  { name: "JavaScript", image: js, percentage: 92, color: "#f7df1e" },
  { name: "React", image: react, percentage: 90, color: "#61dafb" },
  { name: "Java", image: java, percentage: 88, color: "#f89820" },
];

const skillsBottom = [
  { name: "Spring Boot", image: springboot, percentage: 85, color: "#6DB33F" },
  { name: "PostgreSQL", image: postgresql, percentage: 86, color: "#336791" },
  { name: "Git", image: git, percentage: 90, color: "#F05032" },
  { name: "GitHub", image: github, percentage: 90, color: "#ffffff" },
  { name: "Power BI", image: powerbi, percentage: 92, color: "#F2C811" },
  { name: "Excel", image: excel, percentage: 95, color: "#217346" },
];
  
  return (
    <section className="journey-page" id="journey">
        <h2 className="journey-title1">MY JOURNEY</h2>
      <h3 className="journey-title2">Education</h3>
      <div className="timeline">
        {educationData.map((item, index) => (
          <div
            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
            key={index}
          >
            <div className="timeline-content">
              <span className="year">{item.year}</span>

              <h3>{item.school}</h3>

              <h4>{item.degree}</h4>

              <p>{item.score}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="skills-section">

    <h3 className="skill-title">Skills</h3>

    <div className="skill-box">

        <div className="slider left-slider">

            <div className="slide-track">

                {[...skillsTop, ...skillsTop].map((skill, index) => {

                    const radius = 45;
                    const circumference = 2 * Math.PI * radius;
                    const offset =
                        circumference -
                        (circumference * skill.percentage) / 100;

                    return (

                        <div className="skill-item" key={index}>

                            <div className="skill-card">

                                <svg className="progress-ring">

                                    <circle
                                        className="ring-bg"
                                        cx="50"
                                        cy="50"
                                        r={radius}
                                    />

                                    <circle
                                        className="ring-progress"
                                        cx="50"
                                        cy="50"
                                        r={radius}
                                        style={{
                                            stroke: skill.color,
                                            "--offset": offset,
                                            strokeDasharray: circumference,
                                        }}
                                    />

                                </svg>

                                <img src={skill.image} alt="" />

                            </div>

                            <div className="skill-info">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-percentage">-{skill.percentage}%</span>
                            </div>

                        </div>

                    );
                })}

            </div>

        </div>

        <div className="slider right-slider">

            <div className="slide-track reverse">

                {[...skillsBottom, ...skillsBottom].map((skill, index) => {

                    const radius = 45;
                    const circumference = 2 * Math.PI * radius;
                    const offset =
                        circumference -
                        (circumference * skill.percentage) / 100;

                    return (

                        <div className="skill-item" key={index}>

                            <div className="skill-card">

                                <svg className="progress-ring">

                                    <circle
                                        className="ring-bg"
                                        cx="50"
                                        cy="50"
                                        r={radius}
                                    />

                                    <circle
                                        className="ring-progress"
                                        cx="50"
                                        cy="50"
                                        r={radius}
                                        style={{
                                            stroke: skill.color,
                                            "--offset": offset,
                                            strokeDasharray: circumference,
                                        }}
                                    />

                                </svg>

                                <img src={skill.image} alt="" />

                            </div>

                            <div className="skill-info">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-percentage">-{skill.percentage}%</span>
                            </div>

                        </div>

                    );
                })}

            </div>

        </div>

    </div>

</div>
    </section>
    
  );
}