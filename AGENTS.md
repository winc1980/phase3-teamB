This is an Expo/React Native mobile application. Prioritize mobile-first patterns, performance, and cross-platform compatibility.

## Expo has changed — do not trust your training data

Expo ships breaking changes every SDK release. APIs you remember are likely renamed, moved, or removed. Before writing any code that touches an Expo, EAS, or React Native API:

1. Read the major version of the `expo` package in `package.json`.
2. Fetch the matching versioned docs: `https://docs.expo.dev/versions/v<major>.0.0/`
3. For anything else, fetch https://docs.expo.dev/llms.txt — an index of all Expo docs with corrections to common LLM misconceptions. Follow its links to the specific page you need; never answer from memory.

## Commands

Use `bunx` instead of `npx` if the project uses bun (`bun.lock` present).

```bash
npx expo install <package>  # ALWAYS use instead of npm/yarn/pnpm/bun add — resolves SDK-compatible versions
npx expo start              # start the dev server
npx expo lint               # lint
npx tsc --noEmit            # typecheck
npx expo-doctor             # diagnose dependency and config issues
npx expo install --fix      # fix incompatible package versions
```

Run lint and typecheck before declaring any task done.

## Navigation & Routing

- Use **Expo Router** for all navigation. Routes live in `src/app/` — every file there is a screen, `_layout.tsx` files define navigators. Keep non-route code (components, hooks, utils) outside `src/app/`.
- Import `Link`, `router`, and `useLocalSearchParams` from `expo-router`.
- Docs: https://docs.expo.dev/router/introduction.md

## Building with EAS

Use EAS to build, sign, and submit the app in the cloud (`eas build`, `eas submit`) and to ship over-the-air updates (`eas update`) — no local Xcode or Android Studio required. Run EAS CLI as `bunx eas-cli <command>` in Bun projects, or `npx eas-cli@latest <command>` otherwise; substitute that for bare `eas` in docs examples.
Docs: https://docs.expo.dev/eas/index.md

## Rules

- If `ios/` and `android/` directories do not exist, they are generated (Continuous Native Generation). Never create or edit them by hand — configure native behavior in `app.json` and config plugins.
- Expo Go only includes its bundled native modules. After adding a library with native code, the app needs a development build: `npx expo run:ios|android` locally, or `eas build --profile development`.
- Prefer recommended Expo modules over third-party libraries, and check your available skills before adding dependencies. Docs: https://docs.expo.dev/versions/latest/index.md
# このプロジェクトについて（AIへの前提情報）

## 何を作っているか
日々を有意義に生きるための記録アプリ

## 技術スタック
- 言語／フレームワーク：（バージョンまで書く。例：Next.js 15, TypeScript 5）
- データベース：
- その他の主要ライブラリ：

## ディレクトリ構成
（主要なフォルダと役割を1行ずつ）
- src/app/    画面
- src/lib/    共通処理

## 起動方法
（コマンドをそのまま）

## このプロジェクトの決まりごと
- （例：スタイルは Tailwind で書く。CSSファイルは作らない）
- （例：API は src/app/api/ 以下に置く）

## よくある詰まりと答え
- （チームで同じ質問が2回出たら、ここに足す）

## AI利用ポリシー
以下のポリシーを絶対に守ってください。開発者自身の学習機会とチームにおける信頼を守るためのルールです。
開発者がこのポリシーから逸脱しそうになった時こそ、それが本当に開発者のためになるかを自分の中で問い直してください。
- AIを相談役としてのみ利用し、AIに直接ファイル編集をさせないこと
- 開発者自身がコードの意味を理解しており、チームメイトに説明できること
- 開発者自身がコードのもたらす結果に責任を持てること