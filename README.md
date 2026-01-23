# MagicWand AI Website

> Last updated: 2026-01-22

A dual-mode website supporting both static HTML deployment and React development.

## Current Setup

- **Production (Vercel)**: Deploys static HTML files from `public/` directory
- **Development**: React app in `src/` for future enhancements

## Production Pages

- **Home**: AI Customer Support page with dark theme
- **AI Support**: Redirects to home
- **Kalalou**: Kalalou AI Leverage presentation page with light theme

## Features

- 🎨 Pixel-perfect design matching the original HTML files
- 📱 Responsive iPhone mockups
- 🎭 Interactive slide-to-answer functionality
- 🎠 Hero carousel on Kalalou page
- 🎯 Smooth navigation between pages
- ⚡ Fast development with Vite
- 🎨 Tailwind CSS for styling

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── public/                      # 🚀 DEPLOYED TO VERCEL
│   ├── index.html              # Main landing page (production)
│   ├── ai-support-website.html # Redirects to index
│   └── kalalou-presentation.html # Presentation page (production)
├── src/                         # React development files (not deployed)
│   ├── components/
│   │   ├── Navigation.jsx      # Shared navigation component
│   │   ├── iPhoneMockup.jsx    # iPhone mockup component
│   │   └── StatusBar.jsx        # Status bar component
│   ├── pages/
│   │   ├── Home.jsx            # AI Support page (main)
│   │   └── Kalalou.jsx         # Kalalou presentation page
│   ├── App.jsx                  # Main app with routing
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── vercel.json                  # Vercel configuration (static deployment)
├── .vercelignore               # Ignore React files during deployment
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Deployment

### Production (Vercel)
The site deploys static HTML files from the `public/` directory.

**Configuration:**
- `vercel.json` configured for static file serving
- No build process runs on deployment
- Files are served directly as-is
- React code in `src/` is ignored during deployment

### Local Testing
To test the static files locally:
```bash
npx serve public
```

### Development (React)
To work on the React version (not currently deployed):
```bash
npm install
npm run dev
```

## Technologies

### Production Stack
- Pure HTML/CSS/JavaScript (Three.js for animations)

### Development Stack (Optional)
- React 18
- React Router DOM
- Vite
- Tailwind CSS
- PostCSS
- Autoprefixer

## Design Notes

- **Home Page**: Dark theme (#0a0a0a background) with white accents
- **Kalalou Page**: Light theme (#F7F4EF background) with Playfair Display font
- Both pages maintain the exact same visual design as the original HTML files
- All interactive features (carousel, slide-to-answer) are fully functional

