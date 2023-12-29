import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export default function Header(): JSX.Element {
  return (
    <div className='flex gap-4 items-center'>
      <Avatar className='h-16 w-16'>
        <AvatarImage src='/rocket-emoji.jpeg' alt='Rocket emoji' />
        <AvatarFallback>L</AvatarFallback>
      </Avatar>
      <div>
        <p>Obnol</p>
        <p className='text-muted-foreground text-sm'>Software engineer in Barcelona, Spain</p>
      </div>
    </div>
  );
}
