/**
 * Remover Duplicatas
Dado um array com valores repetidos, crie uma funcao que retorne um novo array sem duplicatas. 
Faca de duas formas: (a) usando Set e (b) usando apenas lacos e includes().

// Exemplo:
Original: [1, 3, 5, 3, 7, 1, 9, 5]
Sem duplicatas: [1, 3, 5, 7, 9]
 */

const original = [1, 3, 5, 3, 7, 1, 9, 5];

function removerComSet(arr) {
    return [...new Set(arr)];
}

function removerComLaço(arr) {
    let arrayTratado = [];

    for (let i = 0; i < arr.length; i++) {
        if (!arrayTratado.includes(arr[i])) {
            arrayTratado.push(arr[i]);
        }
    }
    return arrayTratado;
}

console.log(removerComSet(original));
console.log(removerComLaço(original));