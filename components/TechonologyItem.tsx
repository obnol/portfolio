import type { IconType } from 'react-icons';

export function TechnologyItem({
  text,
  icon,
}: {
  text: string;
  icon: IconType;
}) {
  return (
    <div className='flex space-x-2 '>
      <span>{icon({ className: 'h-6 w-6' })}</span>
      <span className='text-neutral-600 dark:text-neutral-400'>{text}</span>
    </div>
  );
}
