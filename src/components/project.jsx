import Bus from "../assets/images/busimg.jpg";
import upi from "../assets/images/upiimg.jpg";
import restaurant from "../assets/images/restaurantimg.jpg";
import redu from "../assets/images/rmdimg.jpg";
import { CgMediaLive } from "react-icons/cg";
import { FaGithub } from "react-icons/fa6";

export default function Projects() {
    return (
        <section className="parent" id="projects">
            <h2 className="project-title1">MY PROJECTS</h2>
            <h3 className="project-title2">My Works</h3>
            <div className="project-box">
                {/* Project 1 */}
                <div className="pro-card pro-box-1">
                    <div className="pro-image-box">
                        <img src={Bus} alt="BusEase bus booking website" className="pro-image" />
                    </div>
                    <div className="pro-content">
                        <h3>BusEase - Bus Booking Website</h3>
                        <p>
                            BusEase is a modern, single-page web application (SPA) built using
                            Spring Boot, REST API, PostgreSQL, and HTML5/CSS3/JS for the frontend.
                        </p>
                        <div className="tech-tags">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                            <span>Spring Boot</span>
                            <span>PostgreSQL</span>
                            <span>REST API</span>
                        </div>
                        <div className="pro-buttons">
                            <a
                                href="https://busease-bus-booking-website.onrender.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pro-btn-live"
                            >
                                Live Demo <CgMediaLive className="btn-icon" />
                            </a>
                            <a
                                href="https://github.com/RETHIII/BusEase-Bus-Booking-website"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pro-btn-source"
                            >
                                Source Code <FaGithub className="btn-icon" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="pro-card pro-box-2">
                    <div className="pro-image-box">
                        <img src={restaurant} alt="Yummy Restaurant website" className="pro-image" />
                    </div>
                    <div className="pro-content">
                        <h3>Yummy Restaurant Website</h3>
                        <p>
                            A modern and responsive restaurant website designed and developed using
                            HTML5 and CSS3. Features attractive UI, fluid layouts, and smooth animations.
                        </p>
                        <div className="tech-tags">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>Responsive UI</span>
                        </div>
                        <div className="pro-buttons">
                            <a
                                href="https://rethiii.github.io/Yummy-Restaurant-website-/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pro-btn-live"
                            >
                                Live Demo <CgMediaLive className="btn-icon" />
                            </a>
                            <a
                                href="https://github.com/RETHIII/Yummy-Restaurant-website-"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pro-btn-source"
                            >
                                Source Code <FaGithub className="btn-icon" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="pro-card pro-box-3">
                    <div className="pro-image-box">
                        <img src={redu} alt="Reducing Manufacturing Defects dashboard" className="pro-image" />
                    </div>
                    <div className="pro-content">
                        <h3>Reducing Manufacturing Defects</h3>
                        <p>
                            An interactive Power BI data analytics dashboard designed to analyze
                            manufacturing test batches, defect rates, delay impact, worker productivity,
                            and failure zones.
                        </p>
                        <div className="tech-tags">
                            <span>Power BI</span>
                            <span>Excel</span>
                            <span>DAX</span>
                            <span>Data Cleaning</span>
                            <span>Visualization</span>
                        </div>
                        <div className="pro-buttons">
                            <a
                                href="https://github.com/RETHIII/Reducing-manufacturing-Defect"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pro-btn-source"
                            >
                                Source Code <FaGithub className="btn-icon" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project 4 */}
                <div className="pro-card pro-box-4">
                    <div className="pro-image-box">
                        <img src={upi} alt="UPI Fraud Detection System" className="pro-image" />
                    </div>
                    <div className="pro-content">
                        <h3>UPI Fraud Detection Using ML</h3>
                        <p>
                            A machine learning system designed to detect fraudulent UPI transactions.
                            Uses classifier models to analyze transaction patterns with an interactive
                            dashboard for real-time predictions.
                        </p>
                        <div className="tech-tags">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                            <span>Python</span>
                            <span>SQLite</span>
                            <span>Django</span>
                            <span>Machine Learning</span>
                        </div>
                        <div className="pro-buttons">
                            <a
                                href="https://upi-fraud-detection-using-machine-9jjy.onrender.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pro-btn-live"
                            >
                                Live Demo <CgMediaLive className="btn-icon" />
                            </a>
                            <a
                                href="https://github.com/RETHIII/UPI-Fraud-Detection-Using-Machine-Learning"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pro-btn-source"
                            >
                                Source Code <FaGithub className="btn-icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="show-box">
                <span className="show-more">View More projects on GitHub</span>
                <a
                    href="https://github.com/RETHIII"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="show-more-btn"
                >
                    Show More
                </a>
            </div>
        </section>
    );
}