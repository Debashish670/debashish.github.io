document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('email-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const message = document.getElementById('form-message');
  message.textContent = 'Thanks — you’re on the list! Connect this form to your email provider before publishing.';
  event.currentTarget.reset();
});
