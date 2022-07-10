import { html, render } from "https://unpkg.com/uhtml?module";

const randomQuestionButtonId = "random-question";
const siteTextId = "site-text";

const animatedRandomQuestionButtonClasses =
  "transition ease-in-out delay-150 -translate-y-80 hover:scale-110 duration-1000";
const fadeOutClasses = "transition-opacity ease-in duration-700 opacity-0";

const showRandomQuestion = () => {
  document.getElementById(siteTextId).className += fadeOutClasses;
  document.getElementById(
    randomQuestionButtonId
  ).className += ` ${animatedRandomQuestionButtonClasses}`;

  setTimeout(
    () =>
      showQuestion({
        text: "האם שתי לשזניות מחוברות זו לזניה אחת או שתיים?",
        upvotes: 5,
        downvotes: 5,
        followUps: ["למה", "איך"],
      }),
    2000
  );
};

const showQuestion = ({ text, upvotes, downvotes, followUps }) => {
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
      <h5 class="text-2xl font-bold leading-none text-[#F08224]">${text}</h5>

      <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
        ${followUps.map(
          (followUp, index) => html`
            <li class="pt-3 pb-0">
              <div class="flex items-center text-xl">
                <div class="mx-1 font-semibold text-gray-900">
                  ${index + 1}.
                </div>
                <p class="text-gray-900">${followUp}</p>
              </div>
            </li>
          `
        )}
      </ul>

      <section class="flex w-full justify-end">
        <button
          class="mr-1 mb-1 px-3 py-1 font-bold uppercase text-pink-500 outline-none"
        >
          ${upvotes}
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
          ${downvotes}
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
      </section>
    </div>`
  );
};

window.addEventListener("DOMContentLoaded", () => {
  // console.log(getRandomQuestion());
  document
    .getElementById("random-question")
    .addEventListener("click", showRandomQuestion);
});
