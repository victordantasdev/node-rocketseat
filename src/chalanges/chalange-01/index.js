/*
 * Criar 2 arquivos JavaScript.
 * O primeiro, irá exportar uma função chamada getFlag()
 * que receberá um argumanto do tipo string.
 * Essa função deverá buscar dentro do array a flag e retornar o valor da flag
 * 
 * O segundo irá importar a função e passar a flag desejada 
 * 
 * Iremos rodar no terminal o segundo arquivo passando as flags --name e greeting
 * para que seja impresso no terminal a daudação e o nome da pessoa. 
*/

const getFlag = require("./getFlag");

const main = () => {
  const name = getFlag('--name');
  const greeting = getFlag('--greeting');

  return console.log(`Olá ${name}, ${greeting}`);
};

main();
