/* Faça uma função chamada fruitSalad, passando como parâmetro specialFruit e additionalItens; faça a função retornar uma lista única, contendo todos os itens da nossa salada de frutas, usando o spread. */

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Mexerica', 'Abacaxi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Uva', 'Morango', 'Pêra'];

const fruitSalad = (fruit, additional) => {
  const favoriteFruits = [...fruit, ...additional];
  return favoriteFruits;
};

console.log(fruitSalad(specialFruit, additionalItens));