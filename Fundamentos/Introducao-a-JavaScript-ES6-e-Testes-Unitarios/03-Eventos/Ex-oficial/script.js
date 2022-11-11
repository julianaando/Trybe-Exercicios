const createDaysOfTheWeek = () => {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
};

createDaysOfTheWeek();

const createDaysOfMonth = () => {
  const decemberDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const daysList = document.getElementById('days');

  for (let i = 0; i < decemberDaysList.length; i += 1) {
    const dias = decemberDaysList[i];
    const diasListItem = document.createElement('li');
    diasListItem.innerHTML = dias;

    if (dias === 24 || dias === 31) {
      diasListItem.className = 'day holiday';
      daysList.appendChild(diasListItem);
    } else if (dias === 4 || dias === 11 || dias === 18) {
      diasListItem.className = 'day friday';
      daysList.appendChild(diasListItem);
    } else if (dias === 25) {
      diasListItem.className = 'day holiday friday';
      daysList.appendChild(diasListItem);
    } else {
      diasListItem.className = 'day';
      daysList.appendChild(diasListItem);
    }
  }
};
createDaysOfMonth();

// Exercício 2
const newButton = document.createElement('button');
function button(buttonName) {
  const buttonContainer = document.querySelector('.buttons-container');

  const newButtonId = 'btn-holiday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonId;
  buttonContainer.appendChild(newButton);
}

button('Feriados');

// Exercício 3

function mudaCor() {
  let botaoClick = document.querySelector('#btn-holiday');
  let feriado = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)'; // armazena a cor da configuração inicial;
  let novaCor = 'purple'; // armazena a nova cor que será utilizada ao pressionar o botão.

  botaoClick.addEventListener('click', () => {
    for (i = 0; i < feriado.length; i += 1) {
      if (feriado[i].style.backgroundColor === novaCor) {
        feriado[i].style.backgroundColor = backgroundColor;
      } else {
        feriado[i].style.backgroundColor = novaCor;
      }
    }
  });
}
mudaCor();
