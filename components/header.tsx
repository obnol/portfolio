import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export default function Header(): JSX.Element {
  return (
    <div className='flex gap-4 items-center'>
      <Avatar className='h-16 w-16'>
        <AvatarImage src='/selfie.jpg' alt='Longbo Qiu' />
        <AvatarFallback>L</AvatarFallback>
      </Avatar>
      <div>
        <p>Longbo</p>
        <p className='text-muted-foreground text-sm'>Software engineer in Barcelona, Spain</p>
      </div>
    </div>
  );
}
