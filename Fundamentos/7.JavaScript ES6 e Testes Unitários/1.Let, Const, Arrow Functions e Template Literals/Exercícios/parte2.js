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

