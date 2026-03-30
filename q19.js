/**
 * Crie uma funcao converterMoeda(valor, taxaCambio) que receba um valor em reais e uma taxa de cambio, 
 * e retorne o valor convertido. Teste com dolar (5.20) e euro (5.60).

// Exemplo:
converterMoeda(100, 5.20) → "R$100.00 = $19.23"
converterMoeda(100, 5.60) → "R$100.00 = €17.86"
 */
const prompt = require('prompt-sync')();
const num = prompt('Digite um Valor em R$: ');
const taxa = prompt('Digite a Taxa de Cambio em $: ');
const taxa2 = prompt('Digite a Taxa de Cambio em €: ');
function converterMoeda(valor, taxaCambio){
    return valor / taxaCambio;
}
console.log(`R$${num} = $${converterMoeda(Number(num), Number(taxa)).toFixed(2)}`)
console.log(`R$${num} = €${converterMoeda(Number(num), Number(taxa2)).toFixed(2)}`)