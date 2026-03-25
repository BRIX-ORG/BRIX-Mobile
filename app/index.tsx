import { Text, View, Pressable } from 'react-native';
import { useUniwind } from 'uniwind';

export default function Page() {
    const { hasAdaptiveThemes } = useUniwind();

    return (
        <View className="flex-1 items-center justify-center bg-background px-safe">
            <View className="items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-border">
                <View className="w-16 h-16 rounded-full bg-primary/20 items-center justify-center mb-4">
                    <Text className="text-primary text-h1">🚀</Text>
                </View>

                <Text className="text-h1 text-gray-900 dark:text-white mb-2 text-center">
                    Welcome to BRIX Mobile
                </Text>

                <Text className="text-body text-gray-500 dark:text-gray-400 text-center mb-6">
                    {hasAdaptiveThemes ? 'Adaptive theme is ON' : 'Adaptive theme is OFF'}
                </Text>

                <Pressable className="bg-primary active:bg-primary-02 px-6 py-3 rounded-xl flex-row items-center gap-2">
                    <Text className="text-white text-body-lg font-bold">Start Building</Text>
                </Pressable>
            </View>
        </View>
    );
}
