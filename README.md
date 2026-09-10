# Piyush Kumar - Personal Developer Portfolio 🚀

A modern, responsive, and interactive personal developer portfolio built for **Piyush Kumar**, a **B.Tech First Year Student**. 

Built with pure **HTML5**, **CSS3 (Modern Glassmorphism & Themes)**, and vanilla **JavaScript**—with zero heavy frameworks required.

---

## 🌟 Included Sections & Features

1. **Home / Hero Section ("Whom" / Landing)**:
   - Dynamic typewriter role animation (`C Programming & Logic`, `Computer Fundamentals`, `Git & GitHub Workflows`, etc.).
   - Visual C-code interactive terminal card.
   - Quick action buttons to jump straight to other sections (*About Me, My Skills, Projects, Get In Touch*).
   - Quick-Jump interactive grid cards right below the landing view.
2. **About Me Section**:
   - **Introduction**: Comprehensive introduction outlining your journey into engineering, problem solving, and enthusiasm.
   - **Education**: B.Tech 1st Year (2024–2028) with foundational subjects, plus 10+2 Science stream background.
   - **Location**: Clean location badge (India) with time zone and hybrid/remote availability.
   - **Achievements**: Academic milestones, C lab performance, coding club participation, and Git version control discipline.
   - **Hobbies & Interests**: Logic puzzles & chess, tech literature, strategy gaming, and collaborative discussions.
3. **Skills Section (Interactive Filter Tabs)**:
   - Filter by: *All Skills*, *Technical Skills*, or *Soft & Professional Skills*.
   - **Technical Skills**: C Programming, Computer Fundamentals, Basic Git & GitHub, Problem Solving & Algorithmic Logic.
   - **Soft Skills**: A Good Learner, Good Team Worker, Time Management, Presentation Skills.
4. **Featured Projects / Practice Showcase**:
   - Practical 1st-year initiatives including: *Student Record Management System (C)*, *Terminal Games Suite (C)*, *Developer Portfolio (Web)*, and *Git & Fundamentals Lab Repo*.
5. **Interactive Contact Section**:
   - Direct contact info cards (Email, Location, Status) and social links (GitHub, LinkedIn, Twitter/X, Email).
   - **Send Message Form**: Full client-side validation, sending state animation, popup success modal with message preview, and a direct "Send via Email Client" (`mailto:`) fallback.
6. **Theme & Extras**:
   - Dark & Light mode toggle with state saved in `localStorage`.
   - Floating "Back to Top" button.
   - Fully responsive for mobile phones, tablets, laptops, and ultra-wide screens.

---

## 📂 Project Structure

```
piyush-portfolio/
│
├── index.html       # Complete semantic structure & content
├── style.css        # Modern glassmorphic styles, color themes, responsive layouts
├── script.js        # Typewriter effect, theme switcher, nav tracking, contact modal
└── README.md        # Documentation & customization guide
```

---

## 🚀 How to Run Locally

### Method 1: Direct File Opening
Simply double-click `index.html` or right-click and choose **Open with** -> **Google Chrome / Microsoft Edge / Brave**.

### Method 2: Local HTTP Server (Recommended)
Using Python (available on Windows):
```powershell
# Navigate into the project folder
cd C:\Users\piyus\.gemini\antigravity\scratch\piyush-portfolio

# Start a local static server
python -m http.server 3000
```
Then open your browser at: `http://localhost:3000`

---

## ✏️ Easy Customizations

- **Add Your Real Email**:
  Open `index.html` and replace `piyush.kumar@example.com` with your actual email address.
- **Add Your Social Profiles**:
  In `index.html` under the Contact section, update the `href` attributes for GitHub and LinkedIn:
  ```html
  <a href="https://github.com/YOUR_USERNAME" ...>
  <a href="https://linkedin.com/in/YOUR_PROFILE" ...>
  ```
- **Update Your College Name**:
  In `index.html` under the Education card, you can add your university/college name directly beneath `Bachelor of Technology (B.Tech) - 1st Year`.

---

## 🌐 Free Deployment (GitHub Pages)

1. Create a free account on [GitHub.com](https://github.com).
2. Create a new repository named `piyush-portfolio` or `<your-username>.github.io`.
3. Push these project files to your repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Piyush Kumar portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/piyush-portfolio.git
   git push -u origin main
   ```
4. Go to **Settings** > **Pages** in your GitHub repository and select the `main` branch as the source.
5. Your portfolio will be live at `https://<your-username>.github.io/piyush-portfolio`!
