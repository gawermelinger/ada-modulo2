// EXERCÍCIO EM GRUPO: Gabriella Wermelinger, Octávio Massaro, Samuel Cavalcanti, Diego Ferreira e Ana Emília Capistrano

let salario = 1200;
let porcentagemAumento;


console.log(`Valor antes do reajuste: R$ ${salario.toFixed(2)}`);

if (!isNaN(salario)){
    if(salario <= 1500){
        porcentagemAumento = 0.2;
    }else if(salario <= 1700){
        porcentagemAumento = 0.15;
    }else if(salario <= 2000){
        porcentagemAumento = 0.1;
    }else{
        porcentagemAumento = 0.05;
    }
}

console.log(`Valor da porcentagem do aumento: ${100*porcentagemAumento}%`);
let novoSalario = salario * (1 + porcentagemAumento);

console.log(`Valor após o reajuste: R$ ${novoSalario.toFixed(2)}`);

let aumentoSalarial = novoSalario - salario;

console.log(`Valor do aumento: R$ ${aumentoSalarial.toFixed(2)}`);