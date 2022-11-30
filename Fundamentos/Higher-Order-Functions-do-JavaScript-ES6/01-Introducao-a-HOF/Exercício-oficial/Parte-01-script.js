/* --------- Nova pessoa contratada ---------- 
Você ficou responsável por organizar o sistema de contratação de uma empresa e deve criar uma estrutura de dados que possua o formato { nomeCompleto, email } para representar a nova pessoa contratada. Além disso, você deve gerar os emails de cada pessoa que é contratada na empresa. Para isso:
--- Crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora e que automaticamente gere um email no formato nome_da_pessoa@trybe.com;
--- Utilize a função newEmployees, definida abaixo, para receber a sua função como parâmetro e criar o objeto de cada pessoa contratada. */

const criarObjetos = (nomeDaPessoa) => {
  const email = nomeDaPessoa.toLowerCase().replace(' ', '_');
  return { nomeDaPessoa, email: `${email}@trybe.com` };
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  };
  return employees;
};

// console.log(newEmployees(criarObjetos));

/*  -------- Sorteador de loteria ---------- 
Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”). */

const checarNumero = (aposta, numeroSorteado) => aposta === numeroSorteado;

const sorteio = (aposta, funcao) => {
  const numeroSorteado = Math.floor((Math.random() * 5) + 1);
  console.log(numeroSorteado);
  return funcao(aposta, numeroSorteado) ? 'Lucky day, you won!' : 'Try Again!';
};
// console.log(sorteio(2, checarNumero));

/* Corretor automático de exame 

Crie uma HOF que receberá três parâmetros:
--- O primeiro será um array de respostas corretas (soluções);
--- O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
--- O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:
------ Uma resposta correta adiciona 1 ponto à pontuação final total+=1;
------ A ausência de uma resposta não altera a pontuação (quando for “N.A”);
------ Uma resposta incorreta reduz a pontuação final em 0.5 ponto. total-=0.5
------ Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays: return total pontos */

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswers, studentAnswers) => {
  if (rightAnswers === studentAnswers) {
    return 1;
  } if (studentAnswers === 'N.A') {
    return 0;
  }
  return -0.5;
};

const countPoints = (rightAnswers, studentAnswers, callback) => {
  let totalPontos = 0;
  for (let i = 0; i < rightAnswers.length; i += 1) {
    const callbackReturn = callback(rightAnswers[i], studentAnswers[i]);
    totalPontos += callbackReturn;
  }
  return `Resultado final: ${totalPontos} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));
