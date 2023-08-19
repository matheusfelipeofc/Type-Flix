const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");
const loadingDiv = document.getElementById("loading");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "admin" && password === "admin123") {
    loginMessage.textContent = "Login bem-sucedido! Redirecionando...";
    loadingDiv.style.display = "flex";

    setTimeout(function () {
      window.location.href = "index/index.html"; // Redireciona após 2 segundos (pode ajustar)
    }, 2000);
  } else {
    loginMessage.textContent = "Credenciais inválidas. Tente novamente.";
  }
});

