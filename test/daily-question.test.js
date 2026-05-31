import assert from "node:assert/strict";
import { generateKeyPairSync, sign } from "node:crypto";
import test from "node:test";
import {
  formatDailyQuestion,
  getDailyQuestion,
  getDateInTimeZone,
  getQuestionIndex
} from "../src/daily-question.js";
import { postToDiscord } from "../src/send-daily-question.js";
import {
  createAnswerResponse,
  isCorrectAnswer,
  verifyDiscordRequest
} from "../src/discord-interactions.js";

test("日本時間の日付を取得する", () => {
  const date = new Date("2026-05-30T15:30:00.000Z");
  assert.equal(getDateInTimeZone(date), "2026-05-31");
});

test("同じ日には同じ問題を選ぶ", () => {
  assert.equal(getQuestionIndex("2026-05-30"), getQuestionIndex("2026-05-30"));
  assert.notEqual(getQuestionIndex("2026-05-30"), getQuestionIndex("2026-05-31"));
});

test("配信用テキストに問題と回答方法を含め、正解は表示しない", () => {
  const text = formatDailyQuestion(getDailyQuestion(new Date("2026-05-30T00:00:00.000Z")));
  assert.match(text, /【毎日の社会科 2026-05-30】/);
  assert.match(text, /`\/answer`/);
  assert.doesNotMatch(text, /答え：/);
  assert.doesNotMatch(text, /解説：/);
});

test("Discord Webhook にテキストを送信する", async () => {
  let request;
  const fetchImpl = async (url, options) => {
    request = { url, options };
    return { ok: true };
  };

  await postToDiscord({
    webhookUrl: "https://discord.com/api/webhooks/test",
    text: "問題",
    fetchImpl
  });

  assert.equal(request.url, "https://discord.com/api/webhooks/test");
  assert.equal(request.options.method, "POST");
  assert.equal(request.options.headers["Content-Type"], "application/json");
  assert.deepEqual(JSON.parse(request.options.body), {
    content: "問題"
  });
});

test("Webhook URLがない場合は送信しない", async () => {
  await assert.rejects(() => postToDiscord({ text: "問題" }), /DISCORD_WEBHOOK_URL/);
});

test("Discord Webhook のエラー内容を表示する", async () => {
  const fetchImpl = async () => ({
    ok: false,
    status: 404,
    text: async () => "Unknown Webhook"
  });

  await assert.rejects(
    () => postToDiscord({ webhookUrl: "https://discord.com/api/webhooks/test", text: "問題", fetchImpl }),
    /Discord Webhook の送信に失敗しました \(404\): Unknown Webhook/
  );
});

test("表記を正規化して回答を判定する", () => {
  const question = { answer: "徳川家康" };
  assert.equal(isCorrectAnswer(question, " 徳川家康。 "), true);
  assert.equal(isCorrectAnswer(question, "源頼朝"), false);
});

test("登録した別解を正解として判定する", () => {
  const question = { answer: "満18歳以上", acceptedAnswers: ["18歳", "18歳以上"] };
  assert.equal(isCorrectAnswer(question, "１８歳"), true);
});

test("/answer の正解に解説を返す", () => {
  const response = createAnswerResponse(
    {
      type: 2,
      data: { name: "answer", options: [{ name: "answer", value: "徳川家康" }] }
    },
    new Date("2026-05-15T00:00:00.000Z")
  );

  assert.equal(response.type, 4);
  assert.match(response.data.content, /正解です/);
  assert.match(response.data.content, /徳川家康/);
  assert.match(response.data.content, /1603年/);
});

test("/answer の不正解は回答者だけに返す", () => {
  const response = createAnswerResponse(
    {
      type: 2,
      data: { name: "answer", options: [{ name: "answer", value: "源頼朝" }] }
    },
    new Date("2026-05-15T00:00:00.000Z")
  );

  assert.equal(response.type, 4);
  assert.match(response.data.content, /不正解/);
  assert.equal(response.data.flags, 64);
});

test("指定チャンネル以外からの回答は判定しない", () => {
  const response = createAnswerResponse(
    {
      type: 2,
      channel_id: "other-channel",
      data: { name: "answer", options: [{ name: "answer", value: "徳川家康" }] }
    },
    new Date("2026-05-15T00:00:00.000Z"),
    "quiz-channel"
  );

  assert.match(response.data.content, /問題配信用チャンネル/);
  assert.equal(response.data.flags, 64);
});

test("Discordから届いたリクエストの署名を検証する", async () => {
  const { privateKey, publicKey } = generateKeyPairSync("ed25519");
  const timestamp = "1710000000";
  const body = '{"type":1}';
  const signature = sign(null, Buffer.from(timestamp + body), privateKey).toString("hex");
  const publicKeyHex = publicKey.export({ format: "der", type: "spki" }).subarray(-32).toString("hex");

  assert.equal(await verifyDiscordRequest({ body, signature, timestamp, publicKey: publicKeyHex }), true);
  assert.equal(await verifyDiscordRequest({ body: '{"type":2}', signature, timestamp, publicKey: publicKeyHex }), false);
  assert.equal(await verifyDiscordRequest({ body, signature: "invalid", timestamp, publicKey: publicKeyHex }), false);
});
