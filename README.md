# Expo App

`create-expo-app` で作成した Expo プロジェクトです。

## Getting Started

### 1. Install dependencies

プロジェクトのルートディレクトリで依存関係をインストールします。
> [!WARNING]
> wslだとうまく動きません。気を付けてください
```bash
bun install
```

### 2. Set up your smartphone

スマートフォンに **Expo Go** をインストールしてください。

<details>
<summary>Expo Go のインストール</summary>

- **Android:** [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)
- **iOS:** [App Store](https://itunes.apple.com/app/apple-store/id982107779)

</details>

> [!NOTE]
> **iPhone ユーザーへ**
>
> iOS で Expo Go を利用するため、必要に応じて [Expo アカウント](https://expo.dev/accounts) を作成し、ターミナルからログインしてください。

```bash
bun run login
```

### 3. Start the development server

```bash
bun run start
```
起動後、ターミナルに表示される QR コードを Expo Go で読み取ると、アプリを実機で確認できます。

エミュレータを使いたい場合androidなら Shift + a、iosなら Shift + iで機種を選べます。

## Development

画面や機能を変更する場合は、`app` ディレクトリ内のファイルを編集してください。

このプロジェクトでは **Expo Router** を採用しており、ファイル構成に基づいて画面のルーティングを管理します。

## Other Development Options

用途に応じて、以下の環境でも開発・動作確認ができます。

- [Development Builds](https://docs.expo.dev/develop/development-builds/introduction/) — ネイティブ機能を含む開発環境
- [Android Emulator](https://docs.expo.dev/workflow/android-studio-emulator/) — Android の仮想端末
- [iOS Simulator](https://docs.expo.dev/workflow/ios-simulator/) — iOS のシミュレーター（macOS が必要）
- [Expo Go](https://expo.dev/go) — 手軽に実機で動作確認できるアプリ

### Install emulator(optional)

自分のPC上でスマホを起動したい、特に自分のスマホがiosでAndroidでの挙動を確認したい人は以下の手順にしたがってエミュレータを設定して下さい。上のリンクの内容をよりわかりやすくしたものです。(iosをPCでエミュレートしたい場合はMac bookが必要なので、PCがWindowsかつスマホがAndoroidの人はやる必要はないです)

### Androidエミュレータの設定

1. [Android studio](https://developer.android.com/studio)のインストールします。
  - Macユーザーの場合は自分のMacのチップに合った方を選んでください。(Apple SiliconかIntel)
2. インストーラを実行し、初回起動時のセットアップウィザードでは「Standard」を選択します。
3. ライセンス同意画面で各項目を「Accept」して Finishを押します。
4. Android Studioのウェルカム画面で「More Actions → SDK Manager」を開きます。

画面上部の「Android SDK Location」に表示されるパスは次の手順で使うのでメモしておいてください。

#### Windowsユーザーの場合

1. スタートメニューで「環境変数」と検索 →「システム環境変数の編集」を開き、「環境変数」をクリックする
2. 上段の「ユーザー環境変数」で 「新規」
  - 変数名：ANDROID_HOME
  - 変数値：C:\Users\（ユーザー名）\AppData\Local\Android\Sdk（さっきメモしたパス）
3. 同じく上段の「Path」を選んで「編集」→「新規」で以下を追加
  - %ANDROID_HOME%\platform-tools
  - %ANDROID_HOME%\emulator
4. ターミナルやVScodeを再起動して反映させます。

#### Macユーザーの場合

1. ターミナルで``` echo $SHELL ```を実行し、``` /bin/zsh ```なら
```bash
  nano ~/.zshrc
```
2. 末尾に以下を追記します。
```bash
  export ANDROID_HOME=$HOME/Library/Android/sdk
  export PATH=$PATH:$ANDROID_HOME/emulator:$ANDROID_HOME/platform-tools
```
3. 反映させます。
```bash
  source ~/.zshrc
```
両OS以下でadbのバージョンが出ればOKです!
```bash
  adb --version
  emulator -list-avds
```

仮想デバイスの作成
1. Android Studioのウェルカム画面で 「More Actions → Virtual Device Manager」を押します。
2. 「Create Virtual Device」（または「＋」）をクリックします。
3. カテゴリ「Phone」から機種を選択します。（Play Store マーク付きのものが無難です）
4. システムイメージは 「Recommended」タブの最新安定版を選び、横の ↓ でダウンロードします。
5. 名前はそのままで Finishを押します。
6. 一覧に出たデバイスの ▶ボタンで起動し、ホーム画面が出れば成功です。

### IOSエミュレータの設定(Macユーザー専用)

1. App StoreからXcodeをダウンロード
2. Xcodeを起動し、追加のコンポーネントのインストールを要求されたら許可します。
3. 画面の一番上のバーからリンゴのマークの一個右のXcodeをクリックしてsettingを開き、最新のiosが入ってなかったらGetでダウンロード
4. 同じくsettingsのLocationsからCommand Line ToolsをXcodeにします。
5. ターミナルでライセンスに同意します。
```bash
  sudo xcodebuild -license accept
```
6. Watchmanをインストールします。
```bash
brew install watchman
```

## Additional Setup

必要に応じて、以下のツールを導入できます。

| ツール | コマンド・ドキュメント |
| --- | --- |
| ESLint | `npx expo lint` |
| Unit Testing | [Testing Guide](https://docs.expo.dev/develop/unit-testing/) |
| TypeScript | [TypeScript Guide](https://docs.expo.dev/guides/typescript/) |

## Resources

- [Expo Documentation](https://docs.expo.dev/)
- [Expo Guides](https://docs.expo.dev/guides/)
- [Learn Expo Tutorial](https://docs.expo.dev/tutorial/introduction/)
- [Expo on GitHub](https://github.com/expo/expo)
- [Expo Discord](https://chat.expo.dev)
