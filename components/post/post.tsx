import PostFooter from './post-footer';
import PostHeader from './post-header';
import PostImage from './post-image';

export default function Post(): JSX.Element {
  return (
    <div className='flex gap-4'>
      <div>
        <PostImage />
      </div>
      <div className='flex flex-col'>
        <PostHeader />
        <p className='font-light'>You can find me here where I share about life, thoughts, and my coding adventures. 🌐</p>
        {/* <PostFooter /> */}
      </div>
    </div>
  );
}
