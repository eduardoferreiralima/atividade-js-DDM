/**
 * Ordenacao Manual (Bubble Sort)
Implemente o algoritmo Bubble Sort para ordenar um array de numeros em ordem crescente. 
Nao use .sort(). Exiba o array antes e depois da ordenacao.

// Exemplo:
Antes: [64, 34, 25, 12, 22, 11, 90]
Depois: [11, 12, 22, 25, 34, 64, 90]
 */

let original = [640, 134, 25, 12, 22, 1100, 90];
console.log(`Antes: ${original}`)
for (let j = 0; j < original.length; j++){

    for (let i = 0; i < original.length; i++){
        if (original[i+1] < original[i]){
            let temp = original[i+1];
            original[i+1] = original[i]
            original[i] = temp;
        }
    }
}
console.log(`Depois: ${original}`)