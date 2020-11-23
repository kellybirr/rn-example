import AsyncStorage from '@react-native-community/async-storage';

export const SESSION_KEY = 'session_key';
export const SESSION_TOKEN = 'session_token';

export async function setStorageItem(
  key: string,
  value: string,
): Promise<void> {
  return await AsyncStorage.setItem(key, value);
}

export async function getStorageItem(key: string): Promise<string | null> {
  return await AsyncStorage.getItem(key);
}
