/* Exercício 1 */

const a = 25;
const b = 8;

const soma = a + b;
const subtracao = a - b; 
const multiplicacao = a * b;
const divisao = a / b;
const modulo = a % b; 
console.log(soma, subtracao, multiplicacao, divisao, modulo);

/* Exercício 2 */

const m = 16;
const n = 38;

if (m > n){
  console.log("16 é maior que 38");
} else {
  console.log("38 é maior que 16");
};

/* Exercício 3 */

const t = 9;
const u = 17;
const v = 43;

if (t > u && t > v) {
  console.log('O maior número é: ' + t + ' (t)');
} else if (u > t && u > v) {
  console.log('O maior número é: ' + u + ' (u)');
} else {
  console.log('O maior número é: ' + v + ' (v)');
}

/* Exercício 4 */

let valor = 0;

if (valor > 0) {
  console.log('Esse número é positivo');
} else if (valor < 0) {
  console.log('Esse número é negativo');
} else {
  console.log('Esse número é zero');
}

/* Exercício 5 */

let ang1 = 60;
let ang2 = 60;
let ang3 = 60;
let somaDosAngulos = ang1 + ang2 + ang3;
let angulosPositivos = ang1 > 0 && ang2 > 0 && ang3 > 0;

if (angulosPositivos) {
  if (somaDosAngulos === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Dados inválidos');
};

/* Exercício 6 */

let pecas = 'bispo';

switch (pecas.toLowerCase()) {
  case 'bispo': 
    console.log('A peça ' + pecas + ' se movimenta na diagonal');
    break;
  case 'torre':
    console.log('A peça ' + pecas + ' se movimenta nas laterais');
    break;
  case 'cavalo':
    console.log('A peça ' + pecas + ' se movimenta em L');
    break;
  case 'rainha':
    console.log('A peça ' + pecas + ' se movimenta para todos os lados');
    break;
  case 'peão':
    console.log('A peça ' + pecas + ' se movimenta uma casa por vez');
    break;
  case 'rei':
    console.log('A peça ' + pecas + ' se movimenta uma casa por vez');
    break;
  default:
    console.log('Dado inválido');
}

/* Exercício 7 */

let nota = -1;

if(nota >= 90 && nota < 100) {
  console.log('A sua nota é A');
} else if (nota >= 80 && nota < 90) {
  console.log('A sua nota é B');
} else if (nota >= 70 && nota < 80) {
  console.log('A sua nota é C');
} else if (nota >= 60 && nota < 70) {
  console.log('A sua nota é D');
} else if (nota >= 50 && nota < 60) {
  console.log('A sua nota é E');
} else if (nota <= 50 && nota >= 0) {
  console.log('A sua nota é F');
} else {
  console.log('Dado inválido');
};

/* Exercício 8 */

const one = 5;
const two = 19;
const three = 22;

let isEven = false;

if ((one % 2 === 0 || two % 2 === 0 || three % 2 === 0)) {
  isEven = true;
};
console.log(isEven);

/* Exercício 9 */

const one1 = 2;
const two2 = 10;
const three3 = 22;

let isOdd = false;

if ((one1 % 2 !== 0 || two2 % 2 !== 0 || three3 % 2 !== 0)) {
  isOdd = true;
};
console.log(isOdd);

/* Exercício 10 */

const quantidadeProduto = 1000;
const custoTotal = (212 + (0.2*212));
const valorVenda = 675;
let lucro = (valorVenda*quantidadeProduto) - (custoTotal*quantidadeProduto);

if (custoTotal > 0 && valorVenda > 0) {
  console.log('O lucro da venda é de ' + lucro);
} else {
  console.log('Dado inválido');
}

/* Exercício 11 */


let aliquotINSS;
let aliquotIR;

const grossSalary = 3000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

const baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));






