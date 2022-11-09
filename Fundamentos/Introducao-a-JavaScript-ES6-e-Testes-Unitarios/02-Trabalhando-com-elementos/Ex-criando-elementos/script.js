/* Crie um irmão para elementoOndeVoceEsta.
Crie um filho para elementoOndeVoceEsta.
Crie um filho para primeiroFilhoDoFilho.
A partir desse filho criado, acesse terceiroFilho. */

const pai = document.querySelector('#pai');
const irmaoElemento = document.createElement('section');
irmaoElemento.id = 'irmaoElemento';
pai.appendChild(irmaoElemento);

const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const filhoElemento = document.createElement('section');
filhoElemento.id = 'filhoElemento';
elementoOndeVoceEsta.appendChild(filhoElemento);


const filhoDoFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const primeiroFilho = document.createElement('section');
primeiroFilho.id = 'primeiroFilhoDoFilhoDoFilho';
filhoDoFilhoDoFilho.appendChild(primeiroFilho);

console.log(filhoDoFilhoDoFilho.parentElement.nextElementSibling);


