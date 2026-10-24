import { Tabs } from "expo-router";
import { House } from "lucide-react-native";
import { Calendar } from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
    }}>
      <Tabs.Screen name="calendar" options={{ title: "カレンダー", tabBarLabel: "カレンダー" , tabBarIcon: ({ color }) => <Calendar size={20} color={color} />}}/>
      <Tabs.Screen name="diary" options={{ title: "日記", tabBarLabel: "日記" }}/>
      <Tabs.Screen name="home-page" options={{ title: "ホーム" , tabBarLabel: "ホーム" , tabBarIcon: ({ color }) => <House size={20} color={color} />}}/>
      <Tabs.Screen name="my-page" options={{ title: "マイページ", tabBarLabel: "マイページ" }}/>
      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen name="review" options={{ title: "レビュー", tabBarLabel: "レビュー" }} />
    </Tabs>
  )
}