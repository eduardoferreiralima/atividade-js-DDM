/**
 * Calculadora de String
Receba uma string no formato "operando1 operador operando2" 
(ex: "12 + 8"). Separe os valores usando split(), converta os 
operandos para numero e calcule o resultado. Suporte: +, -, * e /.

// Exemplo:
Entrada: "12 + 8"
Saida: "12 + 8 = 20"

Entrada: "15 / 4"
Saida: "15 / 4 = 3.75"
 */

const entrada = "12 + 8";
const lista = entrada.split(" ")
function calc(op1,opr,op2){
    if (opr === "+") return op1 + op2;
    if (opr === "-") return op1 - op2;
    if (opr === "/") return op1 / op2;
    if (opr === "*") return op1 * op2;
}
console.log(calc(Number(lista[0]), lista[1], Number(lista[2])))
