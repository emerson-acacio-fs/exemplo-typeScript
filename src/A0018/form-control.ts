import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  hideErroMessage(event.target as HTMLFormElement);
  checkForEmptyFields(username, email, password, password2);
  checkEmail(email);
});

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErroMessage(input, 'E-mail inválido');
}

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) {
      showErroMessage(input, 'Este campo não deve ficar vazio');
    }
  });
}

function hideErroMessage(form: HTMLFormElement): void {
  form.querySelectorAll(`.${SHOW_ERROR_MESSAGES}`).forEach((v) => {
    v.classList.remove(SHOW_ERROR_MESSAGES);
  });
}

function showErroMessage(input: HTMLInputElement, msg: string): void {
  const formFilds = input.parentElement as HTMLDivElement;
  const errorMessage = formFilds.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFilds.classList.add(SHOW_ERROR_MESSAGES);
}

// showErroMessage(username, 'sssss');
// hideErroMessage(form);
