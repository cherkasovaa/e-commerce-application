import type { About } from './types';

const AboutProjectText = `The main goal of creating Game Shop was to improve our technical skills and gain valuable experience in team development. We aimed not only to deepen our knowledge of modern web technologies but also to learn how to collaborate effectively, distribute tasks, and deliver a high-quality product within set deadlines.

The project is built on Feature-Sliced Design architecture using React and TypeScript. For creating a modern and responsive interface, we chose Material UI, and the project is built using Vite.

You can find the project requirements [here](https://github.com/rolling-scopes-school/tasks/tree/master/tasks/eCommerce-Application/Sprints).`;

const AboutTeamText = `We are a team of like-minded individuals, each of whom made a significant contribution to the project's development. After each sprint, we conducted mutual code reviews, gave each other feedback, and suggested improvements, which helped us not only improve code quality but also learn to work in a real team environment.

Game Shop is not only the result of our work but also a reflection of our commitment to professional growth, love for technology, and desire to create useful products for people.

We hope you enjoy our project. We put a lot of effort into it ^_^`;

const AboutProject: About = {
  title: 'About the Project',
  content: AboutProjectText,
};

const AboutTeam: About = {
  title: 'About the Team',
  content: AboutTeamText,
};

export const contentArray: About[] = [AboutProject, AboutTeam];
