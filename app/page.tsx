import Header from '@/components/header';
import Toolbar from '@/components/toolbar';

export default function Home(): JSX.Element {
  return (
    <main className='flex min-h-screen flex-col mx-auto max-w-xl p-8 sm:p-12 gap-8'>
      <Header />
      <Toolbar />
    </main>
  );
}
