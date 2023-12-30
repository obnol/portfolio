import { Post } from '@/lib/types';
import PostFooter from './post-footer';
import PostHeader from './post-header';
import PostImage from './post-image';

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps): JSX.Element {
  return (
    <div className='flex gap-4'>
      <div>
        <PostImage image={post.image} />
      </div>
      <div className='flex flex-col w-full'>
        <PostHeader entity={post.entity} date={post.date} />
        <p className='font-light'>{post.description}</p>
        <PostFooter link={post.link} />
      </div>
    </div>
  );
}
