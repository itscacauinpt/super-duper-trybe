document.getElementById('header-container').firstElementChild.innerText;
document.getElementById('header-container').previousElementSibling.innerText
document.getElementById('header-cpntainer').firstElementChild.remove()

document.createElement('h2');
document.getElementById('header-container').appendChild(document.createElement('h2'));



//

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

//adicionando paragrafos no section

//editar esse para

let text = [
    'paragrafo alet=atorio yay', 
    'paragrafo alet=atorio yay parte dois',
    'paragrafo alet=atorio yay parte tres o retorno',
    'paragrafo alet=atorio yay parte quatro editada por Mim',
    'paragrafo alet=atorio yay parte final a volta',
];

function createParagraph (text) {
    let para = document.createElement('p');
    newSection.appendChild(para);
    para.innerHTML = text;

}

/**
 * 
    for (i = 0; i < text.length; i +=1) {
        let textPara = text[i];

    }
 */

 createParagraph(text[0]);
 createParagraph(text[1]);
 createParagraph(text[2]);
 createParagraph(text[3]); // o que eu to fazendo aqui senhor? :v
 createParagraph(text[4]);
// createParagraph('paragrafo alet=atorio yay parte dois');
// createParagraph('paragrafo alet=atorio yay parte tres o retorno');
// createParagraph('paragrafo alet=atorio yay parte final a volta');

//removeChild()




