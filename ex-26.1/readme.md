# Exercicio 

Antes de começar, crie uma nova pasta e, dentro dela, crie um pacote Node.js com o npm init chamado my-scripts . Realize os exercícios dentro desse pacote.

#### Exercicio 1 - Crie um script para calcular o Índice de Massa Corporal(IMC) de uma pessoa.

1 - A fórmula para calcular o IMC é peso / altura ^ 2 .
2 - Comece criando um novo pacote node com npm init e respondendo às perguntas do npm .
3 - Por enquanto, não se preocupe em pedir input da pessoa usuária. Utilize valores fixos para peso e altura .
4 - Armazene o script no arquivo imc.js .

<details>
<summary><b>Resolução</b></summary>

Exercicio 1.1 
// Criando pasta para fazer os exercicios
mkdir my-scripts

Exercicio 1.2 
// Iniciando o um novo pacote de note na pasta
node init

Exercicio 1.3
// criando um script no arquivo imc.jc
const PESO_80KG = 90; 
const ALTURA_1M_78CM = 168; 

function calculaImc () {
  const peso = PESO_80KG;
  const altura = ALTURA_1M_78CM;

  console.log('Peso: %s, altura: %s', peso, altura);
  const imc = (peso / Math.pow(altura, 2)).toFixed(2);
  console.log('IMC: %s', imc);
}
calculaImc();

Exercicio 1.4
// executar o script
node imc.js

</details>

#### Exercicio 2 - Agora, permita que o script seja executado através do comando npm run imc.

1 - O novo script criado deve conter o comando que chama o node para executar o arquivo imc.js .

<details>
<summary><b>Resolução</b></summary>

Exercicio 2.1
// colocando no arquivo do packege.json um script
{
  // ...
  "scripts": {
    // ...
    "imc": "node imc.js"
  }
  // ...
}
</details>

#### Exercicio 3 - Chegou a hora de tornar nosso script mais interativo! Vamos adicionar input de quem usa.

1 - Você já utilizou o pacote readline-sync para esse fim. Que tal utilizar o mesmo pacote?

2 - Substitua os valores fixos de peso e altura por dados informados pela pessoa ao responder as perguntas "Qual seu peso?" e "Qual sua altura?" no terminal.

<details>
<summary><b>Resolução</b></summary>

// Exercicio 3.1
// digitar esse codigo para instalar o pacote npm readline-sync no terminal
npm install readline-sync
ou 
npm i readline-sync

// Exercicio 3.2
// importando o redline-sync no arquivo imc.js

const readline = require('readline-sync');

// const PESO_80KG = 80; // Você pode utilizar o valor que desejar aqui
// const ALTURA_1M_78CM = 178; // Você pode utilizar o valor que desejar aqui

// function calculaImc () {
//   const peso = PESO_80KG;
//   const altura = ALTURA_1M_78CM;

//   console.log('Peso: %s, altura: %s', peso, altura);

//   const imc = (peso / Math.pow(altura, 2)).toFixed(2);

//   console.log('IMC: %s', imc);
// }

// calculaImc();

// adicionando as pergunta no arquivo imc.js
const peso = readline.questionInt('Qual o seu peso? (em kg)');
const altura = readline.questionInt('Qual a sua altura? (em cm)');

// para exercutar as perguntas 
node imc.js



</details>


#### Exercici0 4- Agora temos um problema: peso não é um número inteiro! Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o input desse dado.


