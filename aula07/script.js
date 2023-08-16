/*Faça uma rotina com e sem recursão em JavaScript para encontrar o fatorial de um número:
n! = n.(n – 1).(n – 2).(n – 3)...2,1. */

//SEM RECURSIVIDADE
const n = parseInt(prompt("Digite um número: "));
let i;
let resultado = n;

for (i = 1; i < n; i++) {
    resultado = resultado*(n-i);
}
if(n === 0){
    resultado = 1;
}
console.log(`O fatorial de ${n} é: ${resultado}`);

//COM RECURSIVIDADE
function fatorial (n) {
    if (n === 0){
        return 1;
    } else {
        return n*(fatorial(n-1));
    }
}
const input =parseInt(prompt("Digite um número: "));
const retorno = fatorial(input);
console.log(`O fatorial de ${input} é: ${retorno}`);
