const contactForm = document.getElementById('contact-form');
const userEmail = document.getElementById('user-email');
const errorMessage = document.getElementById('error-message');

const validate = (email) => {
  if (email === email.toLowerCase()) {
    return true;
  }
  return false;
};

contactForm.addEventListener('submit', (e) => {
  if (!validate(userEmail.value)) {
    e.preventDefault();
    errorMessage.innerText = 'Message not sent! Please write your email in small case.';
  }
});