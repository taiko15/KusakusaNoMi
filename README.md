# 毎日の社会科 Discord Bot

毎日夕方5時（日本時間）に、指定したDiscordチャンネルへ社会科の問題を1問配信します。
問題、答え、短い解説を1通のメッセージにまとめています。

## 必要なもの

- Discordサーバー
- 配信用のDiscordテキストチャンネル
- Discord Webhook URL
- GitHub リポジトリ

## セットアップ

1. Discordで配信用チャンネルを開き、`チャンネルの編集` → `連携サービス` → `ウェブフック` を開きます。
2. `新しいウェブフック` を作成し、ウェブフックURLをコピーします。
3. このディレクトリをGitHubリポジトリへpushします。
4. GitHubリポジトリの `Settings` → `Secrets and variables` → `Actions` を開きます。
5. Repository secretとして `DISCORD_WEBHOOK_URL` を追加します。
6. `Actions` タブで `Send daily social studies question` を選び、`Run workflow` で初回配信を確認します。

以後、`.github/workflows/send-daily-question.yml` が毎日08:00 UTC（17:00 JST）に実行されます。

## 手元で確認する

送信せずに、その日のメッセージだけを表示できます。

```bash
npm run dry-run
```

実際に配信する場合は、Webhook URLを環境変数に設定します。

```bash
DISCORD_WEBHOOK_URL="https://discord.com/api/webhooks/..." npm run send
```

## 問題を追加・編集する

`src/questions.js` を編集してください。日付をもとに問題を順番に選ぶため、問題数を超えると先頭へ戻ります。

## 注意

- 配信対象は、Webhookを作成したDiscordチャンネルです。
- 特定の人だけが見られるようにする場合は、Discord側で非公開チャンネルの閲覧権限を設定してください。
- Webhook URLを知っている人はメッセージを投稿できます。公開しないでください。
- 答えを別の時刻に配信する構成ではありません。問題と答えを1通にまとめています。
