import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pressable, Text, View } from "react-native";
import { type Entry } from "@/mocks/entry";
import { router } from "expo-router";

export function EntryCard({
  entry,
  isDarkTheme,
}: {
  entry: Entry;
  isDarkTheme: boolean;
}) {
  const handleCard = () => {
    router.push({ pathname: `./home-page/${entry.id}` });
  };
  const textcolor = isDarkTheme ? "#ffffff" : "#000000";

  return (
    <Pressable className="items-center" onPress={handleCard}>
      <Card className=" w-5/6 m-2">
        <CardHeader>
          <CardTitle className=" font-kiwi" style={{ color: textcolor }}>
            {entry.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <View>
            <Text className=" font-kiwi " style={{ color: textcolor }}>
              {entry.content}
            </Text>
          </View>
        </CardContent>
      </Card>
    </Pressable>
  );
}
