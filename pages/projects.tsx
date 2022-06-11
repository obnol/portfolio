import type { NextPage } from 'next';
import Layout from '../components/Layout';

const Projects: NextPage = () => {
  return (
    <Layout>
      <div className='flex flex-col items-start max-w-2xl w-full mx-auto mb-8'>
        <p className='font-extrabold text-4xl tracking-wider'>Projects</p>
        <p className='flex w-full justify-center py-5 text-lg font-bold'>{`(In progress...)`}</p>
      </div>
    </Layout>
  );
};

export default Projects;
