import React, { useState } from "react";
import {
    FaEnvelope,
    FaPhone,
    FaLocationDot,
    FaLinkedinIn,
    FaGithub,
    FaPaperPlane,
    FaCheck,
    FaCopy,
    FaSpinner,
} from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState({
        submitting: false,
        submitted: false,
        error: null,
    });

    const [copiedField, setCopiedField] = useState(null);

    const contactInfo = {
        email: "rethisharadhakrishnan5@gmail.com",
        phone: "+91 63832 32154",
        location: "Chennai, Tamil Nadu, India",
        linkedin: "https://www.linkedin.com/in/rethisha-radhakrishnan-a00009233/",
        github: "https://github.com/RETHIII",
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const copyToClipboard = (text, fieldName) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopiedField(fieldName);
            setTimeout(() => setCopiedField(null), 2500);
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, submitted: false, error: null });

        try {
            // Submits directly to your email using FormSubmit.co
            const response = await fetch(`https://formsubmit.co/ajax/${contactInfo.email}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    _subject: formData.subject || `New Portfolio Message from ${formData.name}`,
                    message: formData.message,
                    _captcha: "false",
                    _template: "table",
                }),
            });

            const data = await response.json();

            if (response.ok || data.success === "true" || data.success === true) {
                setStatus({ submitting: false, submitted: true, error: null });
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus({
                    submitting: false,
                    submitted: false,
                    error: data.message || "Unable to send message directly right now. Click below to send via your email app.",
                });
            }
        } catch {
            setStatus({
                submitting: false,
                submitted: false,
                error: "Network error. Please try again or reach out directly using the email on the right.",
            });
        }
    };

    return (
        <section className="contact-page" id="contact">
            {/* Section Header */}
            <div className="contact-header">
                <h2 className="contact-title1">GET IN TOUCH</h2>
                <h3 className="contact-title2">Let's Connect & Work Together</h3>
                <p className="contact-subtitle">
                    Have a project in mind, an opportunity to discuss, or just want to say hi?
                    Feel free to reach out via the form or through any of my direct contact links below.
                </p>
            </div>

           <div className="box-box">
             <div className="contact-container">
                {/* Left Side: Contact Form */}
                <div className="contact-form-wrapper">
                    <div className="contact-form-card">
                        <div className="form-card-header">
                            <span className="header-icon">
                                <FaPaperPlane />
                            </span>
                            <div>
                                <h3>Send Me A Message</h3>
                                <p>I typically respond within 24 hours</p>
                            </div>
                        </div>

                        {status.submitted && (
                            <div className="alert-success">
                                <MdOutlineMarkEmailRead className="alert-icon" />
                                <div>
                                    <strong>Thank you!</strong> Your message has been sent successfully. I'll get back to you soon.
                                </div>
                            </div>
                        )}

                        {status.error && (
                            <div className="alert-error">
                                <p>{status.error}</p>
                                <a
                                    href={`mailto:${contactInfo.email}?subject=${encodeURIComponent(
                                        formData.subject || `Message from ${formData.name || "Portfolio Visitor"}`
                                    )}&body=${encodeURIComponent(
                                        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
                                    )}`}
                                    className="alert-mailto-link"
                                >
                                    Send via Default Email App →
                                </a>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="input-group">
                                <label htmlFor="name">Your Name <span className="required-star">*</span></label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="e.g. John Doe"
                                    required
                                />
                            </div>

                            <div className="input-group">
                                <label htmlFor="email">Your Email <span className="required-star">*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="e.g. john@example.com"
                                    required
                                />
                            </div>

                            <div className="input-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="e.g. Project Inquiry / Job Opportunity"
                                />
                            </div>

                            <div className="input-group">
                                <label htmlFor="message">Message <span className="required-star">*</span></label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    placeholder="Hello Rethisha, I'd like to discuss..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="submit-button"
                                disabled={status.submitting}
                            >
                                {status.submitting ? (
                                    <>
                                        <FaSpinner className="spinner-icon" /> Sending Message...
                                    </>
                                ) : (
                                    <>
                                        Send Message <FaPaperPlane className="btn-send-icon" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right Side: Contact Information & Socials */}
                <div className="contact-info-wrapper">
                    <div className="contact-info-card">
                        <div className="info-card-header">
                            <h3>Contact Information</h3>
                            <p>Feel free to reach out directly through any of these channels</p>
                        </div>

                        {/* Availability Status Badge */}
                        <div className="availability-badge">
                            <span className="pulse-dot"></span>
                            <span>Available for Full-time Roles & Freelance Projects</span>
                        </div>

                        <div className="info-items-list">
                            {/* Email Card */}
                            <div className="info-item">
                                <div className="info-icon-box">
                                    <FaEnvelope />
                                </div>
                                <div className="info-content">
                                    <span className="info-label">Email Address</span>
                                    <a href={`mailto:${contactInfo.email}`} className="info-value">
                                        {contactInfo.email}
                                    </a>
                                </div>
                                <button
                                    type="button"
                                    className="copy-btn"
                                    onClick={() => copyToClipboard(contactInfo.email, "email")}
                                    title="Copy Email"
                                >
                                    {copiedField === "email" ? (
                                        <span className="copied-text"><FaCheck /> Copied!</span>
                                    ) : (
                                        <FaCopy />
                                    )}
                                </button>
                            </div>

                            {/* Phone Card */}
                            <div className="info-item">
                                <div className="info-icon-box">
                                    <FaPhone />
                                </div>
                                <div className="info-content">
                                    <span className="info-label">Phone Number</span>
                                    <a href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`} className="info-value">
                                        {contactInfo.phone}
                                    </a>
                                </div>
                                <button
                                    type="button"
                                    className="copy-btn"
                                    onClick={() => copyToClipboard(contactInfo.phone, "phone")}
                                    title="Copy Phone Number"
                                >
                                    {copiedField === "phone" ? (
                                        <span className="copied-text"><FaCheck /> Copied!</span>
                                    ) : (
                                        <FaCopy />
                                    )}
                                </button>
                            </div>

                            {/* Location Card */}
                            <div className="info-item">
                                <div className="info-icon-box">
                                    <FaLocationDot />
                                </div>
                                <div className="info-content">
                                    <span className="info-label">Location</span>
                                    <span className="info-value static">{contactInfo.location}</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Profiles Section */}
                        <div className="social-links-section">
                            <h4>Social Profiles</h4>
                            <div className="social-buttons-grid">
                                <a
                                    href={contactInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-btn linkedin-btn"
                                >
                                    <div className="social-btn-icon">
                                        <FaLinkedinIn />
                                    </div>
                                    <div className="social-btn-text">
                                        <span className="social-platform">LinkedIn</span>
                                        <span className="social-handle">Connect on LinkedIn</span>
                                    </div>
                                </a>

                                <a
                                    href={contactInfo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-btn github-btn"
                                >
                                    <div className="social-btn-icon">
                                        <FaGithub />
                                    </div>
                                    <div className="social-btn-text">
                                        <span className="social-platform">GitHub</span>
                                        <span className="social-handle">View @RETHIII</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           </div>
        </section>
    );
}