const submitButton = document.querySelector('#submit-btn')
const cleanButton = document.querySelector('#clean-btn');
const formAnswers = document.querySelectorAll('input');
const textArea = document.querySelector('#textarea')

function confirmEvent(event) {
  event.preventDefault();
}

function cleanAll() {
  for(key of formAnswers) {
    const usrInput = formAnswers[key];
    usrInput.value = '';
    usrInput.checked = false;
  }
  textArea.value = '';
}




window.onload = function() {
  submitButton.addEventListener('click', confirmEvent);
  cleanButton.addEventListener('click', cleanAll);
};