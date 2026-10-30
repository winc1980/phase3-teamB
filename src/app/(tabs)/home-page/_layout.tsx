import { Stack } from "expo-router";

export default function HomeLayout() {
  return(
    <Stack >
      <Stack.Screen name="index" options={{ title: "今日の振り返り",
      headerBackButtonDisplayMode: "minimal"
      }}/>
    </Stack>
  )
}