import type { NextPage } from 'next';
import Image from 'next/image';
import Layout from '../components/Layout';

const Uses: NextPage = () => {
  return (
    <Layout>
      <div className='flex flex-col items-start max-w-2xl w-full mx-auto mb-8 text-neutral-800 dark:text-neutral-200'>
        <p className='font-extrabold text-4xl tracking-wider'>My Setup</p>
        <p className='text-lg py-5 dark:text-neutral-400'>
          Here&apos;s what tech I&apos;m currently using for university and work
        </p>
        <div className='flex justify-center w-full'>
          <Image
            src='/images/setup.jpeg'
            alt='Setup'
            className='rounded-lg'
            width={600}
            height={400}
            quality={100}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Uses;
