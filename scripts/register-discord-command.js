const { DISCORD_APPLICATION_ID, DISCORD_BOT_TOKEN, DISCORD_GUILD_ID } = process.env;

if (!DISCORD_APPLICATION_ID || !DISCORD_BOT_TOKEN || !DISCORD_GUILD_ID) {
  throw new Error("DISCORD_APPLICATION_ID、DISCORD_BOT_TOKEN、DISCORD_GUILD_ID を設定してください。");
}

const response = await fetch(
  `https://discord.com/api/v10/applications/${DISCORD_APPLICATION_ID}/guilds/${DISCORD_GUILD_ID}/commands`,
  {
    method: "POST",
    headers: {
      Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: "answer",
      description: "今日の社会科問題に回答します",
      options: [
        {
          type: 3,
          name: "answer",
          description: "回答を入力してください",
          required: true
        }
      ]
    })
  }
);

if (!response.ok) {
  throw new Error(`Discordコマンドの登録に失敗しました (${response.status}): ${await response.text()}`);
}

console.log("Discordに /answer コマンドを登録しました。");
