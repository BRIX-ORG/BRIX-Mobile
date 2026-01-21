import { useEffect } from 'react';
import { useRouter, useSegments } from 'expo-router';
import { useAuthStore } from '@/stores/authStore';

export function useProtectedRoute() {
    const segments = useSegments();
    const router = useRouter();
    const { isAuthenticated } = useAuthStore();

    useEffect(() => {
        const inAuthGroup = segments[0] === '(auth)';

        // Example protected groups - add more as they are created
        const inProtectedGroup = segments[0] === '(tabs)' || segments[0] === '(profiles)';

        // 1. Not logged in and trying to access protected route → redirect to login
        if (!isAuthenticated && inProtectedGroup) {
            // router.replace('/(auth)/login');
            console.log('Redirecting to login (commented out for now)');
            return;
        }

        // 2. Logged in and on auth screen → redirect to home
        if (isAuthenticated && inAuthGroup) {
            // router.replace('/(tabs)');
            console.log('Redirecting to home (commented out for now)');
            return;
        }
    }, [isAuthenticated, segments, router]);
}
