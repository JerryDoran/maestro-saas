import { useState } from 'react';
import { useProModal } from '@/hooks/use-pro-modal';
import { cn } from '@/lib/utils';
import axios from 'axios';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import { DialogTitle } from '@radix-ui/react-dialog';
import { Badge } from '@/components/ui/badge';
import {
  Check,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon,
  Zap,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'react-hot-toast';

const tools = [
  {
    label: 'Conversations',
    icon: MessageSquare,
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
  },
  {
    label: 'Music Generation',
    icon: Music,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: 'text-pink-700',
    bgColor: 'bg-pink-700/10',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    color: 'text-orange-600',
    bgColor: 'bg-orange-600/10',
  },
  {
    label: 'Code Generation',
    icon: Code,
    color: 'text-green-700',
    bgColor: 'bg-green-700/10',
  },
];

export default function ProModal() {
  const proModal = useProModal();
  const [loading, setLoading] = useState(false);

  async function onSubscribe() {
    try {
      setLoading(true);
      const response = await axios.get('/api/stripe');

      window.location.href = response.data.url;
    } catch (error: any) {
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  }
  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='flex items-center justify-center flex-col gap-y-4 pb-2'>
            <div className='flex items-center gap-x-2 font-bold py-1'>
              Updgrade to Maestro
              <Badge variant='premium' className='uppercase text-sm py-1'>
                pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className='text-center pt-2 space-y-2 text-zinc-900 font-medium'>
            {tools.map((tool) => (
              <Card
                key={tool.label}
                className='p-3 border-black/5 flex items-center justify-between'
              >
                <div className='flex items-center gap-x-4'>
                  <div
                    className={cn(
                      'p-2 w-fit rounded-md',
                      tool.color,
                      tool.bgColor
                    )}
                  >
                    <tool.icon className={cn('w-6 h-6', tool.color)} />
                  </div>
                  <div className='text-sm font-semibold'>{tool.label}</div>
                </div>
                <Check className='text-primary h-5 w-5' />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            disabled={loading}
            onClick={onSubscribe}
            size='lg'
            variant='premium'
            className='w-full'
          >
            Upgrade
            <Zap className='w-4 h-4 ml-2 fill-white' />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
