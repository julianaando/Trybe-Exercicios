/* Altere o tipo das variáveis (var) para let ou const para que respeitem o escopo em que foram declaradas.
  Modifique a variável para que respeite o escopo onde está sendo declarada. Lembre-se: para que a variável respeite o escopo, ela não deve ser acessível fora do escopo em que esteja sendo declarada.
  Altere o valor das propriedades do objeto, para que respeite as características da variável do tipo const;
Copie o código abaixo e rode-o para verificar sua saída: */
    const pessoa = {
      nome: 'Henri',
      idade: 20
    }
    pessoa.nome = 'Luna';
    pessoa.idade = 19;
 // Altere essa estrutura para corrigir o erro.
    console.log('Nome:', pessoa.nome);
    console.log('Idade:', pessoa.idade);

/* Modifique a estrutura das funções a seguir para que elas sejam arrow functions;
   Transforme as funções abaixo em uma arrow function. */

  const numeroAleatorio = () => Math.random();
  console.log(numeroAleatorio());

  const hello = nome => `Olá, ${nome}!`;
  let nome = 'Ivan';
  console.log(hello(nome));

  const nomeCompleto = (nome1, sobrenome) => `${nome1} ${sobrenome}`;
  let nome1 = 'Ivan';
  let sobrenome = 'Pires';
  console.log(nomeCompleto(nome1, sobrenome));

  /* Altere a expressão if/else utilizando ternary operator */

  let speed = 80;
  const speedCar = (speed) => 
   (speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`);
  console.log(speedCar(speed));

/* Crie uma função que ligue e desligue um motor de um carro.
  Crie uma variável para armazenar o valor de status do seu motor (lembre-se de armazenar o tipo de variável da forma correta);
  Crie a função ligarDesligar utilizando arrow functions. Ela não receberá nenhum parâmetro;
  Crie a lógica para ligar e desligar o motor (a lógica deverá utilizar uma condicional para ligar e desligar o motor);
  Imprima no terminal “O motor está ligado“ e “O motor está desligado“ (lembre-se de utilizar o template literals nesse momento).
  Bônus (opcional): tente fazer o mesmo exercício utilizando ternary operator. */

  let motor = 'ligado';
  const ligarDesligar = () => (motor === 'ligado' ? motor = 'ligado' : motor = 'desligado')
  console.log(`O motor está ${ligarDesligar()}`);

  /* Crie uma função que calcule a área de um círculo.
  Na matemática, a fórmula para calcular a área de um círculo é: área = PI vezes o raio elevado ao quadrado.
  Com base nessa informação:
    Crie a função circleArea, que recebe o valor do raio como parâmetro, utilizando arrow functions;
    Crie uma variável para armazenar o valor de PI (lembre-se de armazenar o tipo de variável da forma correta);
    Crie a lógica para retornar a área do círculo;
    Imprima no terminal “Essa é a área do círculo: resultado da função“ (lembre-se de utilizar o template literals nesse momento). */
    // const PI = 3.14
    const circleArea = (raio) => {
      if (raio > 0 ) {
        const area = Math.PI * (Math.pow(raio, 2));
        return `Essa é a área do círculo: ${area}.`;
      } 
      return 'Dados inválidos';
    }
    console.log(circleArea(5));

    /* Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.
    Nesse exercício, será necessário utilizar os conhecimentos sobre array, método split e loop for/of.
    Bônus (opcional): Tente fazer o mesmo exercício utilizando o método array.sort(). */

    const longestWord = (text) => {
      const wordArray = text.split(' ');
      let maxLength = 0;
      let result = '';

      for (const word of wordArray) {
        if (word.length > maxLength) {
          maxLength = word.length;
          result = word;
        };
      }
    return result;
    };
    console.log (longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'));

    /* Usando .sort() */

  const longestWord1 = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];
