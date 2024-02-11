import Image from 'next/image';

export default function Loader() {
  return (
    <div className='h-full flex flex-col gap-y-4 items-center justify-center'>
      <div className='w-10 h-10 animate-spin relative'>
        <Image fill alt='logo' src='/maestro-logo.png' />
      </div>
      <p className='text-sm text-muted-foreground'>Maestro is thinking...</p>
    </div>
  );
}
