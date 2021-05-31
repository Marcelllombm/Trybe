// requisito 5
const fs = require('fs/promises');
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
function getSimpsons(){
  return fs.readFile('./simpson.json','utf-8')
  .then(fileContent => JSON.parse(fileContent));
}
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
function setSimpsons (){
  return fs.writeFile('./simpson.json', JSON.stringify(newsSimpsons));
}

module.exports = { getSimpsons, setSimpsons };