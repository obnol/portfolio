import Header from '@/components/header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EmailContactBtn from '@/components/email-contact-btn';
import Post from '@/components/post/post';

export default function Home(): JSX.Element {
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
          <Post />
        </TabsContent>
        <TabsContent value='feed'>Coming soon...</TabsContent>
      </Tabs>
    </main>
  );
}
