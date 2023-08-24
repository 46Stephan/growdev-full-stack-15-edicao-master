document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    if (!emailInput.value) {
      alert("Por favor, digite seu e-mail.");
      return;
    }

    if (!passwordInput.value) {
      alert("Por favor, digite sua senha.");
      return;
    }
  });
});
