/* Para as funções encode e decode, crie os seguintes testes em Jest:
Teste se encode e decode são funções;

Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;
Teste se as demais letras/números não são convertidos para cada caso;
Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro. */

const { encode, decode } = require('./mapString.js');

describe('testa as funções encode', () => {
  it('a função encode é definida', () => {
    expect(encode).toBeDefined();
  });
  it('encode é função', () => {
    expect(typeof encode).toEqual('function');
  });
  it('converte apenas a vogal A em 1', () => {
    expect(encode('casa')).toEqual('c1s1');
  });
  it('converte apenas a vogal E em 2', () => {
    expect(encode('ele')).toEqual('2l2');
  });
  it('converte apenas a vogal I em 3', () => {
    expect(encode('mini')).toEqual('m3n3');
  });
  it('converte apenas a vogal O em 4', () => {
    expect(encode('ovo')).toEqual('4v4');
  });
  it('converte apenas a vogal U em 5', () => {
    expect(encode('nu')).toEqual('n5');
  });
  it('verifica se o retorno tem o mesmo número de caracteres do parâmetro', () => {
    expect(encode('trybe').length).toEqual(5);
  });
})

describe('testa as funções decode', () => {
  it('a função decode é definida', () => {
    expect(decode).toBeDefined();
  });
  it('decode uma função', () => {
    expect(typeof decode).toEqual('function');
  });
  it('converte apenas o número 1 em A', () => {
    expect(decode('c1s1')).toEqual('casa');
  });
  it('converte apenas o número 2 em B', () => {
    expect(decode('2l2')).toEqual('ele');
  });
  it('converte apenas o número 3 em C', () => {
    expect(decode('m3n3')).toEqual('mini');
  });
  it('converte apenas o número 4 em D', () => {
    expect(decode('4v4')).toEqual('ovo');
  });
  it('converte apenas o número 5 em E', () => {
    expect(decode('n5')).toEqual('nu');
  });
  it('verifica se o retorno tem o mesmo número de caracteres do parâmetro', () => {
    expect(decode('trybe').length).toEqual(5);
  });
})