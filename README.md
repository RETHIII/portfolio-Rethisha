# Portfolio - Rethisha Radhakrishnan 🚀

<div align="center">

  ![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
  ![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![CSS3](https://img.shields.io/badge/CSS3-Glassmorphism-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![Java](https://img.shields.io/badge/Java-Full--Stack-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
  ![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

  <p align="center">
    A modern, sleek, and high-performance personal developer portfolio built with <strong>React 19</strong>, <strong>Vite</strong>, and tailored <strong>Vanilla CSS</strong> featuring dark glassmorphism, dynamic animations, and responsive design.
  </p>

  <p align="center">
    <a href="https://github.com/RETHIII/Portfolio-Rethisha"><strong>Explore repository »</strong></a>
    ·
    <a href="https://github.com/RETHIII/Portfolio-Rethisha/issues">Report Bug</a>
    ·
    <a href="https://github.com/RETHIII/Portfolio-Rethisha/issues">Request Feature</a>
  </p>

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Showcased Projects](#-showcased-projects)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [Contact](#-contact)
- [License](#-license)

---

## ✨ Overview

This portfolio serves as a central hub showcasing my expertise as a **Full Stack Java Developer**, highlighting real-world projects, educational timeline, technical skillset, and interactive direct contact capabilities.

Designed with a curated **Dark & Neon-Orange Glassmorphism** aesthetic (`#222831`, `#393e46`, `#f96d00`), it delivers a seamless user experience across mobile, tablet, and desktop screens.

---

## 🌟 Key Features

- **⚡ Animated Initial Loading Screen**:
  - ~3.5-second preloader with dual rotating neon-orange orbit rings around the `RR` emblem.
  - Real-time `0%` to `100%` progress bar with dynamic initialization status messages and smooth exit fade-out.

- **🎯 Interactive Hero Section**:
  - Typing role animation cycling across *Full Stack Java Developer*, *Frontend Developer*, *Backend Developer*, and *Data Analyst*.
  - Direct actions to view projects or download resume.

- **🪐 Orbiting Skills & About Me**:
  - Dynamic orbital skill ring with responsive radius showcasing frontend, backend, database, and analytics logos.
  - Comprehensive developer background summary.

- **🎓 Interactive Journey & Education Timeline**:
  - Scroll-triggered timeline items with intersection observer animations.
  - Skill sliders with animated circular percentage rings.

- **💻 Featured Project Cards**:
  - Detailed showcase cards featuring BusEase SPA, Yummy Restaurant, Power BI Defect Dashboard, and UPI Machine Learning Fraud Detection.
  - Live Demo and GitHub source code buttons with micro-animations.

- **📬 Direct Contact Form & Information Hub**:
  - Split responsive layout: Contact form with direct email delivery forwarding via `FormSubmit` and fallback support.
  - Direct contact cards (Email, Phone, Location) with **one-click copy to clipboard** buttons and active status indicator.
  - Social profile cards linking directly to **LinkedIn** and **GitHub**.

- **📱 Fully Responsive Design**:
  - Mobile-first adaptive media queries (Desktop, Tablet, Mobile <=768px, Small Mobile <=480px, and <=320px).

---

## 🛠️ Tech Stack

### Frontend & Core
- **Framework / Library**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: Vanilla CSS3 (Custom Design System, Flexbox, CSS Grid, Glassmorphism, CSS Keyframes)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (`fa6`, `md`, `gi`, `cg`)

### Backend & Analytics Competencies
- **Languages**: Java, JavaScript, Python, SQL
- **Frameworks & DB**: Spring Boot, REST APIs, PostgreSQL, SQLite, Django
- **Tools & Analytics**: Git, GitHub, Power BI, Microsoft Excel, DAX

---

## 📂 Project Architecture

```plaintext
Portfolio-Rethisha/
├── public/
│   └── logo.png              # Favicon & Brand logo
├── src/
│   ├── assets/
│   │   ├── document/         # Resume PDF
│   │   └── images/           # Project screenshots & tech logos
│   ├── components/
│   │   ├── Loader.jsx        # 3.5s Initial animated preloader
│   │   ├── Nav.jsx           # Fixed responsive navigation bar
│   │   ├── home.jsx          # Hero section with role typing effect
│   │   ├── about.jsx         # About summary with orbiting skill wheel
│   │   ├── journey.jsx       # Education timeline & skill percent rings
│   │   ├── project.jsx       # Works showcase with demo links
│   │   ├── contact.jsx       # Contact form & social cards
│   │   └── footer.jsx        # Copyright & quick navigation footer
│   ├── App.css               # Global theme & responsive styles
│   ├── App.jsx               # Root application component
│   └── main.jsx              # React DOM entry point
├── index.html                # HTML entry & SEO meta tags
├── package.json              # Project dependencies & scripts
└── vite.config.js            # Vite configuration
```

---

## 💼 Showcased Projects

| Project | Tech Stack | Links |
| :--- | :--- | :--- |
| **BusEase** | Spring Boot, REST API, PostgreSQL, HTML5/CSS3/JS | [Live Demo](https://busease-bus-booking-website.onrender.com/) • [GitHub](https://github.com/RETHIII/BusEase-Bus-Booking-website) |
| **Yummy Restaurant** | HTML5, CSS3, Responsive Design, Animations | [Live Demo](https://rethiii.github.io/Yummy-Restaurant-website-/) • [GitHub](https://github.com/RETHIII/Yummy-Restaurant-website-) |
| **Manufacturing Defects Analytics** | Power BI, Excel, DAX, Data Cleaning | [GitHub](https://github.com/RETHIII/Reducing-manufacturing-Defect) |
| **UPI Fraud Detection** | Python, Machine Learning, Django, SQLite | [Live Demo](https://upi-fraud-detection-using-machine-9jjy.onrender.com/) • [GitHub](https://github.com/RETHIII/UPI-Fraud-Detection-Using-Machine-Learning) |

---

## 🚀 Getting Started

Follow these steps to run the portfolio locally on your machine:

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RETHIII/Portfolio-Rethisha.git
   cd Portfolio-Rethisha
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment

The project can be deployed easily on platforms such as **GitHub Pages**, **Vercel**, or **Render**:

### Deploying to GitHub Pages:
1. In `vite.config.js`, set `base: "/Portfolio-Rethisha/"`.
2. Run `npm run build`.
3. Deploy the `dist` folder to GitHub Pages.

### Deploying to Vercel / Netlify:
- Connect your GitHub repository (`Portfolio-Rethisha`) to Vercel/Netlify.
- Build command: `npm run build`
- Output directory: `dist`

---

## 📬 Contact

**Rethisha Radhakrishnan**  
*Full Stack Java Developer*

- 📧 **Email**: [rethisharadhakrishnan5@gmail.com](mailto:rethisharadhakrishnan5@gmail.com)
- 📞 **Phone**: [+91 63832 32154](tel:+916383232154)
- 💼 **LinkedIn**: [linkedin.com/in/rethisha-radhakrishnan-a00009233](https://www.linkedin.com/in/rethisha-radhakrishnan-a00009233/)
- 🐙 **GitHub**: [@RETHIII](https://github.com/RETHIII)
- 📍 **Location**: Chennai, Tamil Nadu, India

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

<div align="center">
  <sub>Designed & Developed with ❤️ by <strong>Rethisha Radhakrishnan</strong></sub>
</div>
