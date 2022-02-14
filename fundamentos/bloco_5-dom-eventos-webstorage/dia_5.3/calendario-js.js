function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysMonth = document.querySelector('#days');
  const daysMonthChildren = document.querySelector('#days').children;
  const buttonContainer = document.querySelector('.buttons-container');

function createDaysOfTheMonth() {
    for (let i = 0; i < dezDaysList.length; i += 1) {
        const day = dezDaysList[i];
        const daysMonthList = document.createElement('li');
        daysMonthList.innerText = day;

        daysMonth.appendChild(daysMonthList);

        daysMonthList.className = 'day';
        
    };
};
  createDaysOfTheMonth();

function creatingHolidays () {
  for (let i = 0; i <= daysMonthChildren.length; i += 1) {
    let holidays = daysMonthChildren[i];

    if (holidays === daysMonthChildren[25]) {
      holidays.className = 'day holiday';
      //console.log(holidays)

    }
    if (holidays === daysMonthChildren[26]) {
      holidays.className = 'day holiday';
      //console.log(holidays)

      }
    if (holidays === daysMonthChildren[32]) {
      holidays.className = 'day holiday';
      //console.log(holidays)
    }

  }

}
  creatingHolidays();


function addFridayClass () {
  for (let i = 0; i < daysMonthChildren.length; i +=1) {
    let theDays = daysMonthChildren[i];
    if (theDays === daysMonthChildren[5]) {
      theDays.className = 'day friday';
      //console.log(theDays);

    }
    else if (theDays === daysMonthChildren[12]) {
      theDays.className = 'day friday';
      //console.log(theDays);

    }
    else if (theDays === daysMonthChildren[19]) {
      theDays.className = 'day friday';
      //console.log(theDays);

    }
    else if (theDays === daysMonthChildren[26]) {
      theDays.className = 'day holiday friday';
      //console.log(theDays);

    };

  };
 
};
  addFridayClass();

function creatingFeriadosButton () {
  const feriadosButton = document.createElement('button');
  feriadosButton.innerHTML = 'Feriados';
  feriadosButton.className = 'btn-holiday';

  buttonContainer.appendChild(feriadosButton);

  feriadosButton.addEventListener('click', function () {
    const feriadoDays = document.querySelectorAll('.holiday');
    const feriadosButton = document.createElement('button');
    const feriadosColor = 'rgb(238,238,238)';
  
    for (let i = 0; i < feriadoDays.length; i +=1) {
      if (feriadoDays[i].style.backgroundColor != 'yellow') {
        feriadoDays[i].style.backgroundColor = 'yellow';
  
      } else {
        feriadoDays[i].style.backgroundColor = feriadosColor;
  
      };
    };
  });
};
  creatingFeriadosButton();


function creatingFridayButton (theDay) {
  const sextaButton = document.createElement('button');
  sextaButton.id = 'btn-friday';
  sextaButton.innerHTML = theDay;

  buttonContainer.appendChild(sextaButton);

  sextaButton.addEventListener('click', function () {
    const friDays = document.querySelectorAll('.friday');
    let fridayText = 'Sexta o/';
    let friDaysArray = [4, 11, 18, 25];

    for (let i = 0; i < friDays.length; i += 1) {
      if (friDays[i].innerText !== fridayText) {
        friDays[i].innerText = fridayText;
      } else {
        friDays[i].innerText = friDaysArray[i];
      }
    };
  });
};
  creatingFridayButton('Sexta-feira');

  
  function zoomIn () {
    let days = document.querySelector('#days');
    days.addEventListener('mouseover', function (event) {
      event.target.style.fontSize = '25px';
      event.target.style.color = 'green';
    }); 
    //console.log('passou por cima')
  };
  
  function zoomOut () {
    let days = document.querySelector('#days');

    days.addEventListener('mouseout', function (event) {
      event.target.style.fontSize = '20px';
      event.target.style.color = 'gray';
    }); 
    //console.log('saiu de cima')
  };
  zoomIn();
  zoomOut();

  /**implemente uma função que adiciona um atarefa personalizada ao calendário.
   * A função deve receber como parâmetro a string com o nome da tarefa e criar inamicamente um elemento
   * com a tag span contendo a tarefa.
   */

   const myTasks = document.querySelector('.my-tasks');

  function addToDo (toDo) {
    let addSpan = document.createElement('span');
    addSpan.innerText = toDo;
    myTasks.appendChild(addSpan);
  };
  addToDo('Cozinhar');

  function colorDescription (cor) {
    let selected = document.querySelector('div');
    selected.style.backgroundColor = cor;
    selected.className = 'task';
    selected.innerHTML = '';
    myTasks.appendChild(selected);

    selected.addEventListener('click', function (evento) {
      if (evento.target.className !== 'task selected') {
        evento.target.className = 'task selected';
      //console.log('cliquei');
      } else {
        evento.target.className = 'task';
      }
    })
  };
  colorDescription('green');


  