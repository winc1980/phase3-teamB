import { View, Text, Pressable, Switch, SafeAreaView } from "react-native";
import { ChevronLeft } from "lucide-react-native";
import * as ImagePicker from "expo-image-picker";

type HomeMenu = {
  isMenuOpen: boolean;
  isDarkTheme: boolean;
  onBackgroundChange: (uri: string) => void;
  onDarkThemeChange: (value: boolean) => void;
  onMenuOpen: (value: boolean) => void;
};
export default function HomeMenu({
  isMenuOpen,
  isDarkTheme,
  onDarkThemeChange,
  onBackgroundChange,
  onMenuOpen,
}: HomeMenu) {
  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      onBackgroundChange(result.assets[0].uri);
    }
  };

  if (!isMenuOpen) return;
  else {
    return (
      <View className="flex flex-col h-full w-full p-5 items-center bg-slate-400 gap-4">
        <Pressable
          onPress={() => {
            onMenuOpen(!isMenuOpen);
          }}
        >
          <ChevronLeft />
        </Pressable>

        <View className="h-30 w-5/6 bg-white rounded-xl shadow-inherit">
          <View className="frex h-full w-full justify-center p-2">
            <View className="flex flex-row justify-between">
              <Text className="font-kiwi">ダークモード</Text>
              <Switch
                value={isDarkTheme}
                onValueChange={onDarkThemeChange}
              ></Switch>
            </View>
          </View>
        </View>
        <View className="h-30 w-5/6 bg-white rounded-xl shadow-inherit">
          <View className="frex h-full w-full justify-center p-2">
            <Pressable
              onPress={pickImageAsync}
              className="rounded-lg h-35 w-full p-4"
            >
              <Text className="text-center font-kiwi text-black">
                背景画像の変更
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  }
}
