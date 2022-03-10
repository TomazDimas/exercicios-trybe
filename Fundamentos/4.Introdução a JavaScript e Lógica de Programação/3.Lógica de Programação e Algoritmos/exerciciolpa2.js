let word = 'tryber';
let newword = '';

for (let i = 1; i <= word.length; i += 1) {
    newword += word[word.length - i];
}

console.log(newword);
console.log(word);