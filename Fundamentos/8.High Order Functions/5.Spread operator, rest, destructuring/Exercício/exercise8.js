// escreva greet abaixo
const greet = (nome = 'você', saudacao = 'Oi') => `${saudacao} ${nome}`

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'