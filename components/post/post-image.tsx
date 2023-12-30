import { Post } from '@/lib/types';

type PostImageProps = Pick<Post, 'image'>;

export default function PostImage({ image }: PostImageProps): JSX.Element {
  return <img src={image} alt='Post image' className='w-8 h-auto rounded-full' />;
}
