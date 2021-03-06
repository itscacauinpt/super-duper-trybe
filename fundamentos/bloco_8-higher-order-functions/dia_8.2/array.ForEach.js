//1 - Use o método forEach chamando a callback showEmailList para apresentar os emails

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};
//emailListInData.forEach(showEmailList);

emailListInData.forEach((elemento) => {
  console.log('Cada elemento do array email:', elemento)
})

const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});

//forEach does something para cada element:
[1, 2, 3].forEach(function (item, index) {
  console.log(item, index);
})

const array  = [1, 2, 3];
array.forEach((item, index) => console.log(item, index));
