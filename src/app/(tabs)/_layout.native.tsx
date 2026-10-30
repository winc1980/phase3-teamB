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
      <NativeTabs.Trigger name="calendar">
        <NativeTabs.Trigger.Label>カレンダー</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="calendar" md="calendar_month" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="tasks">
        <NativeTabs.Trigger.Label>タスク</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="list.bullet.clipboard" md="list_alt"/>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="review">
        <NativeTabs.Trigger.Label>ふりかえり</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="clock.arrow.trianglehead.counterclockwise.rotate.90" md="history" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="my-page">
        <NativeTabs.Trigger.Label>マイページ</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="person" md="person" />
      </NativeTabs.Trigger>
    </NativeTabs>
  )
}