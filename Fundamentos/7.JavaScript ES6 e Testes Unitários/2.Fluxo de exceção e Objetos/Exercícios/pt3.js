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
// console.log(lesson2);

const listKeys = object => Object.keys(object);
// console.log(listKeys(lesson2));

const objectSize = object => Object.keys(object).length;
// console.log(objectSize(lesson2));

const listValues = object => Object.values(object);
// console.log(listValues(lesson2));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

const numberStudent = (object) => {
    let totalStudents = 0;
    for (let key in object) {
        totalStudents += object[key].numeroEstudantes;
    }
    return totalStudents;
}
// console.log(numberStudent(allLessons));

const getValueByPosition = (object, index) => Object.values(object)[index];
// console.log(getValueByPosition(lesson1, 0));

const verifyPair = (object, key, value) => Object.keys(object).includes(key) && object[key] === value ? true : false;
// console.log(verifyPair(lesson3, 'turno', 'noite'));
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

const mathStudens = object => {
    let totalMathStudent = 0;
    for (let lesson in object) {
        if (object[lesson].materia === 'Matemática') {
            totalMathStudent += object[lesson].numeroEstudantes;
        }
    }
    return totalMathStudent;
}
console.log(mathStudens(allLessons));