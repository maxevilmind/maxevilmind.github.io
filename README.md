# Portfolio Website

A modern portfolio website built with Web Components, Lit, and a token-based CSS system.

## Project Structure

- `src/components/` - Web components
  - `src/components/pages/` - Page components
  - `src/components/ui/` - Reusable UI components
- `src/utils/` - Utility functions and constants
- `styles/main.css` - Global styles and design tokens
- `content/blog/` - Blog content files (`*.json` per post)
- `index.html` - Main HTML file
- `rollup.config.js` - Build configuration

## Getting Started

### Development

```bash
npm install
npm run start
```

This will start the development server and open the application in your browser.

### Production Build

```bash
npm run build
```

This will create a production build in the `dist` directory.

## Technologies Used

- [Lit](https://lit.dev/) - For creating web components
- Token-based CSS system - For styling and theming
- [Rollup](https://rollupjs.org/) - For bundling
- [Web Dev Server](https://modern-web.dev/docs/dev-server/overview/) - Development server

## Features

- Responsive design
- Component-based architecture
- Hash-based routing
- Centralized design tokens for easy theme updates
- Developer blog with infinite scroll and JSON-backed content
