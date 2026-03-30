/**
 * Validador de Senha
Crie uma funcao validarSenha(senha) que verifique se a senha atende aos criterios: 
minimo 8 caracteres, contem pelo menos um numero e pelo menos uma letra maiuscula. 
Retorne um objeto com { valida: true/false, erros: [...] }.

// Exemplo:
validarSenha("abc") → { valida: false, erros: ["Minimo 8 caracteres", "Precisa de numero", "Precisa de maiuscula"] }
validarSenha("Senha123") → { valida: true, erros: [] }
 */

const prompt = require('prompt-sync')();
const senha = prompt('Digite a senha: ');
let resposta = {valida: Boolean, erros: []};
let erros = [];
const regexNumber = /[0-9]/g;
const regexMaiusc = /[A-Z]/g;
const regexMinusc = /[a-z]/g;

function validarSenha(senha){
    let isValid = true;
    if (senha.length < 8){
        erros.push("Minimo de 8 caracteres!")
        isValid = false;
    }
    if (!senha.match(regexNumber)){
        erros.push("Precisa de Números!")
        isValid = false;
    } 
    if (!senha.match(regexMaiusc)){
        erros.push("Precisa de Caractere Maisculo!")
        isValid = false;
    } 
    if (!senha.match(regexMinusc)){
        erros.push("Precisa de Caractere Minusculo!")
        isValid = false;
    } 
    resposta.erros = erros;
    resposta.valida = isValid;
    console.log(resposta)
}
validarSenha(senha);