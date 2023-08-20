/*Exercício: push()
Crie um novo array vazio.
1- Utilize o método "push" para adicionar um elemento ao final do array.
2- Utilize o método "push" novamente para adicionar outro elemento ao final do array.
3- Verifique o comprimento (length) do array para confirmar que os elementos foram adicionados corretamente.
let arr = [];
arr.push(1);
arr.push(2);
console.log(arr, arr.length);

/*Exercício: pop()
Temos a lista:
const numeros = [1, 2, 3, 4];
1- Utilize o método "pop" para remover o último elemento do array.
2- Verifique o comprimento (length) do array para confirmar que o elemento foi removido corretamente.
3- Utilize o método "pop" novamente para remover outro elemento do array.
4- Verifique o comprimento (length) do array novamente para confirmar que o segundo elemento foi removido corretamente.
const numeros = [1, 2, 3, 4]
numeros.pop();
console.log(numeros, numeros.length);
numeros.pop();
console.log(numeros, numeros.length);

/*Exercício: shift()
Temos a lista:
const linguagens = ['javascript', 'python', 'golang', 'java']
1- Utilize o método "shift" para remover o primeiro elemento do array.
2- Verifique o comprimento (length) do array para confirmar que o elemento foi removido corretamente.
3- Utilize o método "shift" novamente para remover outro elemento do array.
4- Verifique o comprimento (length) do array novamente para confirmar que o segundo elemento foi removido corretamente.
const linguagens = ['javascript', 'python', 'golang', 'java'];
linguagens.shift();
console.log(linguagens, linguagens.length);
linguagens.shift();
console.log(linguagens, linguagens.length);


/*Exercício: at()
Temos a lista:
const produtos = ['sabao', 'detergente', 'amaciante', 'alvejante', 'sapolio'] 
1- Utilize o método "at" para acessar o primeiro elemento do array. Lembre-se de que o índice do primeiro elemento é 0.
2- Utilize o método "at" novamente para acessar o terceiro elemento do array.
3- Utilize o método "at" mais uma vez para acessar o último elemento do array. Lembre-se de que o índice do último elemento é o comprimento do array menos 1.
4- Verifique se você conseguiu acessar os elementos corretamente.
const produtos = ['sabao', 'detergente', 'amaciante', 'alvejante', 'sapolio'] 
console.log(produtos.at(0));
console.log(produtos.at(2));
console.log(produtos.at(produtos.length - 1));

/*Exercício: concat()
Temos essa duas listas:
const lista1 = ['banana', 'pera', 'melancia'];
const lista2 = ['alface', 'tomate', 'rucula'];
1- Utilize o método "concat" para mesclar a lista1 e lista2 em um novo array.
2- Verifique o comprimento (length) do novo array para confirmar que os elementos foram mesclados corretamente.
3- Tente utilizar o método "concat" com mais algumas listas, mesclando todas em uma só.

const lista1 = ['banana', 'pera', 'melancia'];
const lista2 = ['alface', 'tomate', 'rucula'];
const lista3 = ['limao', 'laranja', 'acerola'];
const lista4 = ['pimenta', 'pimentao', 'alho'];

let listaA = lista1.concat(lista2);
console.log(listaA, listaA.length);
let listaB = lista1.concat(lista2, lista3, lista4);
console.log(listaB, listaB.length);

/*Exercício: every()
Temos essa lista de pessoas:
var pessoas = [
	{ nome: "João", idade: 22 },
	{ nome: "Maria", idade: 17 },
	{ nome: "Pedro", idade: 18 },
	{ nome: "Ana", idade: 22 },
	{ nome: "Carlos", idade: 16 }
];
1- Utilize o método "every" para verificar se todos os alunos têm idade maior ou igual a 18 anos.
2- Utilize o método "every" novamente para verificar se todos os alunos têm nome com mais de 3 caracteres.
3- Utilize o método "every" mais uma vez para verificar se todos os alunos têm idade e nome definidos.
4- Verifique se você conseguiu utilizar o método "every" corretamente.
var pessoas = [
	{ nome: "João", idade: 22 },
	{ nome: "Maria", idade: 17 },
	{ nome: "Pedro", idade: 18 },
	{ nome: "Ana", idade: 22 },
	{ nome: "Carlos", idade: 16 }
];
function isOldEnoughy (pessoas){
    return pessoas.idade >= 18;
}
const arr10 = pessoas.every(isOldEnoughy);
console.log(arr10);

function isBigEnoughy (pessoas){
    return pessoas.nome.length > 3;
}
const arr11 = pessoas.every(isBigEnoughy);
console.log(arr11);*/

