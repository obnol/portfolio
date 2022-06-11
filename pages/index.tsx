import type { NextPage } from 'next';
import Layout from '../components/Layout';
import WorkItem from '../components/WorkItem';
import { TechnologyItem } from '../components/TechonologyItem';

import {
  SiExpress,
  SiDocker,
  SiNpm,
  SiGit,
  SiNextdotjs as SiNextDotJs,
  SiNodedotjs as SiNodeDotJs,
  SiPostgresql,
  SiMysql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiYarn,
  SiAngular,
  SiRedux,
  SiNestjs,
  SiPython,
  SiDjango,
  SiFlask,
} from 'react-icons/si';

const workData = [
  {
    id: 'waapiti',
    company: 'Waapiti',
    link: 'https://www.waapiti.eu/',
    logo: '/images/waapiti-logo.jpeg',
    position: 'Software Engineer Intern (Full-Stack)',
    startDate: 'February 2022',
    endDate: null,
  },
];

const Home: NextPage = () => {
  return (
    <Layout>
      <div className='flex flex-col items-start max-w-2xl w-full mx-auto mb-8 text-neutral-800 dark:text-neutral-200'>
        <p className='font-extrabold text-4xl tracking-wider'>
          {`Hi, I'm Longbo! 👋 `}
        </p>
        <div className='flex flex-col py-5'>
          <p className='text-lg text-justify dark:text-neutral-400'>
            I&apos;m a 22 year old computer science student at the Polytechnic
            University of Catalonia (UPC), currently doing software engineering
            specialisation.
            <br />
            I&apos;m interested in the field of web development.
          </p>
        </div>
        <div className='flex flex-col py-5 w-full'>
          <p className='font-bold text-2xl tracking-wide mb-5'>
            Work experience
          </p>
          {workData.map((work) => (
            <WorkItem key={work.id} {...work} />
          ))}
        </div>
        <div className='flex flex-col pt-10 w-full'>
          <p className='font-bold text-2xl tracking-wide pb-5'>Technologies</p>
          <div className='grid grid-cols-3 gap-4 sm:grid-cols-4 w-full'>
            <TechnologyItem icon={SiNodeDotJs} text='Node.js' />
            <TechnologyItem icon={SiTypescript} text='TypeScript' />
            <TechnologyItem icon={SiReact} text='React.js' />
            <TechnologyItem icon={SiNextDotJs} text='Next.js' />
            <TechnologyItem icon={SiExpress} text='Express.js' />
            <TechnologyItem icon={SiNestjs} text='Nest.js' />
            <TechnologyItem icon={SiTailwindcss} text='Tailwind CSS' />
            <TechnologyItem icon={SiRedux} text='Redux' />
            <TechnologyItem icon={SiAngular} text='Angular' />
            <TechnologyItem icon={SiPython} text='Python' />
            <TechnologyItem icon={SiDjango} text='Django' />
            <TechnologyItem icon={SiFlask} text='Flask' />
            <TechnologyItem icon={SiDocker} text='Docker' />
            <TechnologyItem icon={SiMysql} text='MySQL' />
            <TechnologyItem icon={SiPostgresql} text='Postgres' />
            <TechnologyItem icon={SiNpm} text='Npm' />
            <TechnologyItem icon={SiYarn} text='Yarn' />
            <TechnologyItem icon={SiGit} text='Git' />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
