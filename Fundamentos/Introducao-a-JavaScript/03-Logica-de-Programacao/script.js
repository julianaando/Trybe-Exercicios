/* Exercício 1 */
let fatorial = 1;
let numeros = [];

for (let i = 10; i > 0; i-= 1) {
  fatorial *= i;
  numeros.push(i);
}

console.log("O fatorial de 10 é " + numeros.join('*') + '= ' + fatorial );

/* Exercício 2 */

let word = 'tryber';
let reverse = '';

for (let i = 0; i < word.length; i+= 1) {
  reverse += word[word.length - 1 - i];
}

console.log(reverse);

/* Exercício 3 */
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let i = 0; i < array.length; i++) {
  if (array[i].length > maiorPalavra.length){
    maiorPalavra = array[i];
  }
}

for (let i = 0; i < array.length; i++) {
  if (array[i].length < menorPalavra.length) {
    menorPalavra = array[i];
  }
}

console.log(maiorPalavra);
console.log(menorPalavra);

/* Exercício 4 */
