# Austin White - Portfolio Site

A modern, responsive portfolio website built with Remix and featuring a beautiful glassmorphism design.

## 🚀 Live Site

Visit the live site at: [https://endlessrequiem.github.io/portfolio-site](https://endlessrequiem.github.io/portfolio-site)

## 🛠️ Tech Stack

- **Framework**: Remix 2.8.1
- **Build Tool**: Vite 5.4.20
- **Language**: TypeScript
- **Styling**: CSS with glassmorphism effects
- **Icons**: React Icons
- **Deployment**: GitHub Pages

## ✨ Features

- **Responsive Design**: Works perfectly on desktop and mobile
- **Interactive Image Gallery**: Click to expand project images with navigation
- **Glassmorphism UI**: Modern glass-like design with backdrop blur effects
- **Keyboard Navigation**: Full keyboard support for image gallery
- **Smooth Animations**: Beautiful transitions and hover effects
- **Static Site Generation**: Optimized for fast loading

## 🏗️ Development

### Prerequisites

- Node.js 18+
- Yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/endlessrequiem/portfolio-site.git
cd portfolio-site

# Install dependencies
yarn install

# Start development server
yarn dev
```

The site will be available at `http://localhost:5173`

### Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn typecheck` - Run TypeScript checks
- `yarn lint` - Run ESLint
- `yarn deploy:static` - Deploy to GitHub Pages

## 🚀 Deployment

### Automatic Deployment (GitHub Actions)

The site is automatically deployed to GitHub Pages when you push to the `main` or `master` branch. The GitHub Actions workflow will:

1. Build the Remix application
2. Deploy the static files to GitHub Pages
3. Make the site available at `https://endlessrequiem.github.io/portfolio-site`

### Manual Deployment

To deploy manually:

```bash
# Build and deploy to GitHub Pages
yarn deploy:static
```

## 📁 Project Structure

```
app/
├── components/          # React components
│   ├── AboutMe/
│   ├── EducationSection/
│   ├── ExperienceSection/
│   ├── FooterSection/
│   ├── PageHeader/
│   ├── ProjectSection/
│   └── SkillsSection/
├── const/              # Constants and data
├── resources/          # Images and assets
├── routes/            # Remix routes
├── styles/            # CSS files
└── root.tsx          # Root layout
```

