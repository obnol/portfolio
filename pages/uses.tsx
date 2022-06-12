import type { NextPage } from 'next';
import Image from 'next/image';
import Layout from '../components/Layout';

const Uses: NextPage = () => {
  return (
    <Layout>
      <div className='mx-auto mb-8 flex w-full max-w-2xl flex-col items-start text-neutral-800 dark:text-neutral-200'>
        <p className='text-4xl font-extrabold tracking-wider'>My Setup</p>
        <p className='py-5 text-lg text-neutral-600 dark:text-neutral-400'>
          Here&apos;s what tech I&apos;m currently using for coding, university
          and work
        </p>
        <div className='flex justify-center px-5'>
          <Image
            src='/images/setup.jpeg'
            alt='Setup'
            className='rounded-lg'
            width={4032 / 2}
            height={3024 / 2}
            priority
          />
        </div>
        <div className='flex w-full flex-col py-5'>
          <p className='py-2 text-xl font-bold tracking-wide'>Office</p>
          <div className='px-5 pb-5'>
            <ul className='list-inside list-disc leading-loose text-neutral-600 dark:text-neutral-400'>
              <li>M1 Mac Mini</li>
              <li>LG 29WK500-P Ultrawide</li>
              <li>2x Dell P2419H</li>
              <li>Razer Huntsman Tournament Edition</li>
              <li>Logitech MX Master 3</li>
              <li>Apple HomePod Mini</li>
              <li>13&quot; M1 MacBook Pro</li>
              <li>IKEA Markus chair</li>
            </ul>
          </div>
          <p className='py-2 text-xl font-bold tracking-wide'>Coding</p>
          <div className='px-5 pb-5'>
            <ul className='list-inside list-disc leading-loose text-neutral-600 dark:text-neutral-400'>
              <li>Visual Studio Code</li>
              <li>Theme: Community Material Theme Ocean High Contrast</li>
              <li>Terminal: iTerm</li>
            </ul>
          </div>
          <p className='py-2 text-xl font-bold tracking-wide'>Miscellaneous</p>
          <div className='px-5'>
            <ul className='list-inside list-disc leading-loose text-neutral-600 dark:text-neutral-400'>
              <li>Raycast</li>
              <li>Todoist</li>
              <li>Notion</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Uses;
