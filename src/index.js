import { html, render } from "https://unpkg.com/uhtml?module";
import renderCard from "./card.js";
import {
  downvote,
  getRandomQuestion,
  upvote,
} from "./services/questionService.js";

const randomQuestionButtonId = "random-question";
const siteTextId = "site-text";

const animatedRandomQuestionButtonClasses =
  "transition ease-in-out delay-150 -translate-y-80 hover:scale-110 duration-1000";
const fadeOutClasses = "transition-opacity ease-in duration-700 opacity-0";

const showRandomQuestion = async () => {
  document.getElementById(siteTextId).className += fadeOutClasses;
  document.getElementById(
    randomQuestionButtonId
  ).className += ` ${animatedRandomQuestionButtonClasses}`;

  showQuestion(await getRandomQuestion(), {
    didDownvote: false,
    didUpvote: false,
  });
};

const showQuestion = (question, { didDownvote, didUpvote }) => {
  render(
    document.getElementById("app"),
    html`<button
      onclick=${async () =>
        showQuestion(await getRandomQuestion(), { didDownvote, didUpvote })}
      id="random-question"
      class="random-question-button mt-16 w-full"
    >
      הגרל
    </button>`
  );

  const div = document.createElement("div");
  div.className = "mx-auto w-1/2";
  div.id = "question";
  document.body.appendChild(div);

  const upvoteQuestion = (questionId) => {
    upvote(questionId);

    showQuestion(
      { ...question, upvotes: question.upvotes + 1 },
      { didDownvote, didUpvote: true }
    );
  };

  const downvoteQuestion = (questionId) => {
    downvote(questionId);

    showQuestion(
      { ...question, downvotes: question.downvotes + 1 },
      { didUpvote, didDownvote: true }
    );
  };

  renderCard("question", question, upvoteQuestion, downvoteQuestion, {
    didDownvote,
    didUpvote,
  });
};

window.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("random-question")
    .addEventListener("click", showRandomQuestion);
});