/*Exercício: filter()
Temos a lista de alunos:
const alunos = [
  { nome: 'Ana', idade: 20 },
  { nome: 'Pedro', idade: 18 },
  { nome: 'Maria', idade: 22 },
  { nome: 'João', idade: 17 },
  { nome: 'Lucas', idade: 19 },
  { nome: 'Julia', idade: 21 }
]
1- Utilize o método "filter" para criar um novo array com os alunos que têm idade maior ou igual a 18 anos.
2- Utilize o método "filter" novamente para criar um novo array com os alunos que têm idade menor que 20 anos.
3- Utilize o método "filter" mais uma vez para criar um novo array com os alunos cujo nome começa com a letra "J".
4- Verifique se você conseguiu utilizar o método "filter" corretamente.
const alunos = [
    { nome: 'Ana', idade: 20 },
    { nome: 'Pedro', idade: 18 },
    { nome: 'Maria', idade: 22 },
    { nome: 'João', idade: 17 },
    { nome: 'Lucas', idade: 19 },
    { nome: 'Julia', idade: 21 }
  ]
function higherThan (alunos){
    return alunos.idade >= 18;
}
const arr2 = alunos.filter(higherThan);
console.log(arr2);

function lowerThan (alunos){
    return alunos.idade < 20;
}
const arr3 = alunos.filter(lowerThan);
console.log(arr3);

function startJ (alunos){
    return alunos.nome[0] === 'J';
}
const arr4 = alunos.filter(startJ);
console.log(arr4);

/*Exercício: find()
Temos a lista de lugares:
const lugares = [
  { nome: 'Sala de Reuniões', capacidade: 8 },
  { nome: 'Auditório', capacidade: 50 },
  { nome: 'Sala de Treinamento', capacidade: 20 },
  { nome: 'Sala de Conferências', capacidade: 30 },
  { nome: 'Sala de Estudos', capacidade: 12 }
]
1- Utilize o método "find" para encontrar o primeiro lugar que tenha capacidade máxima de pelo menos 10 pessoas.
2- Utilize o método "find" novamente para encontrar o primeiro lugar que tenha capacidade máxima de pelo menos 25 pessoas.
3- Utilize o método "find" mais uma vez para encontrar o primeiro lugar que tenha capacidade máxima de pelo menos 40 pessoas.
4- Verifique se você conseguiu utilizar o método "find" corretamente.
const lugares = [
    { nome: 'Sala de Reuniões', capacidade: 8 },
    { nome: 'Auditório', capacidade: 50 },
    { nome: 'Sala de Treinamento', capacidade: 20 },
    { nome: 'Sala de Conferências', capacidade: 30 },
    { nome: 'Sala de Estudos', capacidade: 12 }
];
function hasCapacity (lugares){
    return lugares.capacidade > 10;
}
const arr5 = lugares.find(hasCapacity);
console.log(arr5);

/*Exercício: forEach()
Temos uma lista de sabores de pizza e seus valores:
const pizzas = [
  { sabor: 'Mussarela', valor: 20 },
  { sabor: 'Calabresa', valor: 25 },
  { sabor: 'Marguerita', valor: 28 },
  { sabor: 'Frango com Catupiry', valor: 32 },
  { sabor: 'Portuguesa', valor: 30 }
]
1- Utilize o método "forEach" para percorrer a lista de pizzas e imprimir no console o nome do sabor da pizza e seu valor.
2- Verifique se você conseguiu utilizar o método "forEach" corretamente.
const pizzas = [
    { sabor: 'Mussarela', valor: 20 },
    { sabor: 'Calabresa', valor: 25 },
    { sabor: 'Marguerita', valor: 28 },
    { sabor: 'Frango com Catupiry', valor: 32 },
    { sabor: 'Portuguesa', valor: 30 }
]
function cardapio (pizzas){
   let sabor = pizzas.sabor;
   let valor = pizzas.valor; 
   console.log(`A pizza ${sabor} custa ${valor}`);
}
const arr6 = pizzas.forEach(cardapio);
console.log(arr6);


/*Exercício: map()
Temos uma lista de pessoas com seus respectivos nomes, alturas e pesos:
const pessoas = [
  { nome: 'João', altura: 1.75, peso: 80 },
  { nome: 'Maria', altura: 1.68, peso: 60 },
  { nome: 'Pedro', altura: 1.80, peso: 70 },
  { nome: 'Ana', altura: 1.65, peso: 55 },
  { nome: 'Carlos', altura: 1.90, peso: 100 }
]
1- Utilize o método "map" para criar um novo array de objetos que contenha somente o nome e o IMC (índice de massa corporal) de cada pessoa, sendo que o IMC é calculado pela fórmula peso / altura².
2- Verifique se você conseguiu utilizar o método "map" corretamente.*/
const pessoas = [
    { nome: 'João', altura: 1.75, peso: 80 },
    { nome: 'Maria', altura: 1.68, peso: 60 },
    { nome: 'Pedro', altura: 1.80, peso: 70 },
    { nome: 'Ana', altura: 1.65, peso: 55 },
    { nome: 'Carlos', altura: 1.90, peso: 100 }
];



