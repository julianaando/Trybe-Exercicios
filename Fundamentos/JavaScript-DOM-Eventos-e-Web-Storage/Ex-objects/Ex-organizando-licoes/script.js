/* Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

Crie uma função para mostrar o tamanho de um objeto.

Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro. 

Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves lesson1, lesson2 e lesson3. 

*/

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const turnoNoite = (obj, key, value) => {
  obj[key] = value;
};

turnoNoite(lesson2, 'turno', 'noite');
// console.log(lesson2);

const listKeys = (obj) => {
  return Object.keys(obj);
};
// console.log(listKeys(lesson2));

const sizeObj = (obj) => {
  return Object.entries(obj).length;
};
// console.log(sizeObj(lesson2));

const listValue = (obj) => {
  return Object.values(obj);
};
// console.log(listValue(lesson2));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
// console.log(allLessons);

//Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

const allStudents = () => {
  const estudantes =
    allLessons.lesson1.numeroEstudantes +
    allLessons.lesson2.numeroEstudantes +
    allLessons.lesson3.numeroEstudantes;
  console.log(`O número total de estudante nas aulas é de ${estudantes}`);
};
// allStudents();

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

const valueKey = (obj, number) => {
  return Object.values(obj)[number];
};
// console.log(valueKey(allLessons, 1));

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles o objeto, o nome da chave e o valor da chave.

const verificaPar = (obj, key, value) => {
  const entries = Object.entries(obj);
  let isEqual = false;
  for (let index in entries) {
    if (entries[index][0] === key && entries[index][1] === value)
      isEqual = true;
  }
  return isEqual;
};
console.log(verificaPar(lesson2, 'professor', 'Joana'));
