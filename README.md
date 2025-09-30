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

## 🎨 Customization

### Adding New Projects

1. Add project images to `app/resources/images/`
2. Update `app/const/projects.ts` with new project data
3. The project will automatically appear in the portfolio

### Updating Content

- **Personal Info**: Edit `app/routes/page.strings.ts`
- **Experience**: Update `app/const/experience.ts`
- **Skills**: Modify the skills array in `page.strings.ts`
- **Styling**: Customize `app/styles/globals.css`

## 🔧 Configuration

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. The workflow will automatically deploy on push to main branch

### Custom Domain (Optional)

To use a custom domain:

1. Add your domain to the `cname` field in `.github/workflows/deploy.yml`
2. Create a `CNAME` file in the repository root with your domain
3. Configure DNS settings with your domain provider

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **LinkedIn**: [Austin White](https://www.linkedin.com/in/austinjwhite96/)
- **GitHub**: [endlessrequiem](https://github.com/endlessrequiem)
- **Email**: Available through LinkedIn

---

Built with ❤️ using Remix and modern web technologies.