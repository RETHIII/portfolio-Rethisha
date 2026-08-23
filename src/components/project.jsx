import Bus from "../assets/images/busimg.jpg";
import upi from "../assets/images/upiimg.jpg";
import restaurant from "../assets/images/restaurantimg.jpg";
import redu from "../assets/images/rmdimg.jpg";
import { CgMediaLive } from "react-icons/cg";
import { FaGithub } from "react-icons/fa6";

export default function projects() {
    return (
        <div className="parent" id="projects">
            <h2 className="project-title1">MY PROJECTS</h2>
            <h3 className="project-title2">My Works</h3>
            <div className="project-box">
                <div className="pro-box-1">
                    <div className="Image-box">
                        <img src={Bus} alt="bus-images" className="bus-image"></img>
                    </div>
                    <div className="content">
                        <h3>BusEase- bus Booking Website</h3>
                        <p>BusEase is a modern, single-page web application (SPA) built using Spring Boot, REST API, PostgreSQL and HTML5/CSS3/JS for the frontend.</p>
                        <div className="Tech">
                            
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                            <span>Spring Boot</span>
                            <span>PostgreSQL</span>
                            <span>REST API</span>
                        </div>
                        <div className="pro-btn">
                            <a href="https://busease-bus-booking-website.onrender.com/" target="_blank" rel="noopener noreferrer" className="live"><button> Live demo <span className="live-icon"><CgMediaLive /></span></button></a>
                            <a href="https://github.com/RETHIII/BusEase-Bus-Booking-website" target="_blank" rel="noopener noreferrer" className="source"><button>Source Code <span className="git-icon"><FaGithub/></span></button></a>
                        </div>
                    </div>
                </div>
                <div className="pro-box-2">
                    <div className="img-box">
                        <img src={restaurant} alt="restaurant-images" className="restaurant-image"></img>
                    </div>
                    <div className="content-1">
                        <h3>Yummy Restaurant Website</h3>
                        <p>A modern and responsive restaurant website designed and developed using HTML5 and CSS3. This project focuses on creating an 
                            attractive user interface, responsive layouts, smooth animations</p>
                        <div className="Tech-1">
                            <span>HTML</span>
                            <span>CSS</span>
                        </div>
                        <div className="pro-btn">
                            <a href="https://rethiii.github.io/Yummy-Restaurant-website-/" target="_blank" rel="noopener noreferrer" className="live-1"><button> Live demo <span className="live-icon"><CgMediaLive /></span></button></a>
                        <a href="https://github.com/RETHIII/Yummy-Restaurant-website-" target="_blank" rel="noopener noreferrer" className="source-1"><button>Source Code <span className="git-icon"><FaGithub/></span></button></a>
                        </div>
                    </div>

                </div>
                <div className="pro-box-3">
                    <div className="image-box">
                        <img src={redu} alt="reducing-manuf.-img" className="red-img"></img>
                    </div>
                    <div className="content-2">
                        <h3>Reducing Manufacturing Defects</h3>
                        <p>An interactive Power BI data analytics dashboard designed to analyze manufacturing test batches, defect rates, delay impact, maintenance hours, worker productivity, production cost, and measurement-based failure zones.</p>
                        <div className="Tech-2">
                            <span>Power BI</span>
                            <span>Excel</span>
                            <span>DAX</span>
                            <span>Data Cleaning</span>
                            <span>Visualization</span>
                        </div>
                        <div className="pro-btn-1">
                        <a href="https://github.com/RETHIII/Reducing-manufacturing-Defect" target="_blank" rel="noopener noreferrer" className="source-2"><button>Source Code <span className="git-icon"><FaGithub/></span></button></a>
                        </div>
                    </div>
                    

                </div>
                <div className="pro-box-4">
                    <div className="Image-box">
                        <img src={upi} alt="upi-images" className="upi-image"></img>
                    </div>
                    <div className="content">
                        <h3>UPI Fraud Detection Using Machine Learning</h3>
                        <p>The Project designed to predict and detect fraudulent UPI (Unified Payments Interface) transactions. The system  classifier models to analyze transaction 
                            patterns and provides an interactive dashboard for real-time
                             predictions and metric reporting</p>
                        <div className="tech-1">
                            <div className="tech-box-1">
                                <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                            <span>Python</span>
                            </div>
                            <div className="tech-box-2">
                            <span>SQLite</span>
                            <span>Django</span>
                            <span>Machine Learning</span>
                            </div>
                        </div>
                        <div className="pro-btn">
                            <a href="https://upi-fraud-detection-using-machine-9jjy.onrender.com/" target="_blank" rel="noopener noreferrer" className="live"><button> Live demo <span className="live-icon"><CgMediaLive /></span></button></a>
                        <a href="https://github.com/RETHIII/UPI-Fraud-Detection-Using-Machine-Learning" target="_blank" rel="noopener noreferrer" className="source"><button>Source Code <span className="git-icon"><FaGithub/></span></button></a>
                        </div>
                    </div>
                </div>
                
                

            </div>
            <div className="show-box">
            <span className="show-more">View More project on Github</span> 
                <button className="show-more-btn"><a href="https://github.com/RETHIII" target="_blank" rel="noopener noreferrer">show more</a></button>
            </div>

        </div>
    )
};