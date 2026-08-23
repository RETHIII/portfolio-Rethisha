import React, { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa6";

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing portfolio...");
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Total duration: 3.2 seconds for progress + 0.5s smooth exit = ~3.7s
    const totalDuration = 3200;
    const intervalTime = 32;
    const increment = 100 / (totalDuration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress < 25) {
      setStatusText("Initializing portfolio environment...");
    } else if (progress < 55) {
      setStatusText("Loading skills & project showcases...");
    } else if (progress < 85) {
      setStatusText("Configuring interactive elements...");
    } else if (progress < 100) {
      setStatusText("Finalizing experience...");
    } else {
      setStatusText("Welcome to my portfolio!");
      // Trigger smooth exit transition
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
        const finishTimer = setTimeout(() => {
          if (onFinish) onFinish();
        }, 600);
        return () => clearTimeout(finishTimer);
      }, 350);

      return () => clearTimeout(exitTimer);
    }
  }, [progress, onFinish]);

  return (
    <div className={`loader-overlay ${isExiting ? "loader-fade-out" : ""}`}>
      {/* Background Animated Glows */}
      <div className="loader-glow loader-glow-1"></div>
      <div className="loader-glow loader-glow-2"></div>

      <div className="loader-card">
        {/* Animated Brand Logo */}
        <div className="loader-logo-wrapper">
          <div className="loader-orbit-ring"></div>
          <div className="loader-orbit-ring-reverse"></div>
          <div className="loader-logo-core">
            <span>RR</span>
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="loader-name">
          RETHISHA <span>RADHAKRISHNAN</span>
        </h1>
        <div className="loader-tag">
          <FaCode className="loader-tag-icon" />
          <span>FULL STACK DEVELOPER</span>
        </div>

        {/* Progress Bar and Percentage */}
        <div className="loader-progress-section">
          <div className="loader-progress-header">
            <span className="loader-status-text">{statusText}</span>
            <span className="loader-percent">{Math.min(100, Math.floor(progress))}%</span>
          </div>
          <div className="loader-bar-bg">
            <div
              className="loader-bar-fill"
              style={{ width: `${Math.min(100, progress)}%` }}
            >
              <div className="loader-bar-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
