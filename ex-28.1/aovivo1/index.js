const express = require('express');
const app = express();
app.use(express.json());

const {login} = require('./controllers/login');
const {getPosts} = require('./controllers/posts');
const {createUser} = require('./controllers/users');

app.get('/api/posts', getPosts);
app.post('/api/login', login);
app.post('/api/users', createUser);


const PORT = 3000;
app.listen(PORT, ()=> console.log(`Conectado na porta ${PORT}`));