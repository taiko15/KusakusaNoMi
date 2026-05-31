import { questions } from "./questions.js";

const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;

export function getDateInTimeZone(date = new Date(), timeZone = "Asia/Tokyo") {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(date);
}

export function getQuestionIndex(dateText, questionCount = questions.length) {
  const [year, month, day] = dateText.split("-").map(Number);
  const daysSinceEpoch = Math.floor(Date.UTC(year, month - 1, day) / DAY_IN_MILLISECONDS);
  return daysSinceEpoch % questionCount;
}

export function getDailyQuestion(date = new Date(), timeZone = "Asia/Tokyo") {
  const dateText = getDateInTimeZone(date, timeZone);
  return { dateText, question: questions[getQuestionIndex(dateText)] };
}

export function formatDailyQuestion({ dateText, question }) {
  return [
    `【毎日の社会科 ${dateText}】`,
    `今日の${question.category}問題`,
    "",
    question.question,
    "",
    "回答するには `/answer` コマンドを使ってください。"
  ].join("\n");
}
