// Defina uma função chamada concatStrings() que aceite um número arbitrário de argumentos do tipo string e retorne todas as strings concatenadas em uma única string. 

const concatStrings = (...args) => args.reduce((acc, curr) => acc + curr);

// console.log(concatStrings('hello', 'world')); // Output: 'helloworld'
// console.log(concatStrings('hello', 'world', 'how', 'are', 'you')); // Output: 'helloworldhowareyou'

// Defina uma função chamada findMax() que aceite um número arbitrário de argumentos do tipo number e retorne o maior número entre todos os argumentos. 

const findMax = (...args) => args.reduce((acc, curr) => curr > acc ? curr : acc);

// console.log(findMax(1, 2, 3, 4, 5)); // Output: 5
// console.log(findMax(5, 4, 3, 2, 1)); // Output: 5
// console.log(findMax(-1, -2, -3, -4, -5)); // Output: -1

// Defina uma função chamada removeDuplicates() que aceite um número arbitrário de argumentos do tipo number e retorne um array contendo todos os argumentos sem repetições.

const removeDuplicates = (...args) => {
  return args.reduce((acc, curr) => {
    return acc.includes(curr) ? acc : [...acc, curr]
  }, []);
}
console.log(removeDuplicates(1, 2, 3, 4, 5, 1, 2, 3, 4, 5)); // Output: [1, 2, 3, 4, 5]
console.log(removeDuplicates(1, 1, 1, 1, 1, 1, 1, 1, 1, 1)); // Output: [1]
console.log(removeDuplicates(-1, -2, -3, -1, -2, -3)); // Output: [-1, -2, -3]

