/* Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
  Exemplo de palíndromo: arara
  verificaPalindrome('arara')
  Retorno esperado: true
  verificaPalindrome('desenvolvimento')
  Retorno esperado: false */

  function verificaPalindromo (string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
      return (true);
    } else {
      return (false);
    }
  }
 console.log(verificaPalindromo('ovo'));

/* Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1]; Valor esperado no retorno da função: 4. */

function indiceDoMaior (numeros) {
  let indiceMaior = 0;
  for (const key in numeros) {
    if(numeros[indiceMaior] < numeros[key]) {
      indiceMaior = key;
    }
  }
  return indiceMaior;
}

console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));

/* Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3];  Valor esperado no retorno da função: 6. */

function indiceDoMenor (numeros) {
  let indiceMenor = 0;
  for (const key in numeros) {
    if(numeros[indiceMenor] > numeros[key]) {
      indiceMenor = key;
    }
  }
  return indiceMenor;
}
console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3]));

/* Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Larissa', 'Cairo', 'Joana']; 
Valor esperado no retorno da função: Larissa. */

function maiorPalavra (palavras) {
  let maiorPalavra = palavras[0]
  for (let key in palavras) {
    if (maiorPalavra.length < palavras[key].length) {
      maiorPalavra = palavras[key];
    }
  }
  return maiorPalavra;
}
console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Larissa', 'Cairo', 'Joana']));

/* Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3];  Valor esperado no retorno da função: 2. */

function repeteMais (numeros) {
  let indiceRepete = 0;
  let arrayRepete = [];
  for (let key in numeros) {
    if (numeros[indiceRepete] === numeros[key]) {
      arrayRepete.push(numeros[indiceRepete]);
    }
  }
  return arrayRepete[0];
}
console.log(repeteMais([2, 3, 2, 5, 8, 2, 3]));