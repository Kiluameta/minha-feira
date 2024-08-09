import 'react-native-reanimated';

import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';

import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  Lexend_400Regular,
  Lexend_500Medium,
  Lexend_600SemiBold,
} from '@expo-google-fonts/lexend'

import Loading from '@/components/loading';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [loaded] = useFonts({
    Lexend_400Regular,
    Lexend_500Medium,
    Lexend_600SemiBold,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return <Loading/>

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <RootLayoutNav/>
      </PaperProvider>
    </SafeAreaProvider>
  )
}

function RootLayoutNav() {
  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
  );
}
