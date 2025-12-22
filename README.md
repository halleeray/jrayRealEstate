# Julie Ray Real Estate

A modern, responsive real estate website built with React and TypeScript as a portfolio project.
The app is a mock site for a real estate business and focuses on clean UI design, smooth animations, and a scalable component architecture.

### Features

* Dynamic hero section
  * Rotating background images showcasing featured properties
  * Smooth fade animations for a polished, modern look

* Saved properties
  * Users can save and unsave properties they are interested in
  * Saved listings persist using global state managed with Redux

* Reusable layout architecture
  * Shared layouts for consistent page structure
  * Modular components designed for scalability and reuse

* Custom-styled UI components
  * Styled inputs, buttons, and dropdowns
  * Replaced default browser UI elements for a cohesive design

* Responsive design
  * Layout optimized for desktop and adaptable to different screen sizes
  * Expandable UI sections, including agent biography and mock search filters

### Tech Stack

* React – Frontend UI library
* TypeScript – Type safety and better developer experience
* Redux – Global state management for saved properties
* Vite – Fast build tool and dev server
* CSS / Flexbox – Layout and animations

### Getting Started

#### Requirements

* Node.js >= 18

#### Install dependencies

```bash
npm install
```

#### Run development server

```bash
npx vite
```

#### Build and run for production 

```bash
npm run build
npm run preview
```

### Project Structure

```bash
src/
├── assets/           # Static assets and global styles
├── components/       # Reusable UI components (Navbar, SearchBar, etc.)     
├── layouts/          # Shared layout components (page wrappers, headers, footers)
├── pages/            # Route-level page components
├── redux/            # Redux store, slices, and state logic
├── types/            # Shared TypeScript type definitions and interfaces
├── App.tsx
└── main.tsx
```

### Purpose

This project was built as part of a personal portfolio to:
* Practice React + TypeScript fundamentals
* Learn state management with Redux
* Improve CSS layout and animation skills
* Design a realistic, user-focused UI for a real-world use case

### Future Improvements

* Integrate a real real estate API (MLS or Zillow-like data)
* Add map-based search and filtering
* Add authentication for saved listings
* Improve accessibility (ARIA, keyboard navigation)
* Add unit tests
