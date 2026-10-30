import { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Sun, Pencil, Tag, ChevronRight, SquareText } from 'lucide-react-native';
import * as ImagePicker from 'expo-image-picker';
import ImageViewer from '@/components/ui/image-viewer';
import { cn } from '../../../lib/utils';

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
  const [ diary, setDiary ] = useState( '' );
  const [ selectedImage, setSelectedImage ] = useState< ImagePicker.ImagePickerAsset | undefined > ( undefined );
  
  return (
    <ScrollView { ...styles.container } >
      {/* 一番上のもろもろ */}
      <View { ...styles.topContainer } >
        {/* 見た目調整の空白 */}
        <View { ...styles.leftTC } />

        {/* 日記を書く、の文字 */}
        <View { ...styles.middleTC } >
          <Text { ...styles.writeText } >
            日記を書く
          </Text>
        </View>

        {/* 日付とお天気アイコン */}
        <View { ...styles.rightTC } >
          <Text { ...styles.dateText } >
            4月12日（土）
          </Text>
          <Sun { ...styles.sunnyIcon } /> 
        </View>
      </View>

      {/* 真ん中の写真のとこ */}
      <View { ...styles.middleContainer } >
        <View
          className = "flex-row w-3/5"
        >
          <ImageViewer selectedImage = { selectedImage } setSelectedImage={ setSelectedImage } />
        </View>
      </View>

      {/* 下のもろもろ */}
      <View { ...styles.bottomContainer } >
        {/* タイトル かこまれてるところ */}
        <Card { ...styles.titleContainer } >
          <Pencil { ...styles.titleIcon } />
          <Textarea { ...styles.titleText } />
        </Card>

        {/* カテゴリ 囲まれてるところ */}
        <Card { ...styles.categoryContainer } >
          <Tag { ...styles.categoryIcon } />
          <Text { ...styles.categoryName } >カテゴリ</Text>
          <View { ...styles.categorySpace } />
          <Text { ...styles.categoryNotChoosedText } >未設定</Text>
          <ChevronRight { ...styles.categoryArrowIcon } />
        </Card>

        {/* 日記 囲まれてるところ */}
        <Card { ...styles.diaryContainer } >
          <SquareText { ...styles.diaryIcon } />
          <View { ...styles.diaryContainer2 } >
            <Textarea
              { ...styles.diaryText } 
              value = { diary } onChangeText = { ( t ) => setDiary( t ) }
            />
            <Text { ...styles.diaryLengthText } >{ diary.length } / { MAX_DIARY_LENGTH }</Text>
          </View>
        </Card>
          
        <Button { ...styles.entryButton } >
          <Text { ...styles.entryText } >投稿する</Text>
        </Button>
      </View>
    </ScrollView>
  );
}

const white = '#faf9f7';
const black = '#314e6f';
const gray = '#b7c1cc';

const textC = black;
const backC = white;
const paleTextC = gray;
const placeholderC = gray;

