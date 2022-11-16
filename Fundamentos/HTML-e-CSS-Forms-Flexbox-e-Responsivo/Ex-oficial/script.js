const ferias = document.querySelector('#agreement');
const btn = document.querySelector('#submit-btn');

function botao(event) {
  event.preventDefault();
}
window.onload = function () {
  btn.addEventListener('click', botao);
  const ferias = document.querySelector('#agreement');
  ferias.addEventListener('change', enableSubmit);
};

function enableSubmit() {
  btn.disabled = !ferias.checked;
}

function textInputValidation() {
  const email = document.querySelector('#email').value.length;
  const invalidEmail = email < 10 || email > 50;

  const name = document.querySelector('#fullName').value.length;
  const invalidName = name < 10 || name > 40;

  const reason = document.querySelector('#why').value.length;
  const invalidReason = reason > 500;

  if (invalidEmail || invalidName || invalidReason) {
    return false;
  } else {
    return true;
  }
}
