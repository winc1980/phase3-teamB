import { Text, View } from "react-native";

export default function MyPage() {
  return (
    <View className="mt-48 gap-3 flex-1 items-center">
      <View className="items-center border-t-2 border-gray-400/70 pt-3 w-11/12">
        <Text>ユーザー情報</Text>
      </View>
      <View className="items-center border-t-2 border-gray-400/70 pt-3 w-11/12">
        <Text>設定</Text>
      </View>
      <View className="items-center border-t-2 border-gray-400/70 pt-3 w-11/12">
        <Text>お知らせ</Text>
      </View>
      <View className="items-center border-t-2 border-gray-400/70 pt-3 w-11/12">
        <Text>概要</Text>
      </View>
      <View className="items-center border-t-2 border-gray-400/70 pt-3 w-11/12">
        <Text>お問い合わせ</Text>
      </View>
      <View className="items-center border-t-2 border-gray-400/70 pt-3 w-11/12">
        <Text>X</Text>
      </View>
      <View className="items-center border-y-2 border-gray-400/70 py-3 w-11/12">
        <Text>YouTube</Text>
      </View>
    </View>
  )
}
