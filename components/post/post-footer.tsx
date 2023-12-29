'use client';

import { HeartIcon } from '@radix-ui/react-icons';
import { Button } from '../ui/button';

export default function PostFooter(): JSX.Element {
  return (
    <div className='flex items-center gap-4'>
      <HeartIcon />
    </div>
  );
}
