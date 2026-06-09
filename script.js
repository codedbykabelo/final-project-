document.addEventListener('DOMContentLoaded', () => {
  const signUpCard = document.querySelector('.card--signup');
  const successCard = document.querySelector('.card--success');
  const signUpForm = document.querySelector('.signup-form');
  const emailInput = document.querySelector('#email');
  const emailError = document.querySelector('#email-error');
  const emailValue = document.querySelector('#email-value');
  const dismissButton = document.querySelector('.cta--dismiss');

  function setError(message) {
    emailInput.classList.add('error');
    emailError.textContent = message;
    emailError.classList.add('active');
  }

  function clearError() {
    emailInput.classList.remove('error');
    emailError.textContent = '';
    emailError.classList.remove('active');
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showSuccessCard(email) {
    signUpCard.classList.add('hidden');
    successCard.classList.remove('hidden');
    if (emailValue) {
      emailValue.textContent = email;
    }
  }

  function showSignUpCard() {
    successCard.classList.add('hidden');
    signUpCard.classList.remove('hidden');
    emailInput.value = '';
    clearError();
    emailInput.focus();
  }

  if (signUpForm) {
    signUpForm.addEventListener('submit', (event) => {
      event.preventDefault();
      clearError();

      const email = emailInput.value.trim();
      if (!email || !isValidEmail(email)) {
        setError('Valid email required');
        return;
      }

      showSuccessCard(email);
    });

    emailInput.addEventListener('input', () => {
      if (emailError.classList.contains('active')) {
        clearError();
      }
    });
  }

  if (dismissButton) {
    dismissButton.addEventListener('click', () => {
      showSignUpCard();
    });
  }
});
