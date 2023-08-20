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

// ... (código anterior)

const registerLink = document.getElementById('registro/index.html');

registerLink.addEventListener('click', function (event) {
  event.preventDefault();
  // Aqui você pode redirecionar o usuário para a página de registro ou tomar outra ação
  // Por exemplo: window.location.href = 'register.html';
  loginMessage.textContent = 'Registre-se para criar uma conta nova.';
});
