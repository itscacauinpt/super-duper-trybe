let toDo = [
    'varrer a casa',
    'arrumar quarto',
    'varrer a casa',
    'arrumar quarto',
    'varrer a casa',
    'arrumar quarto',
]

let listOne = document.getElementsByClassName('listOne')[0];


for (let i = 0; i < toDo.length; i +=1) {
   let listItem = toDo[i];

   let toDoList = document.createElement('li');

   toDoList.innerText = listItem;

   listOne.appendChild(toDoList);
    
   //console.log(toDoList);

}

//
//onde quero colcoar uma nova section? 
//na section father
let sectionFather = document.getElementById('sectionFather');

//o que quero colocar na section father?
//uma nova section com outros to dos
let newSection = document.createElement('section');

//colocar essa new section no html
sectionFather.appendChild(newSection);

//colocar um h3 nessa nova sessão
let newSectionH3 = document.createElement('h3');
newSection.appendChild(newSectionH3);

//escrever outras tasks no h3
newSectionH3.innerHTML = 'Outras tarefas?';

//adicionar estilo nessa nova section
newSection.style.height = '190px';
newSectionH3.style.backgroundColor = 'yellow';


