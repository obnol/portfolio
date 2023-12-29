import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export default function Header(): JSX.Element {
  return (
    <div className='flex flex-col gap-4'>
      <Avatar className='h-16 w-16 rounded-xl'>
        <AvatarImage src='/rocket-emoji.jpeg' alt='Rocket emoji' />
        <AvatarFallback>O</AvatarFallback>
      </Avatar>
      <div className='gap-4 flex flex-col'>
        <p className='font-semibold text-lg'>Obnol</p>
        <div className='text-muted-foreground text-sm'>
          <p>Software engineer in Barcelona, Spain</p>
          <p>Always learning 💭</p>
        </div>
      </div>
    </div>
  );
}
