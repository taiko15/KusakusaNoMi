import { handleDiscordRequest } from "./src/discord-interactions.js";

export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("Discord interaction endpoint", { status: 200 });
    }

    return handleDiscordRequest(request, env);
  }
};
