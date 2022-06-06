import type { NextPage } from 'next';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className='flex flex-col items-start max-w-2xl w-full mx-auto mb-8'>
        <p className='font-sans font-semibold text-3xl tracking-wide text-neutral-800 dark:text-neutral-200'>
          {`Hi, I'm Longbo! 👋 `}
        </p>
      </div>
    </Layout>
  );
};

export default Home;
