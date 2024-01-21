
const formContainer = document.getElementById('form-container');
formContainer.innerHTML = createFormMarkup();

const form = document.querySelector('.feedback-form');

const LOCAL_KEY = 'feedback-form-state';


form.addEventListener('input', onInputData);
form.addEventListener('submit', onFormSubmit);

let dataForm = loadFormData();

function onInputData(e) {
  const { email, message } = form.elements;
  dataForm = { email: email.value.trim(), message: message.value.trim() };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
}

function loadFormData() {
  return JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
}

function populateFormData() {
  const { email, message } = form.elements;
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  const { email, message } = form.elements;

  if (email.value.trim() === '' || message.value.trim() === '') {
    return alert('Please fill in all the fields!');
  }

  console.log({ email: email.value, message: message.value });

  
  localStorage.removeItem(LOCAL_KEY);
  e.currentTarget.reset();
  dataForm = {};
}

  populateFormData();