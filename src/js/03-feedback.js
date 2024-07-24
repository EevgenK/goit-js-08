import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const rezult = JSON.parse(localStorage.getItem('feedback-form-state')) ?? {};

const checkLocalStorage = str => {
  const check = JSON.parse(localStorage.getItem('feedback-form-state'));
  return check && check[str] ? check[str] : '';
};

const onInput = e => {
  const setInLocal = () =>
    localStorage.setItem('feedback-form-state', JSON.stringify(rezult));
  if (e.target.name === 'email') {
    rezult.email = e.target.value;
    setInLocal();
  }
  if (e.target.name === 'message') {
    rezult.message = e.target.value;
    setInLocal();
  }
};
const render = () => {
  localStorage.removeItem('feedback-form-state');
  form.message.value = '';
  form.email.value = '';
};
const onSubmitClick = e => {
  e.preventDefault();
  console.log(rezult);
  render();
};

form.message.value = checkLocalStorage('message');
form.email.value = checkLocalStorage('email');
form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmitClick);
