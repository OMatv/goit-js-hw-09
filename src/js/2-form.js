const form = document.querySelector('.feedback-form');

window.addEventListener('DOMContentLoaded', () => {
  const savedState = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedState) {
    form.email.value = savedState.email || '';
    form.message.value = savedState.message || '';
  }
});

form.addEventListener('input', () => {
  const formData = {
    email: form.email.value.trim(),
    message: form.message.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (email && message) {
    console.log({ email, message });

    localStorage.removeItem('feedback-form-state');

    form.reset();
  } else {
    alert('Please fill in all fields.');
  }
});