const styles = {
  // containers
  container: {
    className: cn(
      // 見た目
      "flex-1 flex-col",
      "w-full h-full",
      "p-4",
    ),
    backGroundColor: backC,
  },

  // topC: 一番上のもろもろ
  topContainer: {
    className: "flex-row w-full m-2"
  },

  // topC: 空白　左に空白の空間を用意するためだけのもの
  leftTC: { 
    className: "w-1/3 m-2"
  },

  // topC: 「日記を書く」の文字の入れ物
  middleTC: {
    className: "flex-1 justify-center items-center m-2"
  },

  // topC: 日付とお天気アイコン
  rightTC: {
    className: "w-1/3 flex-row items-center m-2"
  },

  // 中央　写真まわり
  // middleC: 写真とかを入れるコンテナ
  middleContainer: {
    className: cn(
      // 見た目
      "w-full",
      // 子どもの位置
      "flex-row justify-center items-center"
    )
  },

  // タイトル　カテゴリ　本文　投稿ボタン
  bottomContainer: {
    className: cn(
      // 見た目
      "flex-1",
      // 子どもの位置
      "flex-col justify-center m-2"
    )
  },

  // bottomC: タイトルのいれもの icon タイトルを入力　上に入力したタイトル
  titleContainer: {
    className: cn(
      // 見た目
      "w-full m-2 p-4 gap-4",
      // 子どもの位置
      "flex-row items-center"
    ),
  },
  
  // bottonC: カテゴリ　こんてな titleContainerとおなじ
  categoryContainer: {
    className: cn(
      // 見た目
      "w-full m-2 p-4 gap-4",
      // 子どもの位置
      "flex-row items-center"
    ),
  },

  // bottomC: まんなかにスペースが必要
  categorySpace: {
    className: "flex-1"
  },

  // アイコンnoコンテナ２
  diaryContainer: {
    className: cn(
      // 見た目
      "flex-1 w-full m-2 p-4 gap-4",
      // 子どもの位置
      "flex-row "
    ),
  },

  // 本文と文字数
  diaryContainer2: {
    className: "flex-1 flex-col",
  },

  // 投稿ぼたん
  entryButton: {
    className: cn(
      // 見た目
      "w-1/2 p-2 round-full",
      // 子どもの場所
      "justify-center items-center"
    ),
    backgroundColor: textC,
  },

  // ------------------------------------------------------------------
  // text
  // topC: 「日記を書く」の文字本体
  writeText: {
    className: cn(
      // font size
      "text-sm",
      // それ以外
      "flex-1 font-bold text-top text-center"
    ),
    color: textC,
  },

  // topC: 日付
  dateText : {
    className: cn(
      // fontsize
      "text-sm",
      // それ以外
      "font-normal text-right"
    ),
    color: textC,
  },

  // bottomC: タイトル入力欄 入力前に表示するテキストなどはstyleに入らないので他の関数と併用
  titleText: {
    className: cn(
      // フォント
      "text-sm",
      // 見た目
      "flex-1 border-0 shadow-none",
      "font-normal text-left"
    ),
    color: textC,
    placeholder: "タイトルを入力",
    placeholderTextColor: placeholderC,
  },
  
  // bottomC : カテゴリ
  categoryName: {
    className: cn(
      // font
      "text-sm",
      // それ以外
      "font-normal text-left"
    ),
    color: textC,
  },

  // bottomC: 未設定の文字
  categoryNotChoosedText: {
    className: cn(
      // font
      "text-sm",
      // それ以外
      "font-normal"
    ),
    color: paleTextC,
  },

  diaryText: {
    className: cn(
      // font
      "text-sm",
      // それ以外
      "flex-1 h-full",
      "font-normal",
      "text-left text-top",
      "border-0 shadow-none"
    ),
    color: textC,
    maxLength: MAX_DIARY_LENGTH,
    placeholder: "今日のことを自由に書いてみましょう",
    placeholderTextColor: placeholderC,
    multiline: true,
  },

  diaryLengthText: {
    className: cn(
      // font
      "text-sm",
      // それ以外
      "font-normal text-right"
    ),
    color: paleTextC,   
  },

  entryText: {
    className: cn(
      // font
      "text-sm",
      // それ以外
      "font-normal items-center"
    ),
    color: backC
  },

  // --------------------------------------------------------------
  // icons
  sunnyIcon: {
    size: 16,
    color: textC,
    strokeWidth: 2,
  },
  
  imagePlusIcon: {
    size: 16 * 3 / 2,
    color: textC,
    strokeWidth: 2,
  },

  circleXIcon: {
    size: 16*3/2,
    color: textC,
    strokeWidth: 2,
  },

  titleIcon: {
    // margin: margin, // 文字の表示に余裕を持ってほしい
    size: 16,
    color: textC,
    strokeWidth: 2,
  },

  categoryIcon: {
    // margin: margin, // 文字の表示に余裕を持ってほしい
    size: 16,
    color: textC,
    strokeWidth: 2,
  },

  categoryArrowIcon: {
    size: 16,
    color: textC,
    strokeWidth: 2,
  },

  diaryIcon: {
    size: 16,
    color: textC,
    strokeWidth: 2,
  },
}
