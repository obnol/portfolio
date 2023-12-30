import { Post } from '@/lib/types';
import { Icons } from '../icons';

type PostImageProps = Pick<Post, 'image'>;

export default function PostImage({ image }: PostImageProps): JSX.Element {
  return <img src={image} alt='Post image' className='w-8 h-aout rounded-full' />;
}
