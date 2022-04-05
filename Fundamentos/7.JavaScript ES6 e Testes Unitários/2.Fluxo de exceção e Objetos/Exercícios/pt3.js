const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

const addTurn = (object, key, value) => {
    object[key] = value;
}
addTurn(lesson2, 'turno', 'noite');
console.log(lesson2);

const listKeys = object => Object.keys(object);
console.log(listKeys(lesson2));

const objectSize = object => Object.keys(object).length;
console.log(objectSize(lesson2));

const listValues = object => Object.values(object);
console.log(listValues(lesson2));