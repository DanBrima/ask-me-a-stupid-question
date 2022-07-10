// render(
//   document.body,
//   html`<h1 class="text-3xl font-bold underline">Hello 👋 µhtmlaaaaaaaaaaa</h1>`
// )
import { html, render } from "https://unpkg.com/uhtml?module";

const randomQuestionButtonId = "random-question";
const siteTextId = "site-text";

const animatedRandomQuestionButtonClasses =
  "transition ease-in-out delay-150 -translate-y-80 hover:scale-110 duration-1000";
const fadeOutClasses = "transition-opacity ease-in duration-700 opacity-0";

const showRandomQuestion = () => {
  document.getElementById(siteTextId).className += fadeOutClasses;

  document.getElementById(
    "random-question"
  ).className += ` ${animatedRandomQuestionButtonClasses}`;

  setTimeout(showQuestion, 2000);
};

const showQuestion = () => {
  render(
    document.getElementById("app"),
    html`<button
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

  render(
    document.getElementById("question"),
    html`<div
      class="animate-fade mx-auto mt-20 overflow-hidden text-ellipsis rounded-lg border bg-white p-4"
    >
      <h5 class="text-3xl font-bold leading-none text-gray-900">השאלה</h5>

      <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
        <li class="pt-3 pb-0">
          <div class="flex items-center text-xl">
            <div class="mx-1 font-semibold text-gray-900">1.</div>
            <p class="text-gray-900">דןדן</p>
          </div>
        </li>
      </ul>

      <section class="flex w-full flex-col items-end">
        <button
          class="mr-1 mb-1 px-3 py-1 font-bold uppercase text-pink-500 outline-none"
        >
          5
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>

        <button
          class="mr-1 mb-1 px-3 py-1 font-bold uppercase text-pink-500 outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M119.4 44.1C142.7 40.22 166.2 42.2 187.1 49.43L237.8 126.9L162.3 202.3C160.8 203.9 159.1 205.1 160 208.2C160 210.3 160.1 212.4 162.6 213.9L274.6 317.9C277.5 320.6 281.1 320.7 285.1 318.2C288.2 315.6 288.9 311.2 286.8 307.8L226.4 209.7L317.1 134.1C319.7 131.1 320.7 128.5 319.5 125.3L296.8 61.74C325.4 45.03 359.2 38.53 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.09V44.1z"
            />
          </svg>
        </button>
      </section>
    </div>`
  );
};

window.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("random-question")
    .addEventListener("click", showRandomQuestion);
});
