// EXERCÍCIO 1
// Crie um algoritmo usando o for que leia uma lista.
// Retorne duas novas listas, uma contendo apenas os números pares e outra, os ìmpares.
// Esta lista deve ser assim: [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Lista -> [1,2,3,4,5,6,7,8,9]
// [2, 4, 6, 8] -> pares
// [1, 3, 5, 7, 9] -> impares

let lista = [1,2,3,4,5,6,7,8,9];
let listaPar = [];
let listaImpar = [];

    for (let i = 0; i < lista.length; i++){
        if(lista[i] % 2 === 0){
            listaPar.push(lista[i]);   
        } else {
            listaImpar.push(lista[i]);
        }
    }
    console.log("Pares: ", listaPar);
    console.log("Ímpares: ", listaImpar);

// EXERCICIO 2
// Você é um professor, e tem uma lista com alguns alunos (sendo objetos),
// que contém nome, nota1 e nota2. Use o for para percorer esse array
// e calcular a média das duas notas de cada aluno
// Ao final, imprimir o nome do aluno e a sua média

const listaDeAlunos = [
    { nome: 'João', nota1: 8, nota2: 7 },
    { nome: 'Maria', nota1: 9, nota2: 8 },
    { nome: 'Carlos', nota1: 6, nota2: 5 },
    { nome: 'Ana', nota1: 7, nota2: 6 },
    { nome: 'Pedro', nota1: 10, nota2: 9 },
    { nome: 'Lúcia', nota1: 8, nota2: 7 },
    { nome: 'Fernando', nota1: 7, nota2: 6 },
    { nome: 'Camila', nota1: 9, nota2: 8 },
    { nome: 'Rafael', nota1: 6, nota2: 5 },
    { nome: 'Juliana', nota1: 10, nota2: 9 }
  ];

  for ( const aluno of listaDeAlunos) {
    let media = (aluno.nota1 + aluno.nota2) /2
    console.log (`O aluno ${aluno.nome} tem média igual a ${media} pontos`);
  }

  const listaDeNomes = [
    { nome: 'João', notas: [8, 7] },
    { nome: 'Maria', notas: [9, 8] },
    { nome: 'Carlos', notas: [6, 5] },
    { nome: 'Ana', notas: [7, 6] },
    { nome: 'Pedro', notas: [10, 9] },
    { nome: 'Lúcia', notas: [8, 7] },
    { nome: 'Fernando', notas: [7, 6] },
    { nome: 'Camila', notas: [9, 8] },
    { nome: 'Rafael', notas: [6, 5] },
    { nome: 'Juliana', notas: [10, 9] }
  ];

   for (const nota of listaDeNomes) {
    const totalNotas = nota.notas.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
    let media = totakNotas / 2;
    console.log(media);
   }
   

// EXERCICIO SORTEIO
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