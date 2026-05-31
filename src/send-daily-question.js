import { formatDailyQuestion, getDailyQuestion } from "./daily-question.js";

export async function postToDiscord({ webhookUrl, text, fetchImpl = fetch }) {
  if (!webhookUrl) {
    throw new Error("DISCORD_WEBHOOK_URL が設定されていません。");
  }

  const response = await fetchImpl(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ content: text })
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Discord Webhook の送信に失敗しました (${response.status}): ${body}`);
  }
}

async function main() {
  const dailyQuestion = getDailyQuestion();
  const text = formatDailyQuestion(dailyQuestion);

  if (process.env.DRY_RUN === "true") {
    console.log(text);
    return;
  }

  await postToDiscord({
    webhookUrl: process.env.DISCORD_WEBHOOK_URL,
    text
  });
  console.log(`${dailyQuestion.dateText} の問題を配信しました。`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
