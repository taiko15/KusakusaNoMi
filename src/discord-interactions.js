import { getDailyQuestion } from "./daily-question.js";

const DISCORD_PUBLIC_KEY_HEADER = "x-signature-ed25519";
const DISCORD_TIMESTAMP_HEADER = "x-signature-timestamp";

function hexToBytes(hex) {
  return Uint8Array.from(hex.match(/.{2}/g) ?? [], (byte) => Number.parseInt(byte, 16));
}

export function normalizeAnswer(answer) {
  return answer
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\s、。,.，．・!！?？「」『』（）()]/g, "");
}

export function isCorrectAnswer(question, answer) {
  const acceptedAnswers = [question.answer, ...(question.acceptedAnswers ?? [])];
  const normalizedAnswer = normalizeAnswer(answer);
  return acceptedAnswers.some((acceptedAnswer) => normalizeAnswer(acceptedAnswer) === normalizedAnswer);
}

export function createAnswerResponse(interaction, date = new Date(), allowedChannelId) {
  if (interaction.type === 1) {
    return { type: 1 };
  }

  if (allowedChannelId && interaction.channel_id !== allowedChannelId) {
    return {
      type: 4,
      data: { content: "このコマンドは問題配信用チャンネルで使ってください。", flags: 64 }
    };
  }

  if (interaction.type !== 2 || interaction.data?.name !== "answer") {
    return {
      type: 4,
      data: { content: "対応していないコマンドです。", flags: 64 }
    };
  }

  const answer = interaction.data.options?.find((option) => option.name === "answer")?.value;
  if (!answer) {
    return {
      type: 4,
      data: { content: "回答を入力してください。", flags: 64 }
    };
  }

  const { question } = getDailyQuestion(date);
  if (isCorrectAnswer(question, answer)) {
    return {
      type: 4,
      data: {
        content: `正解です！\n答え：${question.answer}\n\n解説：${question.explanation}`
      }
    };
  }

  return {
    type: 4,
    data: { content: "不正解です。もう一度考えてみてください。", flags: 64 }
  };
}

export async function verifyDiscordRequest({ body, signature, timestamp, publicKey }) {
  if (!body || !signature || !timestamp || !publicKey) {
    return false;
  }

  try {
    const key = await crypto.subtle.importKey("raw", hexToBytes(publicKey), { name: "Ed25519" }, false, ["verify"]);
    return crypto.subtle.verify(
      { name: "Ed25519" },
      key,
      hexToBytes(signature),
      new TextEncoder().encode(timestamp + body)
    );
  } catch {
    return false;
  }
}

export async function handleDiscordRequest(request, env) {
  const body = await request.text();
  const isValid = await verifyDiscordRequest({
    body,
    signature: request.headers.get(DISCORD_PUBLIC_KEY_HEADER),
    timestamp: request.headers.get(DISCORD_TIMESTAMP_HEADER),
    publicKey: env.DISCORD_PUBLIC_KEY
  });

  if (!isValid) {
    return new Response("invalid request signature", { status: 401 });
  }

  return Response.json(createAnswerResponse(JSON.parse(body), new Date(), env.DISCORD_CHANNEL_ID));
}
