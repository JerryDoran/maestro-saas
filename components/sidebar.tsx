'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import { cn } from '@/lib/utils';
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from 'lucide-react';

const monserrat = Montserrat({ subsets: ['latin'], weight: '600' });

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',
  },
  {
    label: 'Conversation',
    icon: MessageSquare,
    href: '/conversation',
    color: 'text-violet-500',
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    href: '/image',
    color: 'text-pink-500',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    href: '/video',
    color: 'text-orange-500',
  },
  {
    label: 'Music Generation',
    icon: Music,
    href: '/music',
    color: 'text-emerald-500',
  },
  {
    label: 'Code Generation',
    icon: Code,
    href: '/code',
    color: 'text-green-500',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
    color: 'text-gray-400',
  },
];

export default function Sidebar() {
  return (
    <div className='h-full space-y-4 py-4 flex flex-col text-white bg-[#111827]'>
      <div className='px-3 py-2 flex-1'>
        <Link href='/dashboard' className='flex items-center pl-3 mb-14'>
          <div className='relative w-8 h-8 mr-4'>
            <Image fill alt='logo' src='/maestro-logo.png' />
          </div>
          <h1 className={cn('text-2xl', monserrat.className)}>Maestro</h1>
        </Link>
        <div className='space-y-1'>
          {routes.map(({ label, href, icon: Icon, color }) => (
            <Link
              key={href}
              href={href}
              className='group flex items-center p-3 text-sm w-full font-medium rounded-lg justify-start cursor-pointer transition hover:text-white hover:bg-white/10'
            >
              <div className='flex items-center flex-1'>
                <Icon
                  className={cn('w-6 h-6 mr-3', color)}
                  aria-hidden='true'
                />
                <span className=''>{label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
