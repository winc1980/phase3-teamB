import { Bold, Columns } from "lucide-react-native";
import { Text, View, Image, ScrollView} from "react-native";

export default function MyPage() {
  return (
  <ScrollView
  style={{
    marginVertical: 100
  }}>
    <View
      style={{borderWidth:1,borderColor:'#e4e9ee',margin:20,borderRadius:20}} className="">
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
          style={{width: 100, height: 100}}>
        </Image>
        <View style={{flex:1}}>
          <View style={{flex:1}}></View>
          <View style={{flex:1}}>
            <Text style={{flex:1,padding:10,fontSize:30,fontWeight:'bold'}}>増田響</Text>
          </View>
          <View style={{flex:1}}>
            <Text style={{flex:1,padding:10,fontSize:25,fontWeight:'bold'}}>ぶち上げ！</Text>
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
        <View style={{flex:1,borderWidth:2,borderColor:'#e4e9ee',borderRadius:15,marginRight:5,padding:10,alignItems:'center'}}>
          <Text style={{fontSize:18,fontWeight:'bold'}}>日記の数</Text>
          <Text style={{fontSize:30,fontWeight:'normal'}}>〇個</Text>
        </View>
        <View style={{flex:1,borderWidth:2,borderColor:'#e4e9ee',borderRadius:15,marginHorizontal:5,padding:10,alignItems:'center'}}>
          <Text style={{fontSize:18,fontWeight:'bold'}}>連続日数</Text>
          <Text style={{fontSize:30,fontWeight:'normal'}}>〇日</Text>
        </View>
        <View style={{flex:1,borderWidth:2,borderColor:'#e4e9ee',borderRadius:15,marginLeft:5,padding:10,alignItems:'center'}}>
          <Text style={{fontSize:18,fontWeight:'bold'}}>写真の数</Text>
          <Text style={{fontSize:30,fontWeight:'normal'}}>〇枚</Text>
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
            <Text style={{flex:1,borderWidth:2,borderColor:'#e4e9ee',borderRadius:8,margin:5,padding:10,}}>プロフィール編集</Text>
            <Text style={{flex:1,borderWidth:2,borderColor:'#e4e9ee',borderRadius:8,margin:5,padding:10,}}>通知設定</Text>
            <Text style={{flex:1,borderWidth:2,borderColor:'#e4e9ee',borderRadius:8,margin:5,padding:10,}}>プライバシー設定</Text>
          </View>
        </View>
        <View>
          <Text>アプリ</Text>
          <View>
            <Text style={{flex:1,borderWidth:2,borderColor:'#e4e9ee',borderRadius:8,margin:5,padding:10,}}>テーマ</Text>
            <Text style={{flex:1,borderWidth:2,borderColor:'#e4e9ee',borderRadius:8,margin:5,padding:10,}}>文字サイズ</Text>
            <Text style={{flex:1,borderWidth:2,borderColor:'#e4e9ee',borderRadius:8,margin:5,padding:10,}}>データのバックアップ</Text>
          </View>
        </View>
        <View>
          <Text>ヘルプ</Text>
          <View>
            <Text style={{flex:1,borderWidth:2,borderColor:'#e4e9ee',borderRadius:8,margin:5,padding:10,}}>よくある質問</Text>
            <Text style={{flex:1,borderWidth:2,borderColor:'#e4e9ee',borderRadius:8,margin:5,padding:10,}}>お問い合わせ</Text>
          </View>
        </View>
    </View>
  </ScrollView>
  )
}