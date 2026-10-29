import { Tabs } from "expo-router";
import { House, Calendar, NotebookPen } from "lucide-react-native";
import { NativeTabs } from "expo-router/native-tabs";


export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="home-page">
        <NativeTabs.Trigger.Label>ホーム</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="diary">
        <NativeTabs.Trigger.Label>日記</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="book.closed" md="import_contacts" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="my-page">
        <NativeTabs.Trigger.Label>マイページ</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="person" md="person" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="calendar">
        <NativeTabs.Trigger.Label>カレンダー</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="calendar" md="calendar_month" />
      </NativeTabs.Trigger>
    </NativeTabs>
  )
}