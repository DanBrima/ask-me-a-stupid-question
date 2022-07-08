// render(
//   document.body,
//   html`<h1 class="text-3xl font-bold underline">Hello 👋 µhtmlaaaaaaaaaaa</h1>`
// )

const randomQuestionButtonId = 'random-question'
const siteTextId = 'site-text'

const animatedRandomQuestionButtonClasses =
  'transition ease-in-out delay-150 -translate-y-80 hover:scale-110 duration-1000'
const fadeOutClasses = 'transition-opacity ease-in duration-700 opacity-0'

const showRandomQuestion = () => {
  document.getElementById(siteTextId).className += fadeOutClasses

  document.getElementById(
    'random-question'
  ).className += ` ${animatedRandomQuestionButtonClasses}`
}

document
  .getElementById('random-question')
  .addEventListener('click', showRandomQuestion)
