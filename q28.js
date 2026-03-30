/**
 * Carrinho de Compras
Crie um array de objetos representando produtos: { nome, preco, quantidade }. 
Calcule o valor total do carrinho. Depois, aplique 10% de desconto em produtos 
com preco acima de R$50. Exiba o resumo.

// Exemplo:
Carrinho: [
  { nome: "Camiseta", preco: 45.90, quantidade: 2 },
  { nome: "Tenis", preco: 189.90, quantidade: 1 },
  { nome: "Meia", preco: 12.50, quantidade: 3 }
]
Subtotal: R$318.20
Desconto (Tenis): -R$18.99
Total: R$299.21
 */

let carrinho = [
  { nome: "Camiseta", preco: 45.90, quantidade: 2 },
  { nome: "Tenis", preco: 189.90, quantidade: 1 },
  { nome: "Meia", preco: 12.50, quantidade: 3 },
  { nome: "Calça", preco: 122.50, quantidade: 5 }
]
let subtotal = 0;
let desconto = 0;
let itemsDescontados = [];


for (let i = 0; i < carrinho.length; i++){
    let subTemp = carrinho[i].preco * carrinho[i].quantidade;
    subtotal += subTemp;
    if (carrinho[i].preco > 50){
        let temp = carrinho[i].preco * 0.1 * carrinho[i].quantidade;
        desconto += temp;
        itemsDescontados.push(carrinho[i].nome);
    }
}

console.log(`Subtotal: ${subtotal}`)
console.log(`Desconto(${itemsDescontados}): ${desconto.toFixed(2)}`)
console.log(`Total: ${subtotal-desconto}`)