1 - O pacote readline-sync possui uma função específica para tratar esses casos. Consulte a (documentação )[https://www.npmjs.com/package/readline-sync#utility_methods] do pacote e encontre o método adequado para realizar input de floats .

2 - Encontrou a função? Show! Agora utilize-a para solicitar o input de peso .

<details>
<summary><b>Resolução</b></summary>

Agora temos um problema: peso não é um número inteiro! Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o input desse dado.

O pacote readline-sync possui uma função específica para tratar esses casos. Consulte a documentação do pacote e encontre o método adequado para realizar input de floats .

Encontrou a função? Show! Agora utilize-a para solicitar o input de peso e altura .

// Exercico 4.1
Encontre, na documentação do readline-sync , a função questionFloat

// Exercicio 4.2
// substituir o constante const peso = readline.questionInt('Qual o seu peso? (em kg)');
// para
const peso = readline.questioFloat('Qual o seu peso? (em kg)');

</details>


#### Exercicios 5  - Vamos sofisticar um pouco mais nosso script. Além de imprimir o IMC na tela, imprima também em qual categoria da tabela abaixo aquele IMC se enquadra:


Considere a seguinte tabela para classificar a situação do IMC:
Copiar
| IMC                                       | Situação                  |
| ----------------------------------------- | ------------------------- |
| Abaixo de 18,5                            | Abaixo do peso (magreza)  |
| Entre 18,5 e 24,9                         | Peso normal               |
| Entre 25,0 e 29,9                         | Acima do peso (sobrepeso) |
| Entre 30,0 e 34,9                         | Obesidade grau I          |
| Entre 35,0 e 39,9                         | Obesidade grau II         |
| 40,0 e acima                              | Obesidade graus III e IV  |

<details>
<summary><b>Resolução</b></summary>

  if (imc < 18.5) {
       console.log('Situação: Abaixo do peso (magreza)');
       return;
     }

     if (imc >= 18.5 && imc < 25) {
       console.log('Situação: Peso normal');
       return;
     }

     if (imc >= 25 && imc < 30) {
       console.log('Situação: Acima do peso (sobrepeso)');
       return;
     }

     if (imc >= 30 && imc < 35) {
       console.log('Situação: Obesidade grau I');
       return;
     }

     if (imc >= 35 && imc <details 40) {
       console.log('Situação: Obesidade grau II');
       return;
     }

     console.log('Situação: Obesidade graus III e IV');
</details>


#### Exercicios 6 - Vamos criar mais um script. Dessa vez, para calcular a velocidade média de um carro numa corrida.

1 - A fórmula para calcular velocidade média é distância / tempo .

2 - Armazene o script no arquivo velocidade.js.

3 - Agora, permita que o script seja executado através do comando npm run velocidade . Para isso, crie a chave velocidade dentro do objeto scripts no package.json .

4 - Utilize o readline-sync para solicitar os dados à pessoa.

5 - Considere a distância em metros e o tempo em segundos. Repare que, agora, estamos trabalhando com números inteiros.

<details>
<summary><b>Resolução</b></summary>
// Exercicio 1 - Criar o arquivo velocidade.js com um conteúdo parecido com o seguinte:

const readline = require('readline-sync');

const distancia = readline.questionInt('Distância percorrida (m)');
const tempo = readline.questionInt('Tempo gasto (s)');

const velocidadeMedia = (distancia / tempo).toFixed(2);

console.log(`Velocidade média: ${velocidadeMedia} m/s`);

// Exercicio 2 - Crie o script velocidade com o conteúdo node velocidade.js no package.json :
{
  // ...
  "scripts": {
    // ...
    "velocidade": "node velocidade.js"
  }
  // ...
}


// Exercicio 3 - Execute o script utilizando npm run velocidade e verifique se os valores corretos estão sendo retornados


// Exercicio 4 - procurar a documentação do questionInt e questionFloat

// Exercicio 5 - procurar o documentação sobre questionINt

</details>

#### Exercicios 7 - Crie um "jogo de adivinhação" em que a pessoa ganha se acertar qual foi o número aleatório gerado.

1 - O script deve ser executado através do comando npm run sorteio .

2 - Utilize o readline-sync para realizar input de dados.

3 - Armazene o script em sorteio.js.

4 - O número gerado deve ser um inteiro entre 0 e 10.

5 - Caso a pessoa acerte o número, exiba na tela "Parabéns, número correto!".

6 - Caso a pessoa erre o número, exiba na tela "Opa, não foi dessa vez. O número era [número sorteado]".

7 - Ao final, pergunte se a pessoa deseja jogar novamente. Se sim, volte ao começo do script.

<details>
<summary><b>Resolução</b></summary>

// Exercicio 1  criando o arquivo sorteio.js
const readline = require('readline-sync');

// Criamos uma função para poder utilzar early return
function logResultado(numero, resposta) {
  // Aqui, utilizamos o return para interromper a execução da função
  // Esse é o padrão de código conhecido com early return, ou seja:
  // retornamos "mais cedo" pois uma determinada condição (no caso, a resposta estar certa)
  // não foi atingida.
  if (numero !== resposta) {
    return console.log(`Opa, não foi dessa vez. O número era ${numero}`);
  }

  // Como o if da linha acima tem um `return`, não precisamos do `else`, já que, se a execução
  // do código entrar no if, a linha abaixo não será executada
  return console.log('Parabéns, número correto!');
}

function runGame() {
  const numero = Math.random() * 10;

  const resposta = readline.questionInt(
    'Digite um número entre 0 e 10 para saber se é o número que estou pensando'
  );

  logResultado(numero, resposta);

  const novamente = readline.question(
    'Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não)'
  );

  // Mais uma vez, utilizamos um return para interromper a execução do código mais cedo,
  // o que elimina a necessidade do else
  if (novamente !== 's') return console.log('OK, até a próxima!');

  // Chamamos a mesma função para executar novamente o jogo.
  // Uma função que chama a si mesma é chamada de função **recursiva**
  runGame();
}

// Executamos o jogo pela primeira vez
runGame();


// Exercicio 2 - criando no package.json um pacote dependente 

// Exercicio 3 - utilizando o comando npm run sorteio e verifique a funcionalidade

// Exercicio 4 -  ultilizando quistionInt da documentação


</details>

#### Exercicio - 8 Crie um arquivo index.js que pergunta qual script deve ser executado

1 - O script deve ser acionado através do comando npm start .

2 - Utilize o readline-sync para realizar o input de dados

3 - Quando executado, o script deve exibir uma lista numerada dos scripts disponíveis.

4 - Ao digitar o número de um script e pressionar enter , o script deve ser executado.

5 - Você pode utilizar o require para executar o script em questão.

<details>
<summary><b>Resolução</b></summary>
 // Exercicio 1 - 
 const readline = require('readline-sync');

// Criamos uma lista dos scripts disponíveis
// Utilizamos objetos com `name` e `script` para facilitar a criação da lista que será exibida
const scripts = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './velocidade.js' },
  { name: 'Jogo de adivinhação', script: './sorteio.js' },
];

// Iteramos sobre os scripts para criar a lista numerada
const mensagem = scripts
  .map((script, index) => `${index + 1} - ${script.name}`)
  // Adicionamos uma linha a mais no começo da mensagem
  .unshift('Escolha um número para executar o script correspondente')
  .join('\n');

const scriptNumber = readline.questionInt(mensagem) - 1;

const script = scripts[scriptNumber];

if (!script) return console.log('Número inválido. Saindo');

// Chamamos o script selecionado
// Note que, no dia a dia, é mais comum utilizarmos outras formas de executar arquivos externos
// No entanto, para fins didáticos, o `require` nos atende por enquanto.
require(script.script);

// Exercicio 2 - Crie o script start com o conteúdo node index.js no package.json :

{
  // ...
  "scripts": {
    // ...
    "start": "node index.js"
  }
  // ...
}

// Exercicio 3 - 
Execute o script através do comando npm start e verifique a funcionalidade
</details>