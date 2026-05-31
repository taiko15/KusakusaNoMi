import assert from "node:assert/strict";
import test from "node:test";
import {
  formatDailyQuestion,
  getDailyQuestion,
  getDateInTimeZone,
  getQuestionIndex
} from "../src/daily-question.js";
import { postToDiscord } from "../src/send-daily-question.js";

test("日本時間の日付を取得する", () => {
  const date = new Date("2026-05-30T15:30:00.000Z");
  assert.equal(getDateInTimeZone(date), "2026-05-31");
});

test("同じ日には同じ問題を選ぶ", () => {
  assert.equal(getQuestionIndex("2026-05-30"), getQuestionIndex("2026-05-30"));
  assert.notEqual(getQuestionIndex("2026-05-30"), getQuestionIndex("2026-05-31"));
});

test("配信用テキストに問題と回答を含める", () => {
  const text = formatDailyQuestion(getDailyQuestion(new Date("2026-05-30T00:00:00.000Z")));
  assert.match(text, /【毎日の社会科 2026-05-30】/);
  assert.match(text, /答え：/);
  assert.match(text, /解説：/);
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
