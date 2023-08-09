// EXERCICIO
// Você foi convidado para desenvolver um script para realizar os sorteios para uma casa
// de apostas (estilo mega sena). O sorteio consiste em 6 dezenas aleatórias, entre 1 e 60.
// Para gerar um número aleatório, pode-se utilizar o método random(), da biblioteca Math:
// Math.round(Math.random() * 59 + 1)


let sixNumbers = [];

while (sixNumbers.length < 6){
    let number = Math.round(Math.random() * 59 + 1);
    if (!sixNumbers.includes(number)) {
        sixNumbers.push(number);
    }
}
console.log(sixNumbers);