// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function prevDef(event) {
  event.preventDefault();
}
HREF_LINK.addEventListener('click', prevDef);
INPUT_CHECKBOX.addEventListener('click', prevDef);

function keyA(event) {
  let x = event.key;
  if (x !== 'a') {
    event.preventDefault();
  }
  console.log(event.key)
};
INPUT_TEXT.addEventListener('keypress', keyA);