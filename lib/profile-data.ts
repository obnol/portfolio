import { Post } from './types';

export const profilePosts: Post[] = [
  {
    image: '/x-logo.webp',
    entity: '𝕏',
    description: 'You can find me here, where I share about life, thoughts, and my coding adventures 🌐',
    link: 'https://x.com/obnol1',
    date: 'Just now',
  },
  {
    image: '/github-mark.png',
    entity: 'Github',
    description: 'Check out my code and projects here. Will be sharing more soon! 🚀',
    link: 'https://github.com/obnol',
    date: 'Just now',
  },
  {
    image: '/peersyst-logo.jpeg',
    entity: 'Peersyst',
    description: 'Joined as a Full-Stack developer. Currently working on a mobile wallet app and helping out with the XRPL EVM Sidechain',
    link: 'https://peersyst.com/',
    date: new Date('2023-06-29'),
  },
  {
    image: '/waapiti-logo.jpeg',
    entity: 'Waapiti',
    description: 'Joined as a Full-Stack developer. Maintained the SaaS platform and built new features',
    link: 'https://www.waapiti.eu/',
    date: new Date('2023-01-31'),
  },
  {
    image: '/upc-logo.png',
    entity: 'UPC - FIB',
    description: "Graduated with a Bachelor's Degree in Computer Engineering",
    link: 'https://www.fib.upc.edu/',
    date: new Date('2023-01-23'),
  },
  {
    image: '/waapiti-logo.jpeg',
    entity: 'Waapiti',
    description:
      "Internship. Worked on the old version of the platform, and helped with the new one. Also built a mobile app as my bachelor's thesis",
    link: 'https://www.waapiti.eu/',
    date: new Date('2022-02-22'),
  },
];
