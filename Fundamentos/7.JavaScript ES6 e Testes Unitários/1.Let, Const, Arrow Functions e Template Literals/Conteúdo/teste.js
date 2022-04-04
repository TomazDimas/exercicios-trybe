// function userInfo() {
//     var userEmail = 'maria@email.com';
  
//     // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
//   }
//   console.log(userEmail);
//   userInfo();

// if (true) {
//     // inicio do escopo do if
//     var userAge = '20';
//     console.log(userAge); // 20
//     // fim do escopo do if
//   }
//   console.log(userAge); // 20

// let userName = 'Isabella';
// userName = 'Lucas';
// console.log(userName); // Resultado: Lucas

// const favoriteLanguage = 'Javascript';
// favoriteLanguage = 'Python';
// console.log(favoriteLanguage); // Erro

// const favoriteTechnology = 'Machine learning';
// favoriteTechnology += 1;
// console.log(favoriteTechnology); // Facial recognition

// const userInfo = {
//     name: 'Cláudio',
//     id: '5489-2',
//     email: 'claudio@email.com',
//   };
  
//   userInfo.name = 'João';
  
//   console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }

// const technologies = ['Javascript', 'CSS', 'HTML'];
// technologies.push('React');
// technologies[2] = 'oi';
// console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

// technologies = ['Javascript', 'CSS', 'HTML', 'React']
// console.log(technologies); // Erro

// // Com o template literals
// console.log(`Primeira linha;
// Segunda linha;
// Terceira linha;`
// );

// // Sem o template literals:
// console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');

// const printName = function () {
//     const myName = 'Lucas';
//     return myName;
//   };
  
//   console.log(printName());

let nome = 'tomaz dimas';
console.log(nome.split(' '));