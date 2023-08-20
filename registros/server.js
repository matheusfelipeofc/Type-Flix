const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const usersFilePath = path.join(__dirname, 'users.json');

app.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Lê os usuários existentes do arquivo JSON
  let users = [];
  if (fs.existsSync(usersFilePath)) {
    const usersData = fs.readFileSync(usersFilePath, 'utf8');
    users = JSON.parse(usersData);
  }

  // Verifica se o usuário já existe
  const userExists = users.some(user => user.username === username);
  if (userExists) {
    res.json({ success: false });
    return;
  }

  // Adiciona o novo usuário
  users.push({ username, password });
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), 'utf8');

  res.json({ success: true });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
