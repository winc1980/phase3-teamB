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

## Development

画面や機能を変更する場合は、`app` ディレクトリ内のファイルを編集してください。

このプロジェクトでは **Expo Router** を採用しており、ファイル構成に基づいて画面のルーティングを管理します。

## Other Development Options

用途に応じて、以下の環境でも開発・動作確認ができます。

- [Development Builds](https://docs.expo.dev/develop/development-builds/introduction/) — ネイティブ機能を含む開発環境
- [Android Emulator](https://docs.expo.dev/workflow/android-studio-emulator/) — Android の仮想端末
- [iOS Simulator](https://docs.expo.dev/workflow/ios-simulator/) — iOS のシミュレーター（macOS が必要）
- [Expo Go](https://expo.dev/go) — 手軽に実機で動作確認できるアプリ

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
