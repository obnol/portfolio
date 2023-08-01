import { formatDateAgo } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export interface PostProps {
  post: Post;
}

export interface Post {
  company: string;
  description: string;
  date: string;
  image: string;
}

export default function Post({ post }: PostProps) {
  const { company, date, description, image } = post;
  return (
    <div className='flex items-start py-2'>
      <Avatar className='h-5 w-5'>
        <AvatarImage src={image} alt='peersyst-logo' />
        <AvatarFallback>P</AvatarFallback>
      </Avatar>

      <div className='ml-2 text-sm gap-2 flex flex-col'>
        <div className='flex items-center'>
          <p>
            <span className='font-semibold'>{company}</span>
            <span className='text-muted-foreground'>{` · ${formatDateAgo(date)}`}</span>
          </p>
        </div>

        <p>{description}</p>
      </div>
    </div>
  );
}
