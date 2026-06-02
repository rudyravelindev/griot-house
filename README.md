# Griot Lakay

A single-page restaurant website built with vanilla JavaScript, Webpack, and ES6 modules.

## Live Site

https://rudyravelindev.github.io/griot-house/

## Features

- Tabbed navigation (Home, Menu, About) with active state management
- Modular architecture using ES6 modules and factory functions
- Responsive styling with CSS
- Image asset handling via Webpack
- Deployment to GitHub Pages

## Tech Stack

- JavaScript (ES6+)
- Webpack 5
- HTML5
- CSS3

## What I Learned

- Webpack configuration: entry, output, plugins, loaders
- ES6 modules: import/export, file organization
- Factory functions: encapsulated components with private state
- DOM manipulation: createElement, appendChild, event listeners
- GitHub Pages deployment: git subtree workflow

## Run Locally

```bash
npm install
npm start
```

Open http://localhost:8080

## Deployment

```bash
npm run build
git subtree push --prefix dist origin gh-pages
```

## Credits

Built as part of The Odin Project curriculum.
