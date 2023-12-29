import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EmailContactBtn from './email-contact-btn';

export default function Toolbar(): JSX.Element {
  return (
    <Tabs defaultValue='profile'>
      <div className='flex items-center gap-4'>
        <TabsList className='flex-1 flex justify-between'>
          <TabsTrigger className='flex w-1/2' value='profile'>
            Profile
          </TabsTrigger>
          <TabsTrigger className='flex w-1/2' value='feed'>
            Feed
          </TabsTrigger>
        </TabsList>
        <EmailContactBtn />
      </div>

      <TabsContent value='profile'>Coming soon...</TabsContent>
      <TabsContent value='feed'>Coming soon...</TabsContent>
    </Tabs>
  );
}
