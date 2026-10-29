import { Text, View, ScrollView, Pressable } from "react-native";
import { entries } from "@/mocks/entry";
import { HomeToday } from "@/lib/dayjs";
import { EntryCard } from "./Card";
import { Ellipsis } from "lucide-react-native";

export default function HomePage() {
  return (
    <ScrollView className="bg-slate-900">
      <View className="flex-row  justify-between p-10 pb-40">
        <Text className=" text-white text-3xl">{HomeToday}</Text>
        <Ellipsis className="text-white" />
      </View>

      <View className="mt-6">
        {entries.map((entry) => (
          <EntryCard entry={entry} key={entry.id} />
        ))}
      </View>
    </ScrollView>
  );
}
