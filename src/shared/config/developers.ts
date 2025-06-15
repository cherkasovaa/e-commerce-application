import akseeePhoto from '../assets/team/akseee.jpg';
import alinaPhoto from '../assets/team/alina.jpg';
import anastasiiaPhoto from '../assets/team/anastasiia.jpg';
import type { AppDeveloper } from '../types/appDevelopers';

export const DEVELOPERS: AppDeveloper[] = [
  {
    name: 'Kseniia',
    role: 'Developer',
    bio: "Simplicity, accessibility, structure, creativity, and growth — these are the values I care about most in life. And I find all of them in frontend. Not just about the interface — it is about the inner logic too: how elegantly and beautifully code can be structured, how processes can be orchestrated. That is exactly why I' ve grown to love it.",
    photo: akseeePhoto,
    github: 'https://github.com/akseee',
    nickname: 'akseee',
    responsibilities: [
      'CommerceTools integration and API Client Setup',
      'Main page implementation',
      'Catalog product page implementation',
      'Login page implementation',
      'Project design',
      'Tests',
    ],
  },
  {
    name: 'Anastasiia',
    role: 'Team Lead',
    bio: 'Here will be a few words about me',
    photo: anastasiiaPhoto,
    github: 'https://github.com/aissatsana',
    nickname: 'aissatsana',
    responsibilities: [
      'Registration page implementation',
      'User profile page implementation',
      'Basket page implementation',
      'Routing implementation',
      'Design & responsive layout',
      'Tests',
    ],
  },
  {
    name: 'Alina',
    role: 'Developer',
    bio: 'I am a self-taught developer without a formal technical education. I am always passionate about learning new technologies. I have several years of experience as an engineer in game development, but have returned to web technologies, which remain my main passion.',
    photo: alinaPhoto,
    github: 'https://github.com/cherkasovaa/',
    nickname: 'cherkasovaa',
    responsibilities: [
      'Detailed product page implementation',
      'About us page implementation',
      '404 page implementation',
      'Routing implementation',
      'Design & responsive layout',
      'Tests',
    ],
  },
] as const;
