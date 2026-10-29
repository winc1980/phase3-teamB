import { Stack } from "expo-router";
import { PortalHost } from "@rn-primitives/portal";
import "../../global.css";
import { useFonts } from "expo-font";
export default function RootLayout() {
  const [loaded, error] = useFonts({
    "HachiMaruPop-Regular": require("@/assets/fonts/HachiMaruPop-Regular.ttf"),
    "KiwiMaru-Light": require("@/assets/fonts/KiwiMaru-Light.ttf"),
  });
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <PortalHost />
    </Stack>
  );
}
