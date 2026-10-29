import { Text, View, ScrollView, Pressable } from "react-native";
import { entries } from "@/mocks/entry";
import { HomeToday } from "@/lib/dayjs"
import { EntryCard } from "./Card";

export default function HomePage() {
  return (
    <View className="flex-1 ">
      <View className="absolute top-16 left-12">
        <Text className="text-xl">{HomeToday}</Text>
      </View>

    <ScrollView className="" >
    <View className="mt-64">
    {entries.map((entry) => (
      <EntryCard entry={entry} key={entry.id} />
    ))}
    </View>
    </ScrollView>
    </View>
  );
}

// onPress={() => router.push({ pathname: `./home-page/${entry.id}`})}