/*Exercício: reduce()
Temos a lista de alunos com suas notas:
const alunos = [
  { nome: 'Ana', notas: [7, 8, 9] },
  { nome: 'Pedro', notas: [5, 6, 7] },
  { nome: 'Maria', notas: [9, 8, 10] },
  { nome: 'João', notas: [6, 7, 8] },
  { nome: 'Lucas', notas: [8, 9, 7] },
  { nome: 'Julia', notas: [10, 8, 9] }
]
1- Utilize o método "map" para criar um novo objeto com o nome e a média de cada aluno.
2- A média deve ser calculada utilizando o método "reduce" para somar as notas e dividi-las pelo número de notas.
3- Verifique se você conseguiu utilizar o método "reduce" corretamente.*/

/*Exercício: reverse()
Temos a lista:
const numeros = [1, 2, 3, 4, 5]
1- Utilize o método "reverse" para inverter a ordem dos elementos do array.
2- Verifique se a lista ficou com os elementos na ordem inversa: 5, 4, 3, 2, 1.
const numeros1 = [1, 2, 3, 4, 5];
numeros1.reverse();
console.log(numeros1);

/*Exercício: some()
Temos a lista de empregados com seus respectivos nomes e salários:
const empregados = [
  { nome: 'João', salario: 1200 },
  { nome: 'Maria', salario: 1500 },
  { nome: 'Pedro', salario: 1800 },
  { nome: 'Ana', salario: 1400 },
  { nome: 'Carlos', salario: 2000 }
]
1- Utilize o método "some" para verificar se pelo menos um dos empregados tem salário maior ou igual a R$ 1.500,00.
2- Utilize o método "some" novamente para verificar se pelo menos um dos empregados tem salário menor ou igual a R$ 1.000,00.
3- Verifique se você conseguiu utilizar o método "some" corretamente.
const empregados = [
    { nome: 'João', salario: 1200 },
    { nome: 'Maria', salario: 1500 },
    { nome: 'Pedro', salario: 1800 },
    { nome: 'Ana', salario: 1400 },
    { nome: 'Carlos', salario: 2000 }
  ];
function isBiggerThan (empregados){
    return empregados.salario >= 1500;
}
const arr7 = empregados.some(isBiggerThan);
console.log(arr7);

function isLowerThan (empregados){
    return empregados.salario <= 1000;
}
const arr8 = empregados.some(isLowerThan);
console.log(arr8);

/*Exercício: sort()
Temos uma lista de atletas com seus respectivos nomes, alturas e pesos:
const atletas = [
  { nome: 'João', altura: 1.75, peso: 80 },
  { nome: 'Maria', altura: 1.68, peso: 60 },
  { nome: 'Pedro', altura: 1.80, peso: 70 },
  { nome: 'Ana', altura: 1.65, peso: 55 },
  { nome: 'Carlos', altura: 1.90, peso: 100 }
]
1- Utilize o método "sort" para ordenar a lista de atletas em ordem crescente de peso.
2- Utilize o método "sort" novamente para ordenar a lista de atletas em ordem decrescente de altura.
3- Utilize o método "sort" mais uma vez para ordenar a lista de atletas em ordem alfabética de nome.
4- Verifique se você conseguiu utilizar o método "sort" corretamente.
const atletas = [
    { nome: 'João', altura: 1.75, peso: 80 },
    { nome: 'Maria', altura: 1.68, peso: 60 },
    { nome: 'Pedro', altura: 1.80, peso: 70 },
    { nome: 'Ana', altura: 1.65, peso: 55 },
    { nome: 'Carlos', altura: 1.90, peso: 100 }
  ];

function weight (atletas){
    return atletas.peso;
}
const arr9 = atletas.sort(weight);
console.log(arr9);*/
