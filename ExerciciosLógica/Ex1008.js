// SALÁRIO 

// Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse funcionário. A seguir, mostre o número e o salário do funcionário, com duas casas decimais.

// Entrada
// O arquivo de entrada contém 2 números inteiros e 1 número com duas casas decimais, representando o número, quantidade de horas trabalhadas e o valor que o funcionário recebe por hora trabalhada, respectivamente.

// Saída
// Imprima o número e o salário do funcionário, conforme exemplo fornecido, com um espaço em branco antes e depois da igualdade. No caso do salário, também deve haver um espaço em branco após o $.

// Exemplos de Entrada	                 Exemplos de Saída
// 25
// 100                                  NUMBER = 25
// 5.50                                 SALARY = U$ 550.00                                 


// 1
// 200                                  NUMBER = 1
// 20.50                                SALARY = U$ 4100.00

// 6
// 145                                  NUMBER = 6
// 15.55                                SALARY = U$ 2254.75


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numeroFuncionario = parseInt(lines.shift());
var horasTrabalhadas = parseInt(lines.shift());
var valorPorHora = float(lines.shift());

console.log('NUMERO = ' + numeroFuncionario);
console.log('SALARIO = R$' + (horasTrabalhadas * valorPorHora));


