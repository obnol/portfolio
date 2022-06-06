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
      <div className='flex w-1/2 p-5 border-2 rounded-md border-neutral-800 dark:border-neutral-400  hover:border-neutral-800 dark:hover:border-neutral-200 h-40'>
        <div className='flex items-center'>
          <div className='w-1/3 mr-5'>
            <Image
              src={logo}
              alt='Waapiti logo'
              width={100}
              height={100}
              className='rounded-md'
            />
          </div>
          <div className='flex flex-col text-neutral-800 dark:text-neutral-200'>
            <p className='font-bold text-lg tracking-wider'>{company}</p>
            <p className=''>{position}</p>
            <p className='text-sm italic text-neutral-800 dark:text-neutral-500'>{`${startDate} - ${
              endDate ? endDate : `current`
            }`}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default WorkItem;
