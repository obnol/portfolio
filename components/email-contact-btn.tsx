'use client';

import { EnvelopeClosedIcon } from '@radix-ui/react-icons';
import { buttonVariants } from './ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function EmailContactBtn(): JSX.Element {
  return (
    <Link
      href='mailto:contact@obnol.com'
      target='_blank'
      rel='noreferrer'
      className={cn(
        buttonVariants({
          size: 'icon',
          variant: 'outline',
          className: 'rounded-xl',
        })
      )}
    >
      <EnvelopeClosedIcon className='h-4 w-4' aria-hidden='true' />
    </Link>
  );
}
