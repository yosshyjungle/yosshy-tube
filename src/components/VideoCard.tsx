import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { VideoPlayer } from './VideoPlayer';

export function VideoCard() {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  return (
    <>
      <Card 
        className="overflow-hidden cursor-pointer"
        onClick={() => setIsPlayerOpen(true)}
      >
        <div className="aspect-video bg-muted relative">
          <img
            src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba"
            alt="サムネイル"
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-sm px-1 rounded">
            10:30
          </div>
        </div>
        <div className="p-3">
          <div className="flex gap-3">
            <div className="w-9 h-9 rounded-full bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
                alt="アバター"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold line-clamp-2">
                モダンなウェブアプリケーション開発入門 - React & TypeScript
              </h3>
              <p className="text-sm text-muted-foreground mt-1">TechChannel</p>
              <div className="text-sm text-muted-foreground">
                100回視聴 • 1日前
              </div>
            </div>
          </div>
        </div>
      </Card>

      <VideoPlayer
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        isOpen={isPlayerOpen}
        onClose={() => setIsPlayerOpen(false)}
      />
    </>
  );
}