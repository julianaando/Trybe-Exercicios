/* Acesse o elemento elementoOndeVoceEsta.
Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
Acesse o primeiroFilho a partir de pai.
Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
Agora acesse o terceiroFilho a partir de pai. */

const ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');
console.log(ondeVoceEsta);

const pai = ondeVoceEsta.parentElement; 
pai.style.color = 'red';

ondeVoceEsta.firstElementChild.innerHTML = "Texto criado novo";

const primeiroFilho = pai.firstElementChild;

const atencao = ondeVoceEsta.nextSibling;
console.log(atencao);

const terceiro = ondeVoceEsta.nextElementSibling;
console.log(terceiro);

const terceiroPai = pai.lastElementChild.previousElementSibling;
console.log(terceiroPai);