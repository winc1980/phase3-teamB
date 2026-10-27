import { useState } from 'react';
import { View, StyleSheet, Image, useColorScheme } from 'react-native';
import { Sun, ImagePlus, CircleX, Pencil, Tag, ChevronRight, SquareText } from 'lucide-react-native';
import * as ImagePicker from 'expo-image-picker';
import ImageViewer from '@/components/ui/image-viewer';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const MAX_DIARY_LENGTH = 1000;

export default function DiaryEntryPage () {
  // dark mode
  const isDark = ( useColorScheme() === 'dark' );
  const styles = defineStyle( isDark );
  const iconStyles = defineIconStyle( isDark );
  const inputTextStyles = defineInputTextStyle( isDark );

  const [ diary, setDiary ] = useState( '' );
  const [ selectedImage, setSelectedImage ] = useState< ImagePicker.ImagePickerAsset | undefined > ( undefined );
  
  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if( !result.canceled ) {
      setSelectedImage( result.assets[0] );
    } else {
      alert( 'You did not select any image.' );
    }
  };

  return (
    <View style = { styles.container } >
      {/* 一番上のもろもろ */}
      <View style = { styles.topContainer } >
        {/* 見た目調整の空白 */}
        <View style = { styles.leftTC } />

        {/* 日記を書く、の文字 */}
        <View style = { styles.middleTC } >
          <Text style = { styles.writeText } >
            日記を書く
          </Text>
        </View>

        {/* 日付とお天気アイコン */}
        <View style = { styles.rightTC } >
          <Text style = { styles.dateText } >
            4月12日（土）
          </Text>
          <Sun { ...iconStyles.sunnyIcon } /> 
        </View>
      </View>

      {/* 真ん中の写真のとこ */}
      <View style = { styles.middleContainer } >
        <ImageViewer selectedImage = { selectedImage }　setSelectedImage={ setSelectedImage } />
      </View>

      {/* 下のもろもろ */}
      <View style = { styles.bottomContainer } >
        {/* タイトル かこまれてるところ */}
        <View style = { styles.titleContainer } >
          <Pencil { ...iconStyles.titleIcon } />
          <Textarea style = { styles.titleText } { ...inputTextStyles.titleText } />
        </View>

        {/* カテゴリ 囲まれてるところ */}
        <View style = { styles.categoryContainer } >
          <Tag { ...iconStyles.categoryIcon } />
          <Text style = { styles.categoryName } >カテゴリ</Text>
          <View style = { styles.categorySpace } />
          <Text style = { styles.categoryNotChoosedText } >未設定</Text>
          <ChevronRight { ...iconStyles.categoryArrowIcon } />
        </View>

        {/* 日記 囲まれてるところ */}
        <View style = { styles.diaryContainer } >
          <SquareText { ...iconStyles.diaryIcon } />
          <View style = { styles.diaryContainer2 } >
            <Textarea
              style = { styles.diaryText } { ... inputTextStyles.diaryText } 
              value = { diary } onChangeText = { ( t ) => setDiary( t ) }
            />
            <Text style = { styles.diaryLengthText } >{ diary.length } / { MAX_DIARY_LENGTH }</Text>
          </View>
        </View>
          
        <Button style = { styles.entryButton } >
          <Text style = { styles.entryText } >投稿する</Text>
        </Button>
      </View>
    </View>
  );
}

const white = '#faf9f7';
const gray = '#e4e9ee'
const black = '#314e6f';
const grayerGray = '#b7c1cc';
const margin = 8;

const radius = 16;
const borderW = 2;

const iconW = 2;
const iconB = 3;

const fontS = 16;
const normalW = "400";
const boldW = "700"; 

