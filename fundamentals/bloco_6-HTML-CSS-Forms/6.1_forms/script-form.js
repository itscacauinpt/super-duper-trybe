const submitBtn = document.querySelector('#submit-btn');
const agreed = document.querySelector('#agreedImg');

function eraseDefault(event) {
  event.preventDefault();
};

window.onload = function () {
  submitBtn.addEventListener('click', eraseDefault);

};