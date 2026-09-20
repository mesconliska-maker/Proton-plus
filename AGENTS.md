# figma-make-app

React + Vite + Tailwind CSS project running inside Figma Make.

## Development Server

A Vite development server is **already running** on `$PORT` (default 8443). You don't need to start it manually.

- Preview URL: The user can access the running app through the preview panel
- Hot reload: Changes to source files are reflected immediately

## Project Structure

This is the canonical project structure. Start with task-relevant files below. Only follow imports or inspect other files when required, when a documented path is missing, or when the repository contradicts this guide.

- `src/main.tsx` - React entrypoint; imports `src/index.css` and mounts `src/App.tsx` into the `#root` element
- `src/App.tsx` - Root: tiny client-side router (`src/router.tsx`), Header/Footer layout, 404 page
- `src/router.tsx` - Path + hash router with no dependencies (`Link`, `navigate`, `usePath`, `usePageMeta`)
- `src/pages/` - `Home.tsx` (all homepage sections), `Mereni.tsx` (/mereni-radonu), `Opatreni.tsx` (/protiradonova-opatreni), `Radon.tsx` (/radon)
- `src/components/` - `Header`, `Footer`, `ContactSection` (mailto form + map), `Logo` (SVG re-creation of the original logo), `Ui` (Eyebrow, buttons, PageHero, Card, CtaBand), `Icons`, `MoreIcons`
- `src/data.ts` - Company facts (address, phones, e-mail, IČ/DIČ) and NAV items – edit contact details here
- `src/theme.ts` - Colour tokens and font stacks
- `public/` - favicon + OG image (rendered from the .svg sources), `schema-protiradonova-izolace.jpg` and `gdpr-proton.pdf` taken from the original protonplus.cz
- `vercel.json` - SPA rewrite so subpage URLs work on Vercel
- `src/index.css` - Global CSS entrypoint and Tailwind CSS v4 import
- `index.html` - Vite HTML shell containing the `#root` element and loading `src/main.tsx`
- `package.json` - Project dependencies and the Vite build, development, preview, and formatting scripts
- `vite.config.ts` - Vite configuration with React, Tailwind CSS v4, and Figma Make plugins plus the `@` alias for `src`
- `.mise.toml` - Toolchain versions for Node.js and pnpm

## Dependencies

- Runtime: React 19 and React DOM 19
- Styling: Tailwind CSS v4 with the `@tailwindcss/vite` plugin
- Build tooling: Vite 8, TypeScript 5.7, and `@vitejs/plugin-react`
- Formatting: oxfmt

## Styling

This project uses **Tailwind CSS v4** through the `@tailwindcss/vite` plugin configured in `vite.config.ts`. `src/index.css` imports Tailwind with `@import 'tailwindcss';`. Use Tailwind utility classes directly in JSX and put global CSS or Tailwind v4 theme customization in `src/index.css`. This scaffold does not need a Tailwind config file or PostCSS config.

`src/main.tsx` imports `src/index.css`, so global font wiring belongs in `src/index.css`. Keep CSS `@import` statements first, then add any `@font-face` rules and font-family defaults there.

## Code quality

- Use double quotes for strings containing apostrophes (`"We're here to help"`), or escape them in single-quoted strings. An unescaped apostrophe in a single-quoted string breaks the build.
- Ensure JSX tags are closed and braces are balanced.
- Export components as default exports.