function defineStyle( isDark: boolean ) {
  const textC = black;
  const backC = white;
  const borderC = gray; // 写真の背景にも応用
  const paleTextC = grayerGray;

  return StyleSheet.create({
    // 全体を包むビューの指定
    container: {
      flex: 1,
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      backgroundColor: backC, 
      padding: margin * 2,
    },

    // topC: 一番上のもろもろ
    topContainer: {
      flexDirection: 'row',
      margin: margin,
    },

    // topC: 空白　左に空白の空間を用意するためだけのもの
    leftTC: { 
      flex: 1/3,
      margin: margin,
    },

    // topC: 「日記を書く」の文字の入れ物
    middleTC: {
      justifyContent: 'center', // ど真ん中で
      alignItems: 'center', // よし
      margin: margin,
    },

    // topC: 「日記を書く」の文字本体
    writeText: {
      color: textC,
      fontSize: fontS,
      fontWeight: boldW,
      textAlign: 'center',
    },

    // topC: 日付とお天気アイコン
    rightTC: {
      flex: 1/3,
      flexDirection: 'row',
      alignItems: 'center', // rowなので上下　中央寄せ
      margin: margin,
    },

    // topC: 日付
    dateText : {
      color: textC,
      fontSize: fontS,
      fontWeight: normalW,
      textAlign: 'center',
    },

    // 中央　写真まわり
    // middleC: 写真とかを入れるコンテナ
    middleContainer: {
      width: '80%',
      height: '30%',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },

    // middleC: 写真そのもののスタイル
    selectedPhoto: {
      width: '60%',
      borderRadius: radius,
    },

    // middleC: 写真を選べる時の背景
    photoNotChoosedContainer: {
      width: '60%',
      aspectRatio: 16/9,
      margin: margin,
      backgroundColor: borderC,
      borderRadius: radius,
      justifyContent: 'center', // 中央に重ねて表示したいので
      alignItems: 'center', // どっちも中央寄せ
      position: 'relative',
    },
    
    // ボタンと写真の位置関係を整える係
    choosedPhotoContainer: {
      position: 'relative',
    },

    // middleC: 写真を選ぶボタンのPressable
    choosePhotoPressable: {
      justifyContent: 'center', // 中央に重ねて表示したいので
      alignItems: 'center', // どっちも中央寄せ
    },

    // middleC: 写真を選ぶボタンの白いマル
    choosePhotoCircle: {
      justifyContent: 'center', // 中央に重ねて表示したいので
      alignItems: 'center', // どっちも中央寄せ
      width: fontS * 3,
      height: fontS * 3,
      backgroundColor: backC,
      borderRadius: fontS*3/2,
      position: 'absolute',
      left: '50%',
      top: '50%',
    },

    // タイトル　カテゴリ　本文　投稿ボタン
    bottomContainer: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center', // columnなので左右　中央寄せ
      margin: margin,
    },

    // bottomC: タイトルのいれもの icon タイトルを入力　上に入力したタイトル
    titleContainer: {
      flex: 1,
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center', // rowなので上下
      padding: margin,
      margin: margin,
      gap: margin,
      borderRadius: radius,
      borderWidth: borderW,
      borderColor: borderC,
    },
    
    // bottomC: タイトル入力欄 入力前に表示するテキストなどはstyleに入らないので他の関数と併用
    titleText: {
      flex: 1,
      color: textC,
      fontSize: fontS,
      fontWeight: normalW,
      textAlign: 'left',
      // margin: margin,
    },

    // bottonC: カテゴリ　こんてな titleContainerとおなじ
    categoryContainer: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center', // rowなので上下
      padding: margin,
      margin: margin,
      gap: margin,
      borderRadius: radius,
      borderWidth: borderW,
      borderColor: borderC,
    },

    // bottomC : カテゴリ
    categoryName: {
      color: textC,
      fontSize: fontS,
      fontWeight: normalW,
      textAlign: 'left',
    },

    // bottomC: まんなかにスペースが必要
    categorySpace: {
      flex: 1,
    },

    // bottomC: 未設定の文字
    categoryNotChoosedText: {
      color: paleTextC,
      fontSize: fontS,
      fontWeight: normalW,
    },

    // アイコンとコンテナ２
    diaryContainer: {
      flex: 1,
      flexDirection: 'row',
      width: '100%',
      padding: margin * 2,
      margin: margin,
      gap: margin * 2,
      borderRadius: radius,
      borderWidth: borderW,
      borderColor: borderC,
    },

    // 本文と文字数
    diaryContainer2: {
      flex: 1,
      flexDirection: 'column',
    },

    diaryText: {
      flex: 1,
      color: textC,
      height: '100%',
      fontSize: fontS,
      fontWeight: normalW,
      textAlign: 'left',
      textAlignVertical: 'top',
      // margin: margin,
    },

    diaryLengthText: {
      color: paleTextC,
      fontSize: fontS,
      fontWeight: normalW,
      textAlign: 'right',
    },

    // 投稿ぼたん
    entryButton: {
      width: '50%',
      padding: margin,
      backgroundColor: textC,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: ( fontS + margin ),
    },

    entryText: {
      color: backC,
      fontSize: fontS,
      fontWeight: normalW,
      textAlign: 'center',
    }
  });
}

function defineIconStyle( isDark: boolean ) {
  const textC = black;
  const backC = white;
  const borderC = gray; // 写真の背景にも応用

  return {
    sunnyIcon: {
      size: fontS,
      color: textC,
      strokeWidth: iconW,
    },
    
    imagePlusIcon: {
      size: fontS*3/2,
      color: textC,
      strokeWidth: iconW,
    },

    circleXIcon: {
      size: fontS*3/2,
      color: textC,
      strokeWidth: iconW,
    },

    titleIcon: {
      // margin: margin, // 文字の表示に余裕を持ってほしい
      size: fontS,
      color: textC,
      strokeWidth: iconW,
    },

    categoryIcon: {
      // margin: margin, // 文字の表示に余裕を持ってほしい
      size: fontS,
      color: textC,
      strokeWidth: iconW,
    },

    categoryArrowIcon: {
      size: fontS,
      color: textC,
      strokeWidth: iconW,
    },

    diaryIcon: {
      size: fontS,
      color: textC,
      strokeWidth: iconW,
    },
  }
}

function defineInputTextStyle( isDark: boolean ) {
  const textC = black;
  const backC = white;
  const placeholderC = grayerGray;
  
  return {
    titleText: {
      placeholder: "タイトルを入力",
      placeholderTextColor: placeholderC,
    },
    
    diaryText: {
      maxLength: MAX_DIARY_LENGTH,
      placeholder: "今日のことを自由に書いてみましょう",
      placeholderTextColor: placeholderC,
      multiline: true,
    },

  }
}