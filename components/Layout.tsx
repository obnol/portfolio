import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import Footer from './Footer';

function NavItem({ href, text }: { href: string; text: string }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a
        className={`
          ${
            isActive
              ? 'font-bold text-neutral-800 dark:text-neutral-200'
              : 'font-sans text-neutral-600 dark:text-neutral-400'
          }
          p-1 px-3 py-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all
        `}
      >
        <span>{text}</span>
      </a>
    </Link>
  );
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Welcome to my personal portfolio' />
        <title>Portfolio | Longbo</title>
      </Head>
      <div className='flex flex-col justify-center px-5'>
        <nav className='flex items-center justify-between w-full max-w-2xl mx-auto py-8'>
          <div>
            <NavItem href='/' text='Home' />
            <NavItem href='/projects' text='Projects' />
            <NavItem href='/uses' text='Uses' />
          </div>
          <button
            aria-label='Toggle Dark Mode'
            type='button'
            className='w-9 h-9 bg-neutral-200 rounded-lg dark:bg-neutral-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all'
            onClick={() =>
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              className='w-5 h-5 text-neutral-800 dark:text-neutral-200'
            >
              {resolvedTheme === 'dark' ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                />
              )}
            </svg>
          </button>
        </nav>
      </div>
      <main className='flex flex-col justify-center px-5'>
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
