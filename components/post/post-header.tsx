export default function PostHeader(): JSX.Element {
  return (
    <div className='flex items-center gap-4'>
      <div className='flex items-center gap-2'>
        <p className='font-semibold'>X / Twitter</p>
        <p className='text-muted-foreground text-sm'>·</p>
        <p className='text-muted-foreground text-sm'>Just now</p>
      </div>
    </div>
  );
}
