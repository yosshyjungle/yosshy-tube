import { createContext, useContext, useState, ReactNode } from 'react';

interface Channel {
  id: string;
  name: string;
  description: string;
  avatarUrl: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  channel: Channel | null;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (open: boolean) => void;
  isChannelSetupOpen: boolean;
  setIsChannelSetupOpen: (open: boolean) => void;
  createChannel: (name: string, description: string, avatar: File | null) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isChannelSetupOpen, setIsChannelSetupOpen] = useState(false);

  const login = async (email: string, password: string) => {
    // デモ実装
    if (email && password) {
      setUser({
        id: '1',
        name: 'デモユーザー',
        email: email,
        avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
        channel: null
      });
      setIsLoginModalOpen(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const createChannel = async (name: string, description: string, avatar: File | null) => {
    // デモ実装
    if (user) {
      setUser({
        ...user,
        channel: {
          id: '1',
          name,
          description,
          avatarUrl: avatar ? URL.createObjectURL(avatar) : user.avatarUrl
        }
      });
      setIsChannelSetupOpen(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isLoginModalOpen,
        setIsLoginModalOpen,
        isChannelSetupOpen,
        setIsChannelSetupOpen,
        createChannel
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}