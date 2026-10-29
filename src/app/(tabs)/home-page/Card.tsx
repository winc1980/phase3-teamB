import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pressable, Text, View } from "react-native";
import { type Entry } from "@/mocks/entry";
import { router } from "expo-router";
import { useFonts } from "expo-font";

export function EntryCard({ entry }: { entry: Entry }) {
  const handleCard = () => {
    router.push({ pathname: `./home-page/${entry.id}` });
  };

  return (
    <Pressable className="items-center" onPress={handleCard}>
      <Card className=" w-5/6 m-2">
        <CardHeader>
          <CardTitle className=" font-kiwi">{entry.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <View>
            <Text className=" font-kiwi">{entry.content}</Text>
          </View>
        </CardContent>
      </Card>
    </Pressable>
  );
}
