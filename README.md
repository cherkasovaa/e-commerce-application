# Game Store

![Static Badge](https://img.shields.io/badge/status-completed-success)

A single-page application (SPA) for an online game store. The project features user authentication, logging, convenient navigation between pages, a product catalog with filtering and sorting options, and much more.

## Description

"Game Store" is a modern single-page web application (SPA) that implements a full-featured online store for selling games. Users can browse detailed information about games, filter and sort the catalog by various parameters, and easily navigate between pages.

To purchase a game, users need to log in or register an account. Registered users have access to a shopping cart, where they can add or remove games just like in a real online store.

The application leverages CommerceTools as the backend service for product management, user authentication, and order processing, ensuring a reliable and scalable e-commerce solution.

## Demo

[Live Demo](https://cherkasovaa.github.io/e-commerce-application/)

## Technology Stack

1. [React](https://react.dev/learn) — UI library;
2. [TypeScript](https://www.typescriptlang.org/) — static typing;
3. [Material UI](https://mui.com/material-ui/) — UI component library;
4. [Vite](https://vite.dev/) — build tool;
5. [Vitest](https://vitest.dev/) — testing framework;
6. [React Helmet](https://github.com/nfl/react-helmet) — library for managing head elements;
7. [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) — code linting and formatting;
8. [Stylelint](https://stylelint.io/) — style linting;
9. [Husky](https://github.com/typicode/husky#readme) + [lint-staged](https://github.com/lint-staged/lint-staged) + [commitlint](https://commitlint.js.org/) — automation for code and commit message checks.

### Key Features

- **Product Catalog**:
  - **Search Functionality**: Quickly find specific games by title
  - **Advanced Filtering**: Filter games by multiple criteria including price range, genre, platform, and other parameters
  - **Sorting Options**: Sort results by price or alphabetically
  - **Pagination**: Navigate through large collections with ease
  - **Quick Navigation**: Click on any game card to view its detailed page
- **User Authentication**: Secure registration and login system to access personalized features
- **User Profile**: Registered users can access and edit their personal information on the dedicated profile page
- **Shopping Cart**: Full shopping cart functionality for registered users - add, remove, and manage items
- **Product Details Page**:
  - Comprehensive game information with detailed descriptions
  - Interactive media slider for screenshots
  - Modal window for enlarged image viewing
- **SEO Optimization**: Implemented with React Helmet for better search engine visibility
- **Team Information**: Learn about our development team on the dedicated "About Us" page

## Team
- [Akseeniia](https://github.com/akseee)
- [Anastasiia Kolmakova](https://github.com/aissatsana)
- [Alina Cherkasova](https://github.com/cherkasovaa)

## Project Setup

### Cloning the repository

To start working on the project, clone the repository to your local machine.

Repository: https://github.com/cherkasovaa/e-commerce-application.git

```bash
git clone https://github.com/cherkasovaa/e-commerce-application.git
```

After cloning, navigate to the project directory:

```bash
cd e-commerce-application
```

### Installing dependencies

To start working on the project, install all dependencies:

```bash
npm install
```

### Development mode

During development, use the development mode. To start the dev server, run:

```bash
npm run dev
```

The local server will open at `http://localhost:3000`

### Building the project

To build the project, run: `npm run build`

The built files will be located in the `public` directory.

### Previewing the built project

To preview the built project, use the built-in `Vite` server. Start it with: `npm run preview`

### Testing

Run tests with the command: `npm run test`

### Linting and formatting

- Check code with ESLint: `npm run lint`
- Auto-fix ESLint issues: `npm run lint:fix`
- Format code with Prettier: `npm run format`
- Check styles with Stylelint: `npm run stylelint`
- Auto-fix Stylelint issues: `npm run stylelint:fix`

### Working with Husky

Husky is used to automate code and commit message checks.

#### Setting up Husky

After cloning the repository and installing dependencies, run: `npm run prepare`

> [!WARNING]
> If hooks do not work
> Make sure the files in .husky/ have execution permissions

`chmod +x .husky/pre-commit`<br>
`chmod +x .husky/commit-msg`

#### Commit message conventions

The project uses Conventional Commits to standardize commit messages. The message format is:

```markdown
<type>: <description>

[body]
```

#### Commit types:

- **feat**: a new feature
- **fix**: a bug fix
- **docs**: documentation changes
- **style**: code formatting changes
- **refactor**: code refactoring
- **test**: adding or fixing tests
- **chore**: updates to build tasks, configs, etc

### Team

- [Kseniia](https://github.com/akseee)
- [Anastasiia](https://github.com/aissatsana)
- [Alina](https://github.com/cherkasovaa/)
