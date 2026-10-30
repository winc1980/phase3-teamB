import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { entries } from "@/mocks/entry";

export default function Entry() {
  const { id } = useLocalSearchParams();
  const idx = Number(id) - 1;
  const entry = entries.at(idx);

  return (
    <Stack.Screen options={{ title: entry?.title, headerBackButtonDisplayMode: 'minimal' }} >
    <View className="flex-1">
      <Card className="h-full justify-center">
        <CardHeader>
          <CardTitle>{entry?.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Text>{entry?.content}</Text>
        </CardContent>
      </Card>
    </View>
    </Stack.Screen>
  )
}