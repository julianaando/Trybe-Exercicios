/* Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b) Subtração (a - b) Multiplicação (a * b) Divisão (a / b) Módulo (a % b) */

function plus (a, b) {
  return a + b;
}
console.log(plus (3,9));

function minus (a, b) {
  return a - b;
}
console.log(minus (82,46));

function times (a, b) {
  return a * b;
}
console.log(times (42,7));

function division (a, b) {
  return a / b;
}
console.log(division (95,5));

function module (a, b) {
  return a % b;
}
console.log(module (57,6));

/* Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados. */



function higherNumber () {
  let number1 = 35;
  let number2 = 78;
  if (number1 > number2) {
    console.log('O número '+ number1 + ' é maior que ' + number2 + '.');
  } else if (number2 > number1) {
    console.log('O número '+ number2 + ' é maior que ' + number1 + '.');
  } else {
    console.log('Os números '+ number1 + ' e ' + number2 + ' são iguais.');
  }
}
higherNumber();

/* Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados. */

function maiorNumero () {
  let numero1 = 12;
  let numero2 = 966;
  let numero3 = 28;
  if (numero1 > numero2 && numero1 > numero3) {
    console.log('O número '+ numero1 + ' é maior que ' + numero2 + ' e ' + numero3);
  } else if (numero2 > numero1 && numero2 > numero3) {
    console.log('O número '+ numero2 + ' é maior que ' + numero1 + ' e ' + numero3);
  } else if (numero3 > numero1 && numero3 > numero2) {
    console.log('O número '+ numero2 + ' é maior que ' + numero1 + ' e ' + numero3);
  } else {
    console.log('Os números '+ numero1 + ', ' + numero2 + ' e ' + numero3 + ' são iguais.');
  }
}
maiorNumero();

/* Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”. */

function positiveNegative (a){
  if(a > 0) {
    return 'The number ' + a + ' is positive';
  } else if (a < 0) {
    return 'The number ' + a + ' is negative';
  } else {
    return 'The number ' + a + ' is zero';
  }
}

console.log(positiveNegative(8));
console.log(positiveNegative(-52));
console.log(positiveNegative(0));

/* Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo. */

function triangle (a, b, c) {
  if (a > 0 && b > 0 && c > 0) {
    if (a + b + c === 180) {
      console.log ('We have a triangle!');
    } else {
      console.log ("We don't have a triangle :(");
    }
  } else {
    console.log ('Invalid angle');
  }
}

triangle (60, -52, 60);
