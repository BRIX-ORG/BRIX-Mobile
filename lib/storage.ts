import { createMMKV } from 'react-native-mmkv';

export const storage = createMMKV({
    id: 'brix-mobile-storage',
    encryptionKey: 'brix-mobile-secret-key',
});
