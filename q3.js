/**
 * Parseando Strings para Numeros
Dada a string "42.7", converta para numero e some com 8. Depois, 
dada a string "10abc", tente converter com parseInt() e com Number(). 
Exiba os resultados e o typeof de cada um.

// Exemplo de saida:
"42.7" + 8 = 50.7 (tipo: number)
parseInt("10abc") = 10 (tipo: number)
Number("10abc") = NaN (tipo: number)
 */

let ns = "42.7";
let ns2 = "10abc";
console.log("Convertendo 10abc com Number: " + Number(ns2))
ns = parseFloat(ns);
ns2 = parseInt(ns2);
console.log(ns + 8)
console.log("10abc Após o parseInt: "+ns2)
console.log("Tipo da String 42.7 após converter com parsefloat e somar com 8: "+typeof(ns))
console.log("Tipo da String 10abc após converter com parseInt: "+typeof(ns2))
