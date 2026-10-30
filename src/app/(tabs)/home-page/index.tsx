import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { entries } from "@/mocks/entry";
import { HomeToday } from "@/lib/dayjs";
import { EntryCard } from "./Card";
import { Ellipsis } from "lucide-react-native";
import HomeMenu from "./menu";

import { useState } from "react";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [backgroundUri, setBackgroundUri] = useState<string | null>(null);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const textcolor = isDarkTheme ? "#ffffff" : "#000000";

  return (
    <View className="h-full w-full">
      {backgroundUri && (
        <Image
          source={{ uri: backgroundUri }}
          style={StyleSheet.absoluteFill}
          resizeMode="cover"
          className="w-full h-screen"
        />
      )}

      <ScrollView className=" h-full w-full">
        <View className="flex flex-row  justify-between p-8 pb-40">
          <Text className="text-3xl" style={{ color: textcolor }}>
            {HomeToday}
          </Text>

          <Pressable
            onPress={() => {
              setIsOpen(!isOpen);
            }}
          >
            <Ellipsis color={textcolor} />
          </Pressable>
        </View>

        <View className="mt-6">
          {entries.map((entry) => (
            <EntryCard isDarkTheme={isDarkTheme} entry={entry} key={entry.id} />
          ))}
        </View>
      </ScrollView>
      <HomeMenu
        isMenuOpen={isOpen}
        onMenuOpen={setIsOpen}
        isDarkTheme={isDarkTheme}
        onDarkThemeChange={setIsDarkTheme}
        onBackgroundChange={setBackgroundUri}
      />
    </View>
  );
}
