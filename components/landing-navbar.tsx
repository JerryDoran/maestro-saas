'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@clerk/nextjs'; // used in client components
import { Montserrat } from 'next/font/google';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const font = Montserrat({ subsets: ['latin'], weight: '600' });

export default function LandingNavbar() {
  const { isSignedIn } = useAuth();
  return (
    <nav className='p-4 bg-transparent flex items-center justify-between'>
      <Link href='/' className='flex items-center'>
        <div className='relative w-8 h-8 mr-4'>
          <Image fill alt='logo' src='/maestro-logo.png' />
        </div>
        <h1 className={cn('text-2xl font-bold text-white', font.className)}>
          Maestro
        </h1>
      </Link>
      <div className='flex items-center gap-x-2'>
        <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
          <Button variant='outline' className='rounded-full'>
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
}
