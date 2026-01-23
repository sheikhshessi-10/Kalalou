# MagicWand AI Website

> Last updated: 2026-01-22

A modern React website built with Vite, Tailwind CSS, and React Router. Features two main pages:
- **Home**: AI Customer Support page with dark theme
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
├── src/
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
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Technologies

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

