type Category = 'class' | 'food' | 'transportation' | 'work' | 'cafe' | 'shopping' | 'friends' | 'joy' | 'sports' | 'other';

export type Entry = {
  id: string;
  title: string;
  content: string;
  category: Category;
  imgSource: string;
}

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=800&q=80&auto=format&fit=crop`;

// すべて同じ1日の出来事（時系列順）
export const entries: Entry[] = [
  {
    id: '1',
    title: '朝ラン3km',
    content: '珍しく6時半に目が覚めたので近所を軽く走った。息は上がったけど、頭がスッキリした状態で1日を始められた。',
    category: 'sports',
    imgSource: unsplash('1461896836934-ffe607ba8211'),
  },
  {
    id: '2',
    title: '電車で読書',
    content: '通学中に電車が10分遅延。焦りかけたけど、積んでた本を一気に読み進められたので結果オーライ。',
    category: 'transportation',
    imgSource: unsplash('1474487548417-781cb71495f3'),
  },
  {
    id: '3',
    title: '線形代数の小テスト',
    content: '1限の小テストで固有値の問題が出た。昨日の夜に復習したところがそのまま出て、ちゃんと解けた。',
    category: 'class',
    imgSource: unsplash('1524178232363-1fb2b075b655'),
  },
  {
    id: '4',
    title: '学食のカツカレー',
    content: '2限終わりに学食へ。朝走ったせいかいつも以上にお腹が空いていて、カツカレーが染みた。',
    category: 'food',
    imgSource: unsplash('1504674900247-0877df9cc836'),
  },
  {
    id: '5',
    title: '空きコマにカフェ',
    content: '3限が休講になったので近くのカフェでレポートを進めた。コーヒー1杯で2時間粘ってしまった。',
    category: 'cafe',
    imgSource: unsplash('1495474472287-4d71bcdd2085'),
  },
  {
    id: '6',
    title: '遠くの山並み',
    content: 'カフェから戻る途中、空気が澄んでいて遠くの山まで見えた。思わず立ち止まって写真を撮った。',
    category: 'other',
    imgSource: unsplash('1506905925346-21bda4d32df4'),
  },
  {
    id: '7',
    title: '夕方からインターン',
    content: '授業後にオンラインでインターンの作業。先週から詰まっていたバグの原因がやっと分かった。',
    category: 'work',
    imgSource: unsplash('1498050108023-c5249f4df085'),
  },
  {
    id: '8',
    title: 'PRがマージされた',
    content: 'そのバグ修正のPRがレビューを通ってマージされた。小さな一歩だけど、今日はちょっと誇らしい。',
    category: 'joy',
    imgSource: unsplash('1513151233558-d860c5398176'),
  },
  {
    id: '9',
    title: '駅ビルでコート',
    content: '急に寒くなってきたので帰りに駅ビルへ。悩んだ末、結局いつもと同じような色のコートを選んでしまった。',
    category: 'shopping',
    imgSource: unsplash('1441986300917-64674bd600d8'),
  },
  {
    id: '10',
    title: 'サークルのみんなとご飯',
    content: '夜はサークルのメンバーと合流してご飯。アプリの方向性について熱く語り合って、気づいたら終電ギリギリだった。',
    category: 'friends',
    imgSource: unsplash('1529156069898-49953e39b3ac'),
  },
];