import { View } from 'react-native';
import { cn } from '../../../lib/utils';
import { Sun, Pencil, Tag, ChevronRight, SquareText, MapPin } from 'lucide-react-native';
import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const MAX_DIARY_LENGTH = 1000;

const white = '#faf9f7';
const black = '#314e6f';
const gray = '#b7c1cc';
const red = '#E46B76';

// フォントに関して一括で指定したいものがあれば
const font = "text-sm";

type Props = {
        title: string;
        mandatory: boolean;
        iconName: string;
        placeholderText: string;
    } 
    &
    ( { 
        oneLine: true; 
        useButton: true; 
        onPush: () => void | undefined 
    } | { 
        oneLine: true; 
        useButton: false; 
    } | { 
        oneLine: false; 
        diary: string; 
        setDiary: ( diary: string ) => void 
    }
)

export default function InputCard( props: Props ) {
    const { title, mandatory, iconName, placeholderText, oneLine } = props;
    const styles = defineStyles( mandatory );
    return(
        <View { ...styles.outerContainer }>
            <View { ...styles.titleContainer } >
                <Text { ...styles.titleText } >{ title }</Text>
                <Text { ...styles.mandText } >{ mandatory ? "必須" : "任意" }</Text>
            </View>
            <Card { ...styles.inputCard } >
                { icon( iconName ) }
                { props.oneLine ? 
                    <Input 
                        placeholder = { placeholderText } 
                        { ...styles.inputText }
                    />
                    :
                    < View className = { "flex-col flex-1" }>
                        <Textarea 
                            placeholder = { placeholderText }
                            { ...styles.inputArea }
                            value = { props.diary } onChangeText = { ( t ) => props.setDiary( t ) }
                        />
                        <Text { ...styles.diaryLengthText } >{ props.diary.length } / { MAX_DIARY_LENGTH }</Text>
                    </View>
                }    
                { oneLine && props.useButton && 
                    <Button
                        onPress = { () => props.onPush }
                    />
                }
            </Card>
        </View>
    );
}

function icon( iconName: string ) {
    switch( iconName ) {
        case "Sun" : return <Sun { ...iconStyle }/>
        case "Pencil" : return <Pencil { ...iconStyle }/>
        case "Tag" : return <Tag { ...iconStyle }/>
        case "ChevronRight" : return <ChevronRight { ...iconStyle }/>
        case "SquareText" : return <SquareText { ...iconStyle }/>
        case "MapPin" : return <MapPin { ...iconStyle }/>
    }
}

function defineStyles( mandatory: Boolean ) {
    return {
        // 一番外
        outerContainer: {
            className: cn(
                // 見た目
                "w-full",
                // 子どもの位置、余白
                "flex-col p-2 gap-2"
            ),
        },

        // タイトル及び必須 / 任意
        titleContainer: {
            className: cn(
                // 子どもの位置、余白
                "flex-row gap-2"
            ),
        },

        // アイコン、入力欄、必要に応じてボタン
        inputCard: {
            className: cn(
                // 見た目
                "shadow-none border-2",
                // 子どもの位置、余白
                "flex-row p-4 gap-2"
            )
        },

        // -------------------------------------------------
        
        // タイトルのテキスト
        titleText: {
            className: cn(
                font,
                "font-bold",
            ),
        },

        // 必須 / 任意テキスト
        mandText: {
            className: cn(
                font,
                "font-bold",
            ),
            color: mandatory ? red : black,
        },

        // input text
        inputText: {
            className: cn(
                // 文字
                font,
                "text-left",
                // それ以外
                "flex-1",
                "border-0 shadow-none",
            ),
            color: black,
            placeholderColor: gray,
        },

        // input area
        inputArea: {
            className: cn(
                // 文字
                font,
                "text-left",
                // それ以外
                "h-[240px] sm:h-[240px]",
                "text-left",
                "border-0 shadow-none",
            ),
            color: black,
            placeholderColor: gray,
            maxLength: MAX_DIARY_LENGTH,
            multiline: true,
        },

        diaryLengthText: {
            className: cn(
                // font
                font,
                // それ以外
                "font-normal text-right"
            ),
            color: gray,   
        },
        // -----------------------------------------------------
        
        
    }
}

const iconStyle = {
    className: cn(
        "self-center",
    ),
    size: 16,
    color: black,
    strokeWidth: 2,
};