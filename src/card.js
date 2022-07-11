import { html, render } from "https://unpkg.com/uhtml?module";

export default (
  id,
  { text, upvotes, downvotes, followUps, id: questionId },
  upvote,
  downvote,
  { didDownvote, didUpvote }
) => {
  render(
    document.getElementById(id),
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
          onclick=${() => !didUpvote && upvote(questionId)}
          class="mr-1 mb-1 px-3 py-1 font-bold uppercase text-pink-500 outline-none"
        >
          ${upvotes}

          <i
            class="${didUpvote ? "fa-solid fa-heart" : "fa-regular fa-heart"}"
          ></i>
        </button>

        <button
          onclick=${() => !didDownvote && downvote(questionId)}
          class="mr-1 mb-1 px-3 py-1 font-bold uppercase text-pink-500 outline-none"
        >
          ${downvotes}
          <i
            class="${didDownvote
              ? "fa-solid fa-heart-crack"
              : "fa-solid fa-heart-crack"}"
          ></i>
        </button>
      </section>
    </div>`
  );
};
