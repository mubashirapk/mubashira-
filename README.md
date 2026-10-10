# 🌟 Personal Portfolio Website - Mubashira PK

A modern, responsive, professional personal portfolio website designed for students, freshers, and software developers. Built with **HTML5**, **CSS3**, **Bootstrap 5**, and **JavaScript** featuring a dark theme, neon purple/blue glowing accents, smooth animations, and clean modular code.

---

## 📸 Overview & Features

- **Modern Dark Aesthetic**: Deep black background (`#0a0c10`) with vibrant purple (`#8b5cf6`) and electric blue/cyan (`#06b6d4`) accents, glowing light orbs, and glassmorphic cards.
- **Hero Section**: Dynamic typewriter role animation, introduction, floating badges, social media links, and interactive call-to-action buttons.
- **About Me**: Highlights career goals, analytical mindset, and core competencies with key detail points.
- **Skills Grid**: Data Analyst core skills (Python for Data, Exploratory Data Analysis (EDA), Advanced Excel, EDA Projects & Insights, SQL & Databases, Data Visualization, Git & Jupyter, Web Presentation) with animated progress indicators.
- **Featured Projects**:
  1. **Exploratory Data Analysis (EDA) Project** (Python, Pandas, NumPy, Seaborn, Matplotlib, Jupyter)
  2. **Sales Analytics Dashboard** (Advanced Excel, Pivot Tables, XLOOKUP, KPI Modeling, Slicers)
  3. **LMS - Softroniics Learning Management System** (Web Application)
  4. **AutoResq - Mechanic Assistance App** (Flutter & Google Maps)
  5. **Blessing - Islamic Tracker** (Flutter Lifestyle & Habit Tracking)
- **Academic Timeline**: Clean vertical education roadmap with badges and key coursework.
- **Interactive Contact Form**: Real-time JavaScript validation with error and success alerts, plus email and social links.
- **Fully Responsive**: Optimized for desktop, tablet, and mobile screens using Bootstrap 5's responsive grid system.
- **Beginner & Workshop Friendly**: Organized with clear HTML/CSS/JS comments, making customization effortless for beginners.

---

## 📁 File Structure

```text
portfolio/
├── index.html            # Main semantic HTML5 structure & Bootstrap layout
├── style.css             # Custom CSS variables, dark theme, glowing accents, responsive styles
├── script.js             # Vanilla JS: Typewriter effect, form validation, navbar & scroll behaviors
├── README.md             # Project documentation and customization guide
└── assets/               # Image assets and project thumbnails
    ├── profile.jpg       # Profile portrait photo
    ├── project-eda.jpg   # Exploratory Data Analysis (EDA) project thumbnail
    ├── project-excel.jpg # Advanced Excel analytics dashboard thumbnail
    ├── project-lms.jpg   # Softroniics LMS project thumbnail
    ├── project-autoresq.jpg # AutoResq project thumbnail
    └── project-blessing.jpg # Blessing Islamic tracker thumbnail
```

---

## 🚀 How to Run & Preview the Website

You can preview this website locally using any of the following methods:

### Option 1: Direct Browser Launch (Simplest)
1. Navigate to the `portfolio` folder on your computer:
   ```text
   C:\Users\HP\portfolio
   ```
2. Double-click **`index.html`** or right-click and select **Open with Google Chrome / Microsoft Edge / Firefox**.

---

### Option 2: Using Python Built-in HTTP Server
If you have Python installed, you can launch a local development server:
1. Open PowerShell or Terminal in the `portfolio` folder.
2. Run:
   ```bash
   python -m http.server 3000
   ```
3. Open your browser and visit: `http://localhost:3000`

---

### Option 3: Using VS Code Live Server
1. Open the `portfolio` folder in VS Code or Antigravity IDE.
2. If you have the **Live Server** extension installed, right-click `index.html` and click **"Open with Live Server"**.

---

## 🛠️ Step-by-Step Customization Guide (For Workshop Beginners)

### 1. Update Name and Roles
- Open `index.html` and search for `MUBASHIRA PK`. Replace it with your name.
- Open `script.js` and locate the `roles` array (around line 72):
  ```javascript
  const roles = [
    'DATA ANALYTICS',
    'PYTHON & SQL DEVELOPER',
    'FLUTTER MOBILE CREATOR',
    'BUSINESS INSIGHT EXPLORER'
  ];
  ```
  Add or replace these titles with your own desired roles.

### 2. Replace the Profile Picture
- Place your photo inside the `assets/` folder (e.g., `assets/my-photo.jpg`).
- In `index.html`, find `<img src="assets/profile.jpg"` and update the `src` attribute.

### 3. Add or Edit Technical Skills
- In `index.html`, locate `<section id="skills">`.
- To adjust skill proficiency, change the width percentage in:
  ```html
  <div class="skill-progress-fill" style="width: 85%;"></div>
  ```
- To add a new skill, copy any `<div class="col-md-6 col-lg-3">` card block and customize the icon (from [Font Awesome](https://fontawesome.com/icons)), skill name, and percentage.

### 4. Update Projects
- In `index.html`, find `<section id="projects">`.
- Update the title, description, and technology tags for each card.
- Replace `https://github.com` with your real GitHub repository URL in:
  ```html
  <a href="https://github.com/your-username/your-repo" target="_blank" ...>
  ```

### 5. Connecting the Contact Form to Receive Real Messages
The current form uses client-side JavaScript validation. To receive real messages in your personal email inbox without writing backend code:
1. Sign up for free at [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com/).
2. Change the form opening tag in `index.html`:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
3. Add `name="name"`, `name="email"`, and `name="message"` attributes to the inputs.

---

## 💡 Technologies Used

- **HTML5**: Semantic document structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- **CSS3**: CSS Custom Properties (Variables), Flexbox, CSS Grid, Glassmorphism, Neon glow animations
- **Bootstrap 5.3.3**: Grid layout, responsive navbar, utility classes
- **Vanilla JavaScript**: DOM events, typewriter effect, IntersectionObserver API, form validation
- **Google Fonts**: *Outfit* (Headings) and *Plus Jakarta Sans* (Body)
- **Font Awesome 6.5.1**: Modern iconography for tech stacks, social icons, and UI indicators

---

## 📝 License
This project is open-source and free to use for personal portfolios, student assignments, and beginner web development workshops.
