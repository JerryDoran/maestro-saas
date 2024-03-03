'use client';

import { useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';
import { toast } from 'react-hot-toast';

type SubscriptionButtonProps = {
  isPro: boolean;
};

export default function SubscriptionButton({
  isPro = false,
}: SubscriptionButtonProps) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    try {
      setLoading(true);
      const response = await axios.get('/api/stripe');

      window.location.href = response.data.url;
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      variant={isPro ? 'default' : 'premium'}
      onClick={handleClick}
      disabled={loading}
    >
      {isPro ? 'Manage Subscription' : 'Upgrade'}{' '}
      {!isPro && <Zap className='ml-2 w-4 h-4 fill-white' />}
    </Button>
  );
}
