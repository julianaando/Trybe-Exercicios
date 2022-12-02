/* Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes.
Dica: faça com que o array de nomes seja um array de letras. */

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

const letterArray = names.join('').toLowerCase().split('');

const countA = (array) => {
  return letterArray.reduce((acc, curr) => curr === 'a' ? acc += 1 : acc, 0);
}

console.log(countA(names));