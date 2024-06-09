import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import {Labels} from "@/constants/Labels";
import AddCardButton from "@/components/AddCardButton";
import {Colors} from "@/constants/Colors";
import BackToHomeButton from "@/components/BackToHomeButton";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        title: Labels.screenTitles.card,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: Colors.background,
        },
        headerTitleAlign: 'center',
        headerLeft: () => <BackToHomeButton/>,
        headerRight: () => <AddCardButton/>,
      }}
    >
      <Stack.Screen name="index" options={
        {
          title: Labels.screenTitles.card,
          headerLeft: () => null,
        }
      }/>
      <Stack.Screen name="card" options={
        {
          title: Labels.screenTitles.addCard,
          headerRight: () => null,
        }
      }/>
    </Stack>
  );
}
