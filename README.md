# 毎日の社会科 Discord Bot

毎日夕方5時（日本時間）に、指定したDiscordチャンネルへ社会科の問題を1問配信します。
回答者が `/answer` コマンドを使うと、正解・不正解を返します。
正解の場合は短い解説も表示します。

## 必要なもの

- Discordサーバー
- 配信用のDiscordテキストチャンネル
- Discord Webhook URL
- Discord Application
- Cloudflare Workers
- GitHub リポジトリ

## 毎日の問題配信をセットアップする

1. Discordで配信用チャンネルを開き、`チャンネルの編集` → `連携サービス` → `ウェブフック` を開きます。
2. `新しいウェブフック` を作成し、ウェブフックURLをコピーします。
3. このディレクトリをGitHubリポジトリへpushします。
4. GitHubリポジトリの `Settings` → `Secrets and variables` → `Actions` を開きます。
5. Repository secretとして `DISCORD_WEBHOOK_URL` を追加します。
6. `Actions` タブで `Send daily social studies question` を選び、`Run workflow` で初回配信を確認します。

以後、`.github/workflows/send-daily-question.yml` が毎日08:00 UTC（17:00 JST）に実行されます。

## 回答機能をセットアップする

回答機能にはCloudflare Workersを使います。OpenAI APIや常時起動サーバーは不要です。

1. [Discord Developer Portal](https://discord.com/developers/applications) でApplicationを作成します。
2. `General Information` にある `PUBLIC KEY` と `APPLICATION ID` を控えます。
3. `Bot` でBotを作成し、トークンを控えます。
4. `Installation` でサーバーへのインストールリンクを作り、対象サーバーへ追加します。
5. [Cloudflare Workers](https://dash.cloudflare.com/) でWorkerを作成し、このリポジトリを接続してデプロイします。
6. Workerの変数として `DISCORD_PUBLIC_KEY` と `DISCORD_CHANNEL_ID` を追加します。
7. Discord Developer Portalの `General Information` に戻り、`INTERACTIONS ENDPOINT URL` にWorkerのURLを設定します。
8. 次の環境変数を設定して、`npm run register-command` を1回実行します。

```bash
DISCORD_APPLICATION_ID="..." \
DISCORD_BOT_TOKEN="..." \
DISCORD_GUILD_ID="..." \
npm run register-command
```

`DISCORD_GUILD_ID` は対象DiscordサーバーのIDです。`DISCORD_CHANNEL_ID` は問題配信用チャンネルのIDです。
Discordで開発者モードを有効にし、サーバー名またはチャンネル名を右クリックして取得します。

登録後、Discordで `/answer` を選び、その日の問題への回答を入力してください。

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
- Discord Botのトークンは公開しないでください。
- `/answer` は `DISCORD_CHANNEL_ID` で指定した非公開チャンネルだけで回答を判定します。
- AIは使わず、正解文字列と `acceptedAnswers` に登録した別解を照合します。
- 問題や別解は `src/questions.js` で編集できます。
