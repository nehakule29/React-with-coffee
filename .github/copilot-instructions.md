cd .# AI Coding Agent Instructions

## Codebase Overview

This is a **React learning project collection** featuring 10 progressive projects built with **Vite + React 19**, demonstrating hooks, context API, routing, and styling patterns. Each numbered folder (01-10) is an independent Vite project.

### Project Structure

- `01vitereact` - Vite + React basics
- `02counter` - useState hook fundamentals
- `03tailwindprops` - Props and Tailwind CSS components
- `04bgColorChanger` - useState with conditional styling
- `05passwordGenerator` - useEffect, useState with algorithms
- `06currencyConverter` - Custom hooks (`useCurrencyInfo`), API integration
- `07reactRouter` - React Router v7 with layout components
- `08miniContext` - Context API basics with providers
- `09themeSwitcher` - Theme context with localStorage/CSS classes
- `10todocontextLocal` - Context + localStorage persistence

## Key Patterns & Conventions

### Context API Pattern (Projects 08-10)
- Create context file: `context/XYZContext.js` with `React.createContext()`
- Create provider component: `context/XYZProvider.jsx` (wraps children, provides value)
- Provider uses `useState` to manage state; context value is immutable `useContext()`
- Example: `08miniContext/src/context/UserContext.js` + `UserContextProvider.jsx`
- Theme context stores theme string ("light"/"dark") and uses `document.documentElement.classList.add/remove()`

### Custom Hooks Pattern (Project 06)
- Placed in `hooks/` folder
- Use `useEffect` for side effects (e.g., API calls, subscriptions)
- Return state from hooks; patterns: `const [data, setData] = useState({})`
- Example: `useCurrencyInfo()` fetches from API and returns data object
- Always include error handling in try-catch or `.catch()` blocks

### Component Patterns
- Reusable components in `components/` with clear prop interfaces
- Props with defaults: `function InputBox({ label, amount, className = "" })`
- Use `useId()` for accessible form elements (avoid hardcoded IDs)
- Props destructuring preferred; extract functionality to separate `index.js` if complex

### Styling
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin (not traditional config)
- CSS files for component styles alongside `.jsx` files
- Conditional classes: `className={`flex ${isActive ? 'bg-blue' : 'bg-gray'}`}`
- Theme switching: manipulate `document.documentElement` classes

### Routing Pattern (Project 07)
- React Router v7 imported as `react-router`
- Layout component wraps `<Outlet/>` for nested routes
- Loader functions available (see `githubInfoLoader.jsx`)

## Development Workflow

### Install & Run
```bash
# Navigate to project directory
cd 0X<project-name>/

# Install dependencies (if needed)
npm install

# Start dev server (Vite HMR enabled)
npm run dev

# Build for production
npm run build

# Lint
npm lint
```

**All projects use Vite** (fast HMR, ES modules). Dev server runs on `http://localhost:5173` by default.

## Common Dependencies Across Projects

- **react@19.2.0** - Latest React with new hooks
- **@vitejs/plugin-react@5.1.1** - Vite React plugin with refresh
- **tailwindcss@4.1.18** - Styling (selected projects)
- **react-router@7.13.0** - Routing (project 07 only)
- **eslint + react-hooks plugin** - Code quality checks

## Project-Specific Patterns

| Project | Key Pattern | Reference Files |
|---------|------------|------------------|
| 06-Currency | Custom hook + API integration | `hooks/useCurrencyInfo.js`, `components/InputBox.jsx` |
| 07-Router | Nested routing + loaders | `App.jsx`, `Layout.jsx`, `Github/githubInfoLoader.jsx` |
| 08-Context | Basic context setup | `context/UserContext.js`, `context/UserContextProvider.jsx` |
| 09-Theme | Context + DOM manipulation | `App.jsx` with `useEffect` for class toggling |
| 10-Todo | Context + localStorage | Uses `localStorage.getItem/setItem` |

## Debugging Tips

- **Hooks not updating UI?** Check if state setters are called and dependency arrays in `useEffect`
- **Context not accessible?** Verify component is wrapped by provider, check prop drilling
- **Styles not applying?** Confirm Tailwind classes are spelled correctly; check specificity
- **API calls failing?** Enable browser DevTools Network tab, check CORS/fetch URL
- **ESLint warnings?** Run `npm lint` to catch React hooks rule violations

## Before Starting Work

1. Identify target project folder (`0X-name`)
2. Check if project needs `npm install` (look for `node_modules/`)
3. Understand which pattern applies: hooks, context, routing, or custom hooks
4. Reference similar projects for implementation patterns
5. Verify styling approach (Tailwind vs CSS files)
