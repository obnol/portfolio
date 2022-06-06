import type { NextPage } from 'next';
import Layout from '../components/Layout';
import WorkItem from '../components/WorkItem';

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
          <p className='text-lg text-justify'>
            {`I'm a Computer Science student at the Polytechnic University of
            Catalonia (UPC), currently doing Software Engineering specialisation
            and I'm in my last year of studies. `}
            <br />
            {`I'm interested in the field of web development.`}
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
        <div className='flex pt-10'>
          <p className='font-bold text-2xl tracking-wide'>Technologies</p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
