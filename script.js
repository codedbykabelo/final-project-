const form = document.getElementById("signup-form");
const emailInput = document.getElementById("email-input");
const emailError = document.getElementById("email-error");

function validateEmail(value) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(value.trim());
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = emailInput.value;

  if (!email || !validateEmail(email)) {
    emailError.textContent = "Please provide a valid email address.";
    emailInput.classList.add("input-error");
    emailInput.focus();
    return;
  }

  emailError.textContent = "";
  emailInput.classList.remove("input-error");
  alert(`Thanks for subscribing with ${email}!`);
  form.reset();
});