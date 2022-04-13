const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((accTotal, currentName) => {
    return accTotal + currentName.split('').reduce((accWord, currentLetter) => currentLetter === 'a' || currentLetter === 'A' ? accWord + 1 : accWord, 0)
  }, 0)
}

console.log(containsA());