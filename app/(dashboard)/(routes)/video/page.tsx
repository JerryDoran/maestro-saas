'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';

import Heading from '@/components/heading';
import Empty from '@/components/empty';
import Loader from '@/components/loader';

import { VideoIcon } from 'lucide-react';
import { formSchema } from './constants';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useProModal } from '@/hooks/use-pro-modal';

export default function VideoPage() {
  const router = useRouter();
  const [video, setVideo] = useState<string>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    },
  });

  const isLoading = form.formState.isSubmitting;

  const proModal = useProModal();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setVideo(undefined);

      const response = await axios.post('/api/video', values);

      setVideo(response.data[0]);

      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen();
      }
    }
    finally {
      // This refetches data for all server components no matter what page you are on
      router.refresh();
    }
  }
  return (
    <div>
      <Heading
        title='Video Generation'
        description='Turn your prompt into video.'
        icon={VideoIcon}
        iconColor='text-orange-600'
        bgColor='bg-orange-600/10'
      />
      <div className='px-4 lg:px-8'>
        <div className='w-full'>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2'
            >
              <FormField
                name='prompt'
                render={({ field }) => (
                  <FormItem className='col-span-12 lg:col-span-10'>
                    <FormControl className='m-0 p-0'>
                      <Input
                        className='border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent'
                        disabled={isLoading}
                        placeholder='Clown fish swimming around a coral reef...'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className='col-span-12 lg:col-span-2 w-full'
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className='space-y-4 mt-4'>
          {isLoading && (
            <div className='p-8 rounded-lg w-full flex items-center justify-center bg-muted'>
              <Loader />
            </div>
          )}
          {!video && !isLoading && <Empty label='No video generated.' />}
          {video && (
            <video
              controls
              className='w-full aspect-video rounded-lg border b-black mt-8'
            >
              <source src={video} />
            </video>
          )}
        </div>
      </div>
    </div>
  );
}
