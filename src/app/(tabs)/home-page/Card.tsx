import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Pressable, Text, View } from "react-native";
import { type Entry } from "@/mocks/entry";
import { router } from "expo-router";

export function EntryCard({ entry }: { entry: Entry }) {
  const handleCard = () => {
    router.push({ pathname: `./home-page/${entry.id}` })
  };

  return (
    <Pressable className="items-center" onPress={handleCard}>
      <Card className="mb-3 w-5/6" >
        <CardHeader>
          <CardTitle>{entry.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <View>
            <Text>{entry.content}</Text>
          </View>
        </CardContent>
      </Card>
      </Pressable>
  )
}