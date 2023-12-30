'use client';

import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { buttonVariants } from '../ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Post } from '@/lib/types';

type PostFooterProps = Pick<Post, 'link'>;

export default function PostFooter({ link }: PostFooterProps): JSX.Element {
  return (
    <div className='flex items-center justify-end'>
      <Link
        href={link}
        target='_blank'
        rel='noreferrer'
        className={cn(
          buttonVariants({
            size: 'icon',
            variant: 'ghost',
          })
        )}
      >
        <ExternalLinkIcon className='h-4 w-4' aria-hidden='true' />
      </Link>
    </div>
  );
}
