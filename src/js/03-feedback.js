import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input[name = "email"]');
const textAreaEl = document.querySelector('textarea[name="message"]');

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

  updateFormData();
}

function onSavedInput() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData && savedData.email !== '') {
    inputEl.value = savedData.email;
  }

  if (savedData && savedData.message !== '') {
    textAreaEl.value = savedData.message;
  }
}

function updateFormData() {
  formData.email = inputEl.value;
  formData.message = textAreaEl.value;
}
