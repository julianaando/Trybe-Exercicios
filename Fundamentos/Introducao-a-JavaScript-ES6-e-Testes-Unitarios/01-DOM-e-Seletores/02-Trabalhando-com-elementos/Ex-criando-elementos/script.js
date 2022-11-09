/* Crie um irmão para elementoOndeVoceEsta.
Crie um filho para elementoOndeVoceEsta.
Crie um filho para primeiroFilhoDoFilho.
A partir desse filho criado, acesse terceiroFilho. */

const pai = document.querySelector('#pai');
const irmaoElemento = document.createElement('section');
irmaoElemento.id = 'irmaoElemento';
pai.appendChild(irmaoElemento);
console.log(pai);