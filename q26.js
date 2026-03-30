/**
 * Crie uma funcao que inverta um array sem usar .reverse(). 
 * Retorne um novo array invertido.

// Exemplo:
Original: ["a", "b", "c", "d", "e"]
Invertido: ["e", "d", "c", "b", "a"]
 */
let array = ["a", "b", "c", "d", "e"];
console.log(`Original: [${array}]`)
function reverterArray(array){
    let arrayInvertido = [];
    for (let i = array.length - 1 ; i >= 0; i--){
        arrayInvertido.push(array[i]);
    }
    console.log(`Innvertido: [${arrayInvertido}]`);
}
reverterArray(array);