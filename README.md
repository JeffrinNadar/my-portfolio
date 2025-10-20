# Personal Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing my projects, skills, and experience.

🔗 **Live Site:** coming soon

## 🚀 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Navigation** - Single-page application with smooth scrolling between sections
- **Modern UI** - Clean and professional design using Tailwind CSS
- **Fast Performance** - Built with Vite for lightning-fast development and optimized production builds

## 🛠️ Built With

- [React](https://reactjs.org/) - Frontend library
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide React](https://lucide.dev/) - Icon library

## 📋 Sections

- **Hero** - Introduction and call-to-action
- **About** - Background and personal overview
- **Skills** - Technical skills organized by category
- **Projects** - Featured work with descriptions and links
- **Contact** - Ways to get in touch

## 💻 Local Development

If you want to run this project locally:

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/JeffrinNadar/my-portfolio.git
cd my-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🚀 Deployment

This site is deployed and live! No installation needed - just visit the link at the top.

### Deploy Your Own

Want to deploy your own version?

**Option 1: Vercel (Recommended)**
1. Fork this repository
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" and import your forked repo
4. Vercel will auto-detect Vite and deploy automatically
5. Your site will be live in under a minute!

**Option 2: Netlify**
1. Fork this repository
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub and select the repo
5. Build settings: Build command: `npm run build`, Publish directory: `dist`
6. Click "Deploy site"

**Option 3: GitHub Pages**
1. Install gh-pages: `npm install -D gh-pages`
2. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Add `base: '/my-portfolio/'` to `vite.config.js`
4. Run `npm run deploy`
5. Enable GitHub Pages in repo settings

## 📝 Customization

To personalize this portfolio for your own use:

1. Update personal information in `src/App.jsx`
2. Replace placeholder project information with your actual projects
3. Update skills to match your expertise
4. Change contact links (email, LinkedIn, GitHub)
5. Modify color scheme by replacing Tailwind color classes (e.g., `blue-600`)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

Jeffrin Nadar - [anthony.jeffrin.b@gmail.com](mailto:anthony.jeffrin.b@gmail.com)

Portfolio: coming soon

GitHub: [@JeffrinNadar](https://github.com/JeffrinNadar)

---

⭐ If you found this helpful, please consider giving it a star!