import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
    }}>
      <Tabs.Screen name="calendar" options={{ title: "カレンダー", tabBarLabel: "カレンダー"}}/>
      <Tabs.Screen name="diary" options={{ title: "日記", tabBarLabel: "日記" }}/>
      <Tabs.Screen name="home-page" options={{ title: "ホーム" , tabBarLabel: "ホーム" }}/>
      <Tabs.Screen name="my-page" options={{ title: "マイページ", tabBarLabel: "マイページ" }}/>
      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen name="review" options={{ title: "レビュー", tabBarLabel: "レビュー" }} />
    </Tabs>
  )
}