'use client';

import { EnvelopeClosedIcon } from '@radix-ui/react-icons';
import { Button } from './ui/button';

export default function EmailContactBtn(): JSX.Element {
  function handleOnClick(): void {
    window.location.href = 'mailto:contact@obnol.com';
  }

  return (
    <Button variant='outline' size='icon' className='rounded-xl' onClick={handleOnClick}>
      <EnvelopeClosedIcon className='h-4 w-4' />
    </Button>
  );
}
