/**
 * Funcao com Valor Padrao
Crie uma funcao saudacao(nome, idioma = "pt") que retorne uma saudacao no idioma especificado. 
Suporte "pt" (Ola), "en" (Hello), "es" (Hola). 
Se o idioma nao for reconhecido, use "pt" como padrao.

// Exemplo:
saudacao("Maria") → "Ola, Maria!"
saudacao("John", "en") → "Hello, John!"
saudacao("Carlos", "es") → "Hola, Carlos!"
 */
const prompt = require('prompt-sync')();
const name = prompt('Digite o Nome: ');
const idioma = prompt('Digite o Idioma: ');

function saudacao(name,idioma){
    switch(idioma){
        case "es":
            return `Hola, ${name}!`;
        case "en":
            return `Hello, ${name}`;
        default:
            return `Olá, ${name}!`;
    }
}
console.log(saudacao(name, idioma));
