
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const allData = {
  ...user,
  ...jobInfos
}

console.log(allData);

const {name, age, nationality, profession, squad, squadInitials} = allData;

console.log(`Hi, my name is ${name}, I'm ${age} year old and I'm ${nationality}. I wordk as a ${profession} and my squad is ${squadInitials}-${squad}`);