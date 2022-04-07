const wakeUp = () => 'Acordando!!';
const drinkCoffee = () => 'Bora tomar café!!';
const letsSleep = () => 'Partiu dormir!!';

const doingThinks = (func) => console.log(func());

doingThinks(wakeUp);
doingThinks(drinkCoffee);
doingThinks(letsSleep);