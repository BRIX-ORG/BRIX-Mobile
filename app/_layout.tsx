import { Stack } from 'expo-router';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/queryClient';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { Uniwind } from 'uniwind';
import { useThemeStore } from '@/stores/themeStore';
import { useEffect } from 'react';
import Toast from 'react-native-toast-message';
import { useProtectedRoute } from '@/hooks/useProtectedRoute';
import '../global.css';

function RootLayoutNav() {
    const { isDark } = useThemeStore();
    // Handle auth redirects
    useProtectedRoute();

    // Sync theme with Uniwind
    useEffect(() => {
        Uniwind.setTheme(isDark ? 'dark' : 'light');
    }, [isDark]);

    return (
        <>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index" />
                {/* Add more screens/groups here as they are created */}
            </Stack>
            <Toast />
        </>
    );
}

export default function RootLayout() {
    return (
        <QueryClientProvider client={queryClient}>
            <SafeAreaProvider>
                <KeyboardProvider>
                    <RootLayoutNav />
                </KeyboardProvider>
            </SafeAreaProvider>
        </QueryClientProvider>
    );
}
