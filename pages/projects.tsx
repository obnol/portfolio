import type { NextPage } from 'next';
import Layout from '../components/Layout';

const Projects: NextPage = () => {
  return (
    <Layout>
      <div className='mx-auto mb-8 flex w-full max-w-2xl flex-col items-start'>
        <p className='text-4xl font-extrabold tracking-wider'>Projects</p>
        <p className='flex w-full justify-center py-5 text-lg font-bold'>{`(In progress...)`}</p>
      </div>
    </Layout>
  );
};

export default Projects;
