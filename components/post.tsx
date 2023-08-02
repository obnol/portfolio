import { formatDateAgo } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

export interface PostProps {
  post: PostDto;
}

export interface PostDto {
  company: string;
  description: string;
  date: string;
  image: string;
  link: string;
}

export default function Post({ post }: PostProps) {
  const { company, date, description, image, link } = post;
  return (
    <div className='flex items-start py-2'>
      <Avatar className='h-5 w-5'>
        <AvatarImage src={image} alt='peersyst-logo' />
        <AvatarFallback>P</AvatarFallback>
      </Avatar>

      <div className='ml-2 text-sm gap-2 flex flex-col'>
        <div className='flex items-center'>
          <p>
            <Link href={link} className='font-semibold hover:underline hover:underline-offset-2' target='_blank'>
              {company}
            </Link>
            <span className='text-muted-foreground'>{` · ${formatDateAgo(date)}`}</span>
          </p>
        </div>

        <p>{description}</p>
      </div>
    </div>
  );
}
