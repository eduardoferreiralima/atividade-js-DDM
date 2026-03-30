/**
 * Lista de Tarefas (Mini To-Do)
Simule uma lista de tarefas usando um array. Crie funcoes para: 
adicionar(tarefa), remover(indice), marcarConcluida(indice) e listar(). 
Cada tarefa deve ser um objeto { texto, concluida }. 
Demonstre o uso das funcoes com exemplos.

// Exemplo de uso:
adicionar("Estudar JavaScript")
adicionar("Fazer exercicios")
adicionar("Revisar codigo")
listar()
→ [ ] Estudar JavaScript
→ [ ] Fazer exercicios
→ [ ] Revisar codigo

marcarConcluida(0)
listar()
→ [x] Estudar JavaScript
→ [ ] Fazer exercicios
→ [ ] Revisar codigo

remover(1)
listar()
→ [x] Estudar JavaScript
→ [ ] Revisar codigo
 */
const prompt = require('prompt-sync')();
class ToDo {
    constructor(){
        this.tarefa = [];
    }

    adicionar(tarefa){
        this.tarefa.push({ texto: tarefa, concluida: false });
    }
    
    listar(){
        for(let i = 0; i<this.tarefa.length; i++){
            if (this.tarefa[i].concluida){
                console.log(`Tarefa ${i}: [X] - ${this.tarefa[i].texto}`)
            }else console.log(`Tarefa ${i}: [ ] - ${this.tarefa[i].texto}`)
        }
    }

    marcarConcluida(indice){
        for(let i = 0; i<this.tarefa.length; i++){
            if (i === indice){
                this.tarefa[i].concluida = true;
                break;
            }
        }
    }

    remover(indice){
        for(let i = 0; i<this.tarefa.length; i++){
            if (indice === i){
                this.tarefa.pop(this.tarefa[i])
                return;
            }
        }
    }
}

const minhaLista = new ToDo();
let rodando = true;

while (rodando) {
    console.log(`
1. Adicionar Tarefa
2. Listar Tarefas
3. Concluir Tarefa
4. Remover Tarefa
0. Sair
    `);
    
    const opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
        case '1':
            const txt = prompt("Digite a tarefa: ");
            minhaLista.adicionar(txt);
            break;
        case '2':
            minhaLista.listar();
            break;
        case '3':
            const idxConcluir = parseInt(prompt("Índice para concluir: "));
            minhaLista.marcarConcluida(idxConcluir);
            break;
        case '4':
            const idxRemover = parseInt(prompt("Índice para remover: "));
            minhaLista.remover(idxRemover);
            break;
        case '0':
            console.log("Saindo...");
            rodando = false;
            break;
        default:
            console.log("Opção inválida!");
    }
}
