'use client';

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const testimonials = [
  {
    name: 'John Doe',
    title: 'Software Engineer',
    avatar: 'https://avatars.githubusercontent.com/u/12345678?v=4',
    description:
      'This is the best product I have ever seen. I highly recommend it!',
  },
  {
    name: 'Jane Doe',
    title: 'Applications Developer',
    avatar: 'https://avatars.githubusercontent.com/u/12345678?v=4',
    description:
      'I love this product. It is so easy to use and I love the design!',
  },
  {
    name: 'Bob Doe',
    title: 'Database Engineer',
    avatar: 'https://avatars.githubusercontent.com/u/12345678?v=4',
    description:
      'This is the best product I have ever seen. I highly recommend it!',
  },
  {
    name: 'Steve Doe',
    title: 'Applications Developer',
    avatar: 'https://avatars.githubusercontent.com/u/12345678?v=4',
    description:
      'I love this product. It is so easy to use and I love the design!',
  },
];

export default function LandingContent() {
  return (
    <div className='px-10 pb-20'>
      <h2 className='text-center text-4xl text-white font-extrabold mb-10'>
        Testimonials
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className='bg-[#192339] border-none text-white'
          >
            <CardHeader>
              <CardTitle className='flex items-center gap-x-2'>
                <div>
                  <p className='text-lg'>{item.name}</p>
                  <p className='text-sm text-zinc-400'>{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className='pt-4 px-0'>
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
