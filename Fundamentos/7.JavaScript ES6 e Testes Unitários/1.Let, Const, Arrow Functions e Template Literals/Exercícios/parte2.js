// FUNÇÃO 1
const returnFac = n => {
    let fatorial = 1;
    for (let i = n; i > 0; i -= 1) {
        fatorial *= i
    }
    return fatorial;
}

// console.log( returnFac(5));

// FUNÇÃO 2
const longestWord = frase => {
    const wordArray = frase.split(' ');
    let biggest = wordArray[0];
    for (let word of wordArray) {
        word.length > biggest.length ? biggest = word : biggest = biggest;
    }
    return biggest
}

// console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// FUNÇÃO 4
const arrayEx = ['HTML', 'CSS', 'Git', 'Unix', 'Bash'];

const findX = (frase, subs) => {
    let array = frase.split(' ');
    for (let i in array) {
        array[i] === 'x' ? array[i] = subs : array[i] = array[i];
    }
    array = array.join(' ');
    return array;
}

const concatAll = string => {
    const sortedArray = arrayEx.sort();
    return `${string}! Minhas cinco principais habilidades são:
    -${sortedArray[0]}
    -${sortedArray[1]}
    -${sortedArray[2]}
    -${sortedArray[3]}
    -${sortedArray[4]}`
}

console.log(concatAll(findX('Tryber x aqui', 'tomaz')));