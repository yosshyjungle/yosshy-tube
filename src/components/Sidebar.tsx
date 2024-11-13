import { Home, Compass, Clock, ThumbsUp, PlaySquare, History } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface SidebarProps {
  isOpen: boolean;
}

export function Sidebar({ isOpen }: SidebarProps) {
  const menuItems = [
    { icon: Home, label: 'ホーム' },
    { icon: Compass, label: '探索' },
    { icon: Clock, label: 'ショート' },
    { icon: PlaySquare, label: '登録チャンネル' },
    { icon: History, label: '履歴' },
    { icon: ThumbsUp, label: '高く評価した動画' },
  ];

  return (
    <aside
      className={cn(
        'fixed left-0 top-16 h-[calc(100vh-4rem)] bg-background border-r transition-all duration-300',
        isOpen ? 'w-60' : 'w-[70px]'
      )}
    >
      <ScrollArea className="h-full">
        <div className="p-2">
          {menuItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className={cn(
                'w-full justify-start gap-4 mb-1',
                !isOpen && 'justify-center px-0'
              )}
            >
              <item.icon className="h-5 w-5" />
              {isOpen && <span>{item.label}</span>}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </aside>
  );
}