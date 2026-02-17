# Personal Portfolio

A modern, responsive developer portfolio built with React, Vite, and Tailwind CSS. It features animated sections, a modal gallery with a Swiper cards carousel, and clean, content-driven components for projects, certifications, and contact.

## Highlights

- Smooth section navigation with a fixed navbar
- Modal Gallery with image preview, zoom, and next/prev controls
- Animated sections powered by Framer Motion
- Data-driven content for projects, certifications, and workshops
- Fully responsive layout

## Tech Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- Swiper
- Lucide Icons

## Getting Started

### 1) Install

```bash
npm install
```

### 2) Run locally

```bash
npm run dev
```

### 3) Build

```bash
npm run build
```

### 4) Preview build

```bash
npm run preview
```

## Project Structure

```
public/
src/
  assets/
  components/
    portfolio/
    ui/
  data/
  entities/
  pages/
  index.css
  main.jsx
```

## Customization

- Update content in:
  - `src/data/projects.json`
  - `src/data/certifications.json`
  - `src/data/workshops.json`
- Update gallery images in:
  - `src/entities/Gallery.js`
- Update section layout in:
  - `src/pages/Portfolio.jsx`
- Update branding and navigation in:
  - `src/components/portfolio/Navigation.jsx`

## Deployment

Build the project and deploy the `dist/` folder to any static hosting provider (Vercel, Netlify, GitHub Pages, or your own server).

## Credits

Built with Vite, Tailwind CSS, Framer Motion, and Swiper.

## License

This project is for personal portfolio use. Update the license as needed.
