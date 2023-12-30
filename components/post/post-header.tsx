import { Post } from '@/lib/types';
import { formatDate } from '@/lib/utils';

type PostHeaderProps = Pick<Post, 'entity' | 'date'>;

export default function PostHeader({ date, entity }: PostHeaderProps): JSX.Element {
  return (
    <div className='flex items-center gap-4'>
      <div className='flex items-center gap-2'>
        <p className='font-semibold'>{entity}</p>
        <p className='text-muted-foreground text-sm'>·</p>
        <p className='text-muted-foreground text-sm'>{formatDate(date)}</p>
      </div>
    </div>
  );
}
