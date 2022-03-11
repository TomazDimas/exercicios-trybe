function verificaPalindrome(nome) {
    let subs = nome.split('');
    subs.reverse();
    let invertido = subs.join('');
    if (invertido == nome) {
        return true;
    } else {
        return false;
    }
}

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));


