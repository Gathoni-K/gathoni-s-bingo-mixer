# AI Coding Agent Instructions for Bingo Mixer

Welcome to the Bingo Mixer codebase! This file provides concise, actionable guidance for AI coding agents to be productive in this project. For details, always prefer following the links to existing documentation.

---

## Project Overview
- **Bingo Mixer** is a social bingo game for in-person mixers. See [README.md](README.md) for a high-level overview.
- The main workshop/lab guide is in [workshop/GUIDE.md](workshop/GUIDE.md) and is available in multiple languages.

## Key Commands
- **Install dependencies:** `npm install`
- **Start development server:** `npm run dev`
- **Build for production:** `npm run build`
- **Run tests:** `npm test`
- **Lint:** `npm run lint`

## Source Structure
- **src/**: Main source code
  - **components/**: React UI components
  - **data/**: Game questions
  - **hooks/**: Custom React hooks
  - **utils/**: Game logic and helpers
  - **test/**: Test setup
  - **types/**: TypeScript types
- **public/**: Static assets
- **docs/**: Documentation and guides
- **workshop/**: Step-by-step lab guides (see [workshop/GUIDE.md](workshop/GUIDE.md))

## Conventions
- Uses **React** and **TypeScript**.
- Styling with **Tailwind CSS**.
- Testing with **Vitest** and **@testing-library/react**.
- Linting with **ESLint**.
- Follows [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).

## Common Pitfalls
- Requires Node.js 22+.
- For Codespaces/Dev Containers, ensure `.devcontainer/devcontainer.json` is present.
- Deployment is automatic to GitHub Pages on push to `main`.

## Useful Links
- [README.md](README.md): Project overview and quickstart
- [CONTRIBUTING.md](CONTRIBUTING.md): Contribution guidelines
- [SECURITY.md](SECURITY.md): Security policies
- [docs/](docs/): Additional documentation
- [workshop/](workshop/): Lab guides

---

For more details, always check the linked documentation. If you encounter project-specific conventions or issues, update this file to help future agents.
