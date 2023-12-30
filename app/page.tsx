import Header from '@/components/header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EmailContactBtn from '@/components/email-contact-btn';
import ProfileTab from '@/components/profile-tab';
import FeedTab from '@/components/feed-tab';

export default async function Home(): Promise<JSX.Element> {
  return (
    <main className='flex min-h-screen flex-col mx-auto max-w-xl p-8 sm:p-12 gap-8'>
      <Header />
      <Tabs defaultValue='profile' className='gap-4 flex flex-col'>
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

        <TabsContent value='profile'>
          <ProfileTab />
        </TabsContent>
        <TabsContent value='feed'>
          <FeedTab />
        </TabsContent>
      </Tabs>
    </main>
  );
}
