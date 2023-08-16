/*
  Faça um programa com uma função chamada somaImposto.
  A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa em porcentagem e custo, que é o custo de um item antes do imposto. 
  A função “altera” o valor de custo para incluir o imposto sobre vendas.
*/

function somarImposto (custoProduto, taxaImposto){
    const novoCusto = custoProduto * (taxaImposto/100) + custoProduto;
    return{
        novoCusto,
        custoProduto
    }
    }
console.log (somarImposto(10, 20));

/*
  Seja n o enésimo termo da sequência de Fibonacci, ele é calculado como:
  
  F(n) = F(n-1) + F(n-2)

  Ou seja, cada elemento da sequência é a soma dos dois anteriores, onde:
  
  F(1) = 0
  F(2) = 1

  Crie um script que pede ao usuário um termo qualquer da série de Fibonacci e ele exiba tal termo.

  Ex: 0, 1, 1, 2, 3, 5, 8, 13

*/

function fibonacci (n) {
  if (n === 0) {
      return 0;
  } else if (n === 1) {
      return 1;
  } else {
      return fibonacci (n-1) + fibonacci (n-2);
  }
}
const imput =parseInt(prompt("Digite um número: "));
const retorno = fibonacci(imput);
console.log(`O termo ${imput} da sequencia de Fibonacci é: ${retorno}`);