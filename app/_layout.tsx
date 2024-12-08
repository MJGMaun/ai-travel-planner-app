import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import 'react-native-reanimated';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    outfit: require('../assets/fonts/Outfit-Regular.ttf'),
    outfit_medium: require('../assets/fonts/Outfit-Medium.ttf'),
    outfit_bold: require('../assets/fonts/Outfit-Bold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Show nothing until fonts are loaded
  }

  return (
    <Stack
		// screenOptions={{ headerShown: false}} // for all screens/page
	>
      <Stack.Screen name="index" options={{ title: "Home", headerShown: false }} />
	  {/* options={{ headerShown: false }}, if you only want for this page/screen */}
    </Stack>
  );
}
