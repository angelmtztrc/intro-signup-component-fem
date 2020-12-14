const form = document.querySelector('#form');
const inputName = document.querySelector('#input-name');
const inputLast = document.querySelector('#input-last');
const inputEmail = document.querySelector('#input-email');
const inputPassword = document.querySelector('#input-password');
const button = document.querySelector('#submit-button');

form.addEventListener('submit', createAccount);

function createAccount(e) {
  e.preventDefault();

  checkInputs();
}

function checkInputs() {
  const array = [inputName, inputLast, inputEmail, inputPassword];

  array.map(element => {
    if (element.value.trim() === '') {
      displayError(element);
    } else {
      clearError(element);
    }
  });
}

function displayError(element) {
  element.classList.add('ring-primary-red');
  element.classList.remove('ring-neutral-grayishblue');

  const error = element.parentElement.querySelector('div.hidden');
  error.classList.add('block');
  error.classList.remove('hidden');
}

function clearError(element) {
  if (!element.className.includes('ring-neutral-grayishblue')) {
    element.classList.add('ring-neutral-grayishblue');
    element.classList.remove('ring-primary-red');

    const error = element.parentElement.querySelector('div.block');
    error.classList.add('hidden');
    error.classList.remove('block');
  }
}
