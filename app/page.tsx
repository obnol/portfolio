import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Post from '@/components/post';
import data from '@/lib/data';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col p-8 sm:px-8 sm:py-12 mx-auto max-w-sm gap-2'>
      <Avatar className='h-12 w-12 rounded-2xl'>
        <AvatarImage src='/selfie.JPG' alt='selfie' />
        <AvatarFallback>L</AvatarFallback>
      </Avatar>

      <p className='font-semibold text-xl'>Longbo</p>

      <div className='text-muted-foreground space-y-1 pb-8'>
        <p>Software engineer</p>
        <p>📍 Barcelona, Spain</p>
      </div>

      {data.map((item, index) => (
        <Post key={index} post={item} />
      ))}
    </main>
  );
}
