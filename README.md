# Testing1

A minimal React + TypeScript scaffold used for testing and experimentation. It
renders a small `Counter` component and is set up with Vitest for unit
testing.

## Tech stack

- [React](https://react.dev/) 18
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (dev server / build)
- [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) (unit tests)

## Installation

```bash
git clone https://github.com/ataullahmesbah/testing1.git
cd testing1
npm install
```

## Environment variables

Copy `.env.example` to `.env` and adjust values as needed:

```bash
cp .env.example .env
```

| Variable              | Description                          | Default                        |
| ---------------------- | ------------------------------------- | ------------------------------- |
| `VITE_APP_BASE_URL`   | Base URL the app is served from        | `http://localhost:5173`        |
| `VITE_API_URL`        | API endpoint the app talks to          | `http://localhost:4000/api`    |

## Running locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## Running tests

```bash
npm test
```

## Build

```bash
npm run build
```
