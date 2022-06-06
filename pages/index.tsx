import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className='flex flex-col items-start max-w-2xl w-full mx-auto mb-8'>
        <p className='font-extrabold text-4xl tracking-wider text-neutral-800 dark:text-neutral-200'>
          {`Hi, I'm Longbo! 👋 `}
        </p>
        <div className='flex flex-col py-5'>
          <p className='text-neutral-800 dark:text-neutral-200 text-lg text-justify'>
            I{`'`}m a Computer Science student at the Polytechnic University of
            Catalonia (UPC), currently doing Software Engineering
            specialitzation and I{`'`}m in my last year of studies.
            <br />I{`'`}m interested in the field of web development.
          </p>
        </div>
        <div className='flex py-5'>
          <p className='font-bold text-2xl tracking-wide'>Work experience</p>
        </div>
        <div className='flex pt-10'>
          <p className='font-bold text-2xl tracking-wide'>Technologies</p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
