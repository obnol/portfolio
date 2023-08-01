import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Post from '@/components/post';

const data = [
  {
    company: 'Peersyst',
    description: 'Joined as a Full-Stack developer with main focus in frontend.',
    date: '2023-06-29T00:00:00',
    image: '/peersyst-logo.jpeg',
  },
  {
    company: 'Waapiti',
    description: 'Joined as a Full-Stack developer',
    date: '2023-01-31T00:00:00',
    image: '/waapiti-logo.jpeg',
  },
  {
    company: 'Waapiti',
    description: 'Internship',
    date: '2022-02-22T00:00:00',
    image: '/waapiti-logo.jpeg',
  },
];

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col p-8 sm:px-8 sm:py-12 mx-auto max-w-sm gap-2'>
      <Avatar className='h-12 w-12 rounded-2xl'>
        <AvatarImage src='/selfie.JPG' alt='selfie' />
        <AvatarFallback>L</AvatarFallback>
      </Avatar>

      <p className='font-semibold tracking-wider text-xl'>Longbo</p>

      <div className='text-muted-foreground text-sm space-y-1 pb-12'>
        <p>Software engineer</p>
        <p>📍 Barcelona, Spain</p>
      </div>

      {data.map((item, index) => (
        <Post key={index} post={item} />
      ))}
    </main>
  );
}
