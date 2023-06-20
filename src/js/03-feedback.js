import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const formData = {};

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onInput, 500));

onSavedInput();

function onFormSubmit(e) {
  e.preventDefault();
  console.log('Отправляем форму:', formData);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
function onInput(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSavedInput() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage) {
    console.dir(formEl);
  }
}
