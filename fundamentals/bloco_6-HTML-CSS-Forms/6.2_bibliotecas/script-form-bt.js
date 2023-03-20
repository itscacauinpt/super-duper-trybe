const btnSubmit = document.querySelector('#btn-submit');
const fullName = document.querySelector('#nome-completo');
const agreement = document.querySelector('#agreed');

function isAgreed() {
  if(agreement.checked === true) {
    console.log('meh')
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}

function stopBtnSubmit(event) {
  event.preventDefault();
}

window.onload = function() {
  //btnSubmit.addEventListener('click', stopBtnSubmit)
  agreement.addEventListener('change', isAgreed)

};

/**
 * function limitedChar() {
  let fulNameChar = fullName.value;
  if(fulNameChar.length < 3 ) {
    //console.log('nope')

  }
  else if (fulNameChar.length > 40) {
    //console.log('meh')
  }
}
  limitedChar()
 */