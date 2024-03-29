import Image from 'next/image';

type EmptyProps = {
  label: string;
};

export default function Empty({ label }: EmptyProps) {
  return (
    <div className='h-full p-20 flex flex-col items-center justify-center'>
      <div className='relative h-72 w-72'>
        <Image fill alt='empty' src='/empty.png' />
      </div>
      <p className='text-sm text-muted-foreground text-center'>{label}</p>
    </div>
  );
}
