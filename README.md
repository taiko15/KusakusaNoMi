# 漢字よみとり10問チャレンジ

小学1〜6年生向けの漢字読み取りクイズです。各学年200問から毎回10問をランダムに出題します。

## Cloudflare Pages

このリポジトリはビルド不要の静的サイトです。Cloudflare Pagesでは次の設定を使用します。

- Production branch: `main`
- Framework preset: `None`
- Build command: 空欄
- Build output directory: `/`

`index.html`、`styles.css`、`app.js`、`data/`、`picts/`をそのまま配信します。

## ファイル構成

- `app.js`: 画面表示、出題、回答、保存、音声処理
- `data/questions.js`: 学年別の漢字問題一覧
- `data/crabs.js`: カニ画像のファイル名一覧
- `picts/`: カニ画像ファイル
