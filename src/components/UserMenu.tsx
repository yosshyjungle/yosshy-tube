import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export function UserMenu() {
  const { user, logout, setIsLoginModalOpen, setIsChannelSetupOpen } = useAuth();

  if (!user) {
    return (
      <Button variant="ghost" size="icon" onClick={() => setIsLoginModalOpen(true)}>
        <User className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <img
            src={user.avatarUrl}
            alt={user.name}
            className="w-8 h-8 rounded-full"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </div>
        <DropdownMenuSeparator />
        {!user.channel && (
          <DropdownMenuItem onClick={() => setIsChannelSetupOpen(true)}>
            チャンネルを作成
          </DropdownMenuItem>
        )}
        <DropdownMenuItem onClick={logout}>
          ログアウト
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}