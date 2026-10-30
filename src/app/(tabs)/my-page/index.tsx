import { Bold } from "lucide-react-native";
import { Text, View, Image, ScrollView} from "react-native";

export default function MyPage() {
  return (
  <ScrollView
  style={{
    flex:1
  }}>
    <View
      style={{flex:3,borderWidth:1,borderColor:'brown',margin:20,borderRadius:20}}>
      <View
      style={{
        flex:1,
        flexDirection: 'row',
        padding:20
      }}>
        <Image
          source={{
            uri: 'https://kotonohaworks.com/free-icons/wp-content/uploads/kkrn_icon_user_1.png',
          }}
          style={{width: 250, height: 250, flex:1}}>
        </Image>
        <View style={{flex:2}}>
          <View style={{flex:1}}></View>
          <View style={{flex:1}}>
            <Text style={{flex:1,padding:10,fontSize:30,fontWeight:'bold'}}>名前</Text>
          </View>
          <View style={{flex:1}}>
            <Text style={{flex:1,padding:10,fontSize:25,fontWeight:'bold'}}>一言</Text>
          </View>
          <View style={{flex:1}}></View>
        </View>
      </View>
      <View
      style={{
        flex:1,
        flexDirection: 'row',
        padding:20
      }}>
        <View style={{flex:1,borderWidth:2,borderColor:'brown',borderRadius:25,margin:10,padding:10,alignItems:'center'}}>
          <Text style={{fontSize:40,fontWeight:'bold'}}>日記の数</Text>
          <Text style={{fontSize:40,fontWeight:'normal'}}>〇個</Text>
        </View>
        <View style={{flex:1,borderWidth:2,borderColor:'brown',borderRadius:25,margin:10,padding:10,alignItems:'center'}}>
          <Text style={{fontSize:40,fontWeight:'bold'}}>連続日数</Text>
          <Text style={{fontSize:40,fontWeight:'normal'}}>〇日</Text>
        </View>
        <View style={{flex:1,borderWidth:2,borderColor:'brown',borderRadius:25,margin:10,padding:10,alignItems:'center'}}>
          <Text style={{fontSize:40,fontWeight:'bold'}}>写真の数</Text>
          <Text style={{fontSize:40,fontWeight:'normal'}}>〇枚</Text>
        </View>
      </View>
    </View>
    <View
      style={{
        paddingHorizontal:20
      }}>
        <View>
          <Text>アカウント</Text>
          <View>
            <Text style={{flex:1,borderWidth:2,borderColor:'brown',borderRadius:8,margin:5,padding:10,}}>プロフィール編集</Text>
            <Text style={{flex:1,borderWidth:2,borderColor:'brown',borderRadius:8,margin:5,padding:10,}}>通知設定</Text>
            <Text style={{flex:1,borderWidth:2,borderColor:'brown',borderRadius:8,margin:5,padding:10,}}>プライバシー設定</Text>
          </View>
        </View>
        <View>
          <Text>アプリ</Text>
          <View>
            <Text style={{flex:1,borderWidth:2,borderColor:'brown',borderRadius:8,margin:5,padding:10,}}>テーマ</Text>
            <Text style={{flex:1,borderWidth:2,borderColor:'brown',borderRadius:8,margin:5,padding:10,}}>文字サイズ</Text>
            <Text style={{flex:1,borderWidth:2,borderColor:'brown',borderRadius:8,margin:5,padding:10,}}>データのバックアップ</Text>
          </View>
        </View>
        <View>
          <Text>ヘルプ</Text>
          <View>
            <Text style={{flex:1,borderWidth:2,borderColor:'brown',borderRadius:8,margin:5,padding:10,}}>よくある質問</Text>
            <Text style={{flex:1,borderWidth:2,borderColor:'brown',borderRadius:8,margin:5,padding:10,}}>お問い合わせ</Text>
          </View>
        </View>
    </View>

  </ScrollView>
  )
}