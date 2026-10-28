import { Text, View, ScrollView } from "react-native";
import { entries } from "@/mocks/entry";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HomeToday } from "@/lib/dayjs";

export default function HomePage() {
  return (
    <View className="flex-1 ">
      <View className="absolute top-16 left-12">
        <Text className="text-xl">{HomeToday}</Text>
      </View>

    <ScrollView className="" >
    <View className="flex-col items-center mt-64">
    {entries.map((entry) => (
      <Card key={entry.id} className="mb-3 w-5/6">
        <CardHeader>
          <CardTitle>{entry.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <View>
            <Text>{entry.content}</Text>
          </View>
        </CardContent>
      </Card>
    ))}
    </View>
    </ScrollView>
    </View>
  );
}