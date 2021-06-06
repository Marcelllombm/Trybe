Agora, a prática
# exercicio1

Você criará uma aplicação que faz CRUD ( C reate, R ead, U pdate e D elete) de usuários. A entidade que representa um usuário se chamará user .

Utilize a camada de Model que você acabou de estudar para realizar a interação da aplicação com o MongoDB .

Com isso em mente, prossiga para a realização dos exercícios:

Crie o endpoint POST /user
1 Seu endpoint deve receber o seguinte conteúdo no body da request:
```
    {
        "firstName": "Calebe",
        "lastName": "Junior",
        "email": "calebe.junior@gmail.com",
        "password": "d496d5ea2442"
    }
```
2 Todos os campos são obrigatórios;
3 O campo password deve ser uma string de 6 ou mais caracteres;
4 Caso qualquer um dos campos seja inválido, retorne um JSON com o seguinte formato, variando a mensagem conforme o campo e o erro:

```
    {
        "error": true,
        "message": "O campo 'password' deve ter pelo menos 6 caracteres"
    }
```
5 Caso o usuário seja criado com sucesso, retorne os campos id (e não _id ), firstName , lastName e email em JSON, no formato abaixo, com o status 201 Created

```
    {
        "id": "1837983326d5cd7ad6da5707a2bd11c5",
        "firstName": "Calebe",
        "lastName": "Junior",
        "email": "calebe.junior@gmail.com"
    }
```

O campo _id deve ser renomeado para id , pois a nomenclatura _id trata-se de um detalhe de implementação do MongoDB e que, portanto, deve ser transparente para as demais camadas da aplicação. Dessa forma, ao migrar para um banco relacional, por exemplo, você não precisa alterar o nome de nenhum campo da sua entidade.

# exercicio 2
Crie o endpoint GET /user

1 O endpoint sempre deve retornar um array;

3 Quando não houver nenhum usuário cadastrado, retorne um array vazio;

3 Deve sempre retornar o status 200 OK .

# exercicio 3

Crie o endpoint GET /user/:id

1 O endpoint deve retornar o usuário cujo id seja igual ao parâmetro id informado na URL. O status deve ser 200 OK .

2 Caso um usuário com o id informado não exista, o endpoint deve retornar o conteúdo abaixo em JSON, com status 404 Not Found .

```
    {
        "error": true,
        "message": "Usuário não encontrado"
    }
```

# exercicio 4
Crie o endpoint PUT /user/:id

1 O endpoint deve receber, no corpo da request, os seguintes dados, em JSON:

```
    {
        "firstName": "Calebe",
        "lastName": "Junior",
        "email": "calebe.junior@gmail.com",
        "password": "d496d5ea2442"
    }
```

2 Caso qualquer um dos campos esteja faltando ou seja inválido, retorne um JSON com o seguinte formato, variando a mensagem conforme o campo e o erro:

```
 {
        "error": true,
        "message": "O campo 'password' deve ter pelo menos 6 caracteres"
    }
```
3 Caso esteja tudo certo, utilize os dados enviados no corpo da requisição para atualizar o usuário cujo id foi especificado na URL.

4 Depois de alterar os dados do usuário no banco, retorne os novos dados com o status 200 OK , no seguinte formato:
```
   {
        "id": "1837983326d5cd7ad6da5707a2bd11c5",
        "firstName": "Calebe",
        "lastName": "Junior",
        "email": "calebe.junior@gmail.com"
    }
  ```
 5 Caso o usuário em questão não exista, retorne o status 404 Not Found e os seguintes dados em JSON no corpo da resposta:

  ```
    {
        "error": true,
        "message": "Usuário não encontrado"
    }
  ```

