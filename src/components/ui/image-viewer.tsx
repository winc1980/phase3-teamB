import { View } from 'react-native';
import { Image } from 'expo-image';
import { ImagePlus, CircleX } from 'lucide-react-native';
import { cn } from '../../lib/utils';

import * as ImagePicker from 'expo-image-picker';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

/* これを使うときはこの段落をぜーーーーーーーーーーったい厳守！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
 * この部品を使うなら「横の長さの指定付きのコンテナ」で包んだ上で使うこと、じゃないと写真表示されません！！！！！！！！！！！！！！！
 * あと、これの親となるタグはflexdirectionがrowであるという前提のもとでつくってます　columnにした場合どうなるかは知りません　たぶん壊れます
 * 1 / heightRatioを求めるので heightRatioに０を入れると壊れます undefinedは大丈夫です
 * 
 * Propsの写真がUndefinedである場合、写真未選択とみなして選択画面のHTMLをかえす
 * 写真はページ側でUseStateで所持、こいつにはパラメータとしてuseStateで選言したset関数を渡す
 * 
 * (後々正方形に写真を切り取りたい場合に備えて)
 * 横幅の指定がある場合、写真はその長さに合わせてスケールを変える
 * 高さの指定として与えるのは横幅を１とした時の比率。
 * 指定がなければ読み込んだ写真のデフォルトそのままに、１が来たら正方形になる。
 * 
 * 入力画面で問題なく動くなら　都合のいい感じに改変しちゃって大丈夫です
 */

// 選択した画像は、これを使うページ側でuseStateの変数として管理してください　部品は情報を保持しません
type Props = {
    // ユーザーが選んだイメージ　未選択時は無視
    selectedImage?: ImagePicker.ImagePickerAsset;
    // useStateのset関数
    setSelectedImage: ( selectedImage: ImagePicker.ImagePickerAsset | undefined ) => void;
    // 横幅を１とした時の縦の比率　ちなみにこいつはmaxRatioの制約を受けません
    heightRatio?: number;
};

export default function ImageViewer({ selectedImage, setSelectedImage, heightRatio: heightRatio }: Props ) {
    const styles = defineStyles( selectedImage, heightRatio );

    if( selectedImage !== undefined ) {
        return (
            <View { ...styles.choosedPhotoContainer }>
                <Image source = { selectedImage.uri } { ...styles.choosedPhoto } />
                <Button 
                    { ...styles.choosePhotoButton } 
                    onPress = { () => setSelectedImage( undefined ) }
                >
                    <View { ...styles.buttonCircle } >
                        <CircleX { ...styles.circleXIcon } />
                    </View>
                </Button>
            </View>
        );
    }

    // 以降、未選択時のためのコード
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

    // 写真未選択時の画面、ボタン付き
    return (
        <Card { ...styles.photoNotChoosedContainer } >
            <Button 
                { ...styles.buttonCircle }
                onPress = { pickImageAsync }
            >
                <ImagePlus { ...styles.imagePlusIcon } />
            </Button>
        </Card>
    );
}

// 許容できる写真の細長さは縦長横長ともに 1:maxRatioまで　1より大きい値の方が分かりやすい
const MAX_RATIO = 2;

// global.cssができたら消す
const white = '#faf9f7';
const gray = '#e4e9ee'
const black = '#314e6f';

// global.cssができたらそこからひっぱってくる
const iconW = 2;

const textC = black;
const backC = white;
const borderC = gray; // 写真の背景にも応用

// 毎回描写時に呼び出す
function defineStyles( selectedImage: ImagePicker.ImagePickerAsset | undefined, heightRatio?: number | undefined ) {
    let ratio;

    if( selectedImage !== undefined ) {
        ratio = selectedImage.width / selectedImage.height;
        
        if( heightRatio === undefined ) {
            // 写真が縦長の場合
            if( ratio <= 1 ) {
                // 許容される縦長さは縦横比がmaxRatio:1まで
                ratio = Math.max( ratio, 1 / MAX_RATIO );
            } else 
            // 写真が横長の場合
            {
                // 許容される横長さは縦横比が1:maxRatioまで
                ratio = Math.min( ratio, MAX_RATIO );
            }
        } else {
            ratio = 1 / heightRatio;
        }
    } else {
        // すまほの横長写真のデフォルトの比率
        ratio = 16 / 9;
    }

    return {
        // ボタンと写真の位置関係を整え、写真を収める形を決める係
        choosedPhotoContainer: {
            className: cn( 
                // そもそもこいつが親いっぱいに広がっている必要がある
                "flex-1 w-100 h-100",
            ),

            style: {
                // 写真の比率を決める
                aspectRatio: ratio,
                flex: 1,
            },
        },

        // 表示する写真そのもののスタイル　形は上のやつが決めるのでひたすらでっかくあればよい contentfitは初期値が'cover'なのでFlexだけ
        choosedPhoto: {
           style: {
            flex:1,
           }
        },

        // 写真を選ぶボタン　ボタン関連で一番外側のタグ
        choosePhotoButton: {
            className: cn( 
                // こいつ自体の位置関連 topとrightを０で右上に位置するよう指定
                "absolute top-0 right-0",

                // 下位タグの位置指定
                "justify-center items-center m-2"
            ),
        },

        // 未選択時に写真の代替として表示する背景
        photoNotChoosedContainer: {
            className: cn(
                "flex-1 p-0 shadow-none border-0",
                // 下位のタグの配置に関する指定
                "justify-center items-center"
            ),

            style: {
                aspectRatio: ratio,
                backgroundColor: borderC,
            },        
        },

        // ボタンの白いマル
        buttonCircle: {
            className: cn(
                // 見た目 Buttonには初期値があるらしので抹消
                "p-0 size-16 rounded-full",
                //　下位のタグの位置に関する指定　つまりはアイコンの指定
                "justify-center items-center",
            ),

            style: {
                backgroundColor: backC,
            },
        },

        // 写真選択済み時のボタンのアイコン
        circleXIcon: {
            className: cn( 
                "size-8"
            ),
            color: textC,
            strokeWidth: iconW,
        },

        // 未選択時のボタンのアイコン
        imagePlusIcon: {
            className: cn( 
                "size-8"
            ),
            color: textC,
            strokeWidth: iconW,
        },
    };
}
