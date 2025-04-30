# eCommerce-Application

## Technology Stack

1. [React](https://react.dev/learn) — UI library;
2. [TypeScript](https://www.typescriptlang.org/) — static typing;
3. [Vite](https://vite.dev/) — build tool;
4. [SCSS](https://sass-lang.com/) modules — styles with module support;
5. [Vitest](https://vitest.dev/) — testing framework;
6. [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) — code linting and formatting;
7. [Stylelint](https://stylelint.io/) — style linting;
8. [Husky](https://github.com/typicode/husky#readme) + [lint-staged](https://github.com/lint-staged/lint-staged) + [commitlint](https://commitlint.js.org/) — automation for code and commit message checks.

## Project Setup

### Cloning the repository
To start working on the project, clone the repository to your local machine.

Repository: [https://github.com/cherkasovaa/eCommerce-Application.git](https://github.com/cherkasovaa/eCommerce-Application.git)

`git clone https://github.com/cherkasovaa/eCommerce-Application.git`

After cloning, navigate to the project directory:

`cd eCommerce-Application`

### Installing dependencies
To start working on the project, install all dependencies: `npm install`

### Development mode
During development, use the development mode. To start the dev server, run: `npm run dev`

The local server will open at `http://localhost:3000`

### Building the project
To build the project, run: `npm run build`


The built files will be located in the `public` directory.

### Previewing the built project
To preview the built project, use the built-in `Vite` server. Start it with: `npm run preview`

### Testing
Run tests with the command: `npm run test`

### Linting and formatting
- Check code with ESLint: ` npm run lint `
- Auto-fix ESLint issues: ` npm run lint:fix `
- Format code with Prettier: ` npm run format `
- Check styles with Stylelint: ` npm run stylelint `
- Auto-fix Stylelint issues: ` npm run stylelint:fix `

### Working with Husky
Husky is used to automate code and commit message checks.

#### Setting up Husky
After cloning the repository and installing dependencies, run: `npm run prepare`

> [!If hooks do not work]
> Make sure the files in .husky/ have execution permissions

`chmod +x .husky/pre-commit`<br>
`chmod +x .husky/commit-msg`

#### Commit message conventions
The project uses Conventional Commits to standardize commit messages. The message format is:
``` markdown

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