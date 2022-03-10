let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0];
let menor = array[0];

for (let i = 1; i < array.length; i += 1) {
    if (array[i].length > maior.length) {
        maior = array[i];
    }
    else if (array[i].length < menor.length) {
        menor = array[i];
    }
}

console.log(menor);
console.log(maior);