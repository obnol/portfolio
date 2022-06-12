import React from 'react';
import Image from 'next/image';

interface WorkInfo {
  id: string;
  company: string;
  link: string;
  logo: string;
  position: string;
  startDate: string;
  endDate: string | null;
}

const WorkItem = (props: WorkInfo) => {
  const { company, link, logo, position, startDate, endDate } = props;
  return (
    <a href={link} target='_blank' rel='noopener noreferrer'>
      <div className='flex h-36 rounded-md border-2 border-neutral-500 p-3 hover:border-neutral-900  dark:border-neutral-400 dark:hover:border-neutral-200 md:w-1/2'>
        <div className='flex items-center'>
          <div className='mr-5 w-1/3'>
            <Image
              src={logo}
              alt='Waapiti logo'
              width={100}
              height={100}
              className='rounded-md'
              priority
            />
          </div>
          <div className='flex flex-col text-neutral-800 dark:text-neutral-200 '>
            <p className='text-lg font-bold tracking-wider hover:text-neutral-400'>
              {company}
            </p>
            <p>{position}</p>
            <p className='text-sm italic text-neutral-800 dark:text-neutral-500'>{`${startDate} - ${
              endDate ? endDate : `Present`
            }`}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default WorkItem;
