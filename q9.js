/**
 * 
Calculadora de Desconto
Dado um valor de compra, aplique desconto conforme a faixa: ate R$100 = sem desconto; de R$100.01 a R$300 = 10%; 
acima de R$300 = 20%. Exiba o valor original, o desconto e o valor final.

// Exemplo:
Valor: 250
Saida: "Original: R$250.00 | Desconto: 10% (R$25.00) | Final: R$225.00"
 */

const prompt = require('prompt-sync')();
const valor = prompt('Digite um valor para calcular o desconto: ');
function calcDesconto(v){
    if (v <= 100){
        return `Original: R$${v.toFixed(2)} - Sem desconto para valores abaixo de R$100!`;
    }
    else if (v > 100 && v <= 300){
        let val = v*0.9;
        let economia = v - val;
        return `Original: R$${v.toFixed(2)} | Desconto: 10% R$${economia.toFixed(2)} | Final: R$${val.toFixed(2)}`;
    }
    else if(v > 300){
        let val = v*0.8;
        let economia = v - val;
        return `Original: R$${v.toFixed(2)} | Desconto: 20% R$${economia.toFixed(2)} | Final: R$${val.toFixed(2)}`;
    }else return "Valor Inválido!";
}
console.log(calcDesconto(Number(valor)));