const registerForm = document.getElementById('registerForm');
const registerMessage = document.getElementById('registerMessage');

registerForm.addEventListener('submit', async function (event) {
  event.preventDefault();
  
  const username = registerForm.username.value;
  const password = registerForm.password.value;

  const response = await fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });

  const data = await response.json();

  if (data.success) {
    registerMessage.textContent = 'Registro bem-sucedido!';
    registerForm.reset();
  } else {
    registerMessage.textContent = 'Erro ao registrar.';
  }
});
