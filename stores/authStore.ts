import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { mmkvStorage } from '@/lib/mmkvStorage';

interface AuthUser {
    id: string;
    email: string;
    role: string;
    is_verified?: boolean;
    username?: string;
    avatar_url?: string;
    display_name?: string;
}

interface AuthState {
    accessToken: string | null;
    refreshToken: string | null;
    user: AuthUser | null;
    isAuthenticated: boolean;

    // Actions
    setCredentials: (data: { accessToken: string; refreshToken: string; user: AuthUser }) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            accessToken: null,
            refreshToken: null,
            user: null,
            isAuthenticated: false,

            setCredentials: ({ accessToken, refreshToken, user }) => {
                set({
                    accessToken,
                    refreshToken,
                    user,
                    isAuthenticated: true,
                });
            },

            logout: () => {
                set({
                    accessToken: null,
                    refreshToken: null,
                    user: null,
                    isAuthenticated: false,
                });
            },
        }),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => mmkvStorage),
        },
    ),
);
