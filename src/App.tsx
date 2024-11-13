import { useState } from 'react';
import { Menu, Search, Upload, Bell } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { VideoCard } from '@/components/VideoCard';
import { Sidebar } from '@/components/Sidebar';
import { UserMenu } from '@/components/UserMenu';
import { LoginModal } from '@/components/LoginModal';
import { ChannelSetup } from '@/components/ChannelSetup';
import { UploadModal } from '@/components/UploadModal';
import { AuthProvider } from '@/contexts/AuthContext';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  return (
    <AuthProvider>
      <div className="min-h-screen bg-background">
        {/* ヘッダー */}
        <header className="fixed top-0 left-0 right-0 h-16 bg-background border-b z-50 px-4">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <Menu className="h-5 w-5" />
              </Button>
              <h1 className="text-xl font-bold">TubeClone</h1>
            </div>
            
            <div className="flex-1 max-w-2xl mx-4">
              <div className="flex gap-2">
                <Input
                  placeholder="検索"
                  className="w-full"
                />
                <Button variant="secondary">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={() => setIsUploadModalOpen(true)}>
                <Upload className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <UserMenu />
            </div>
          </div>
        </header>

        {/* メインコンテンツ */}
        <div className="pt-16 flex">
          <Sidebar isOpen={isSidebarOpen} />
          
          <main className="flex-1 p-6">
            <ScrollArea className="h-[calc(100vh-4rem)]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {[...Array(12)].map((_, i) => (
                  <VideoCard key={i} />
                ))}
              </div>
            </ScrollArea>
          </main>
        </div>

        <LoginModal />
        <ChannelSetup />
        <UploadModal isOpen={isUploadModalOpen} onClose={() => setIsUploadModalOpen(false)} />
      </div>
    </AuthProvider>
  );
}

export default App;