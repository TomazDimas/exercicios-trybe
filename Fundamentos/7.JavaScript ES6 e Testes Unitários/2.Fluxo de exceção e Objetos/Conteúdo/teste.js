
// const createObjetc = (object, key, value) => {
//     object[key] = value;
//     return object;
// }

// const object = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };

// const newKey = 'lastName';

// const newValue = 'Santos';
  

// console.log(createObjetc(object, newKey, newValue));

// const returnStudent = student => {
//     const skillarray = Object.keys(student);
//     for (let skillKey in student) {

//     }
// }

// const student1 = {
//     Html: 'Muito Bom',
//     Css: 'Bom',
//     JavaScript: 'Ótimo',
//     SoftSkills: 'Ótimo',
//   };
  
//   const student2 = {
//     Html: 'Bom',
//     Css: 'Ótimo',
//     JavaScript: 'Ruim',
//     SoftSkills: 'Ótimo',
//     Git: 'Bom', // chave adicionada
//   };
  
//   const listSkills = (student) => {
//     const arrayOfSkills = Object.keys(student);
//     for (const index in student) {
//       console.log(`${index}, Nível: ${student[arrayOfSkills[index]]}`);
//     }
//   };
  
//   console.log('Estudante 1');
//   listSkills(student1);
  
//   console.log('Estudante 2');
//   listSkills(student2);

// const países = {
//     França: 'Paris',
//     Brasil: 'Brasília',
//     Espanha: 'Madrid',
//     Portugal: 'Lisboa',
//   };
//   const pairKeyValue = Object.entries(países);
//   console.log(pairKeyValue);

//   for(index in pairKeyValue) {
//     console.log('--------');
//     console.log('País:', pairKeyValue[index][0]);
//     console.log('Capital:', pairKeyValue[index][1]);
//   };


// const person = {
//     name:'Roberto',
//   };
  
//   const lastName = {
//     lastName: 'Silva',
//   };
  
//   const newPerson = Object.assign({},person,lastName);
//   newPerson.name = 'Gilberto';
//   console.log(newPerson);
//   console.log(person);

const veiculo = {
    modelo: 'fiesta',
    marca: 'ford'
}

console.log(veiculo);

const veiculo2 = {};
Object.assign(veiculo2, veiculo)
veiculo2.marca = 'fiat'
console.log(veiculo2);
console.log(veiculo);