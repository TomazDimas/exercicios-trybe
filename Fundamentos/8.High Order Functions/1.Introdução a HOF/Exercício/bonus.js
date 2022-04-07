const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  const dragonMaxDamage = dragon.strength
  const dragonMinDamage = 15;
  const dragonDamageDealt = Math.floor(Math.random() * (dragonMaxDamage - dragonMinDamage + 1)) + dragonMinDamage;
  return dragonDamageDealt;
}

const warriorDamage = () => {
  const warriorMaxDamage = warrior.strength * warrior.weaponDmg;
  const warriorMinDamage = warrior.strength;
  const warriorDamageDealt = Math.floor(Math.random() * (warriorMaxDamage - warriorMinDamage + 1)) + warriorMinDamage;
  return warriorDamageDealt;
}

const mageDamage = () => {
  const mageMinDamage = mage.intelligence;
  const mageMaxDamage = mageMinDamage * 2;
  const mageDamageDealt = Math.floor(Math.random() * (mageMaxDamage - mageMinDamage + 1)) + mageMinDamage;
  const manaUsed = 15;
  if (mage.mana < manaUsed) {
    mageDamageDealt = 'Não possui mana suficiente';
    manaUsed = 0;
  }
  return {damageDealt: mageDamageDealt, manaSpent: manaUsed};
}

console.log(battleMembers);

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: (warriorDamage) => {
    const damageDealt = warriorDamage();
    dragon.healthPoints = dragon.healthPoints - damageDealt;
    warrior.damage = damageDealt;
  },
  mageTurn: (mageDamage) => {
    const roundData = mageDamage();
    const damageDealt = roundData.damageDealt;
    const manaSpent = roundData.manaSpent;
    dragon.healthPoints = dragon.healthPoints - damageDealt;
    mage.damage = damageDealt;
    mage.mana = mage.mana - manaSpent;
  },
  dragonTurn: (dragonDamage) => {
    const damageDealt = dragonDamage();
    mage.healthPoints = mage.healthPoints - damageDealt;
    warrior.healthPoints = warrior.healthPoints - damageDealt;
    dragon.damage = damageDealt;
  },
  roundResult: () => {
    console.log(battleMembers);
  }
};

gameActions.warriorTurn(warriorDamage);
gameActions.roundResult();
gameActions.mageTurn(mageDamage);
gameActions.roundResult();
gameActions.dragonTurn(dragonDamage);
gameActions.roundResult();

gameActions.warriorTurn(warriorDamage);
gameActions.roundResult();
gameActions.mageTurn(mageDamage);
gameActions.roundResult();
gameActions.dragonTurn(dragonDamage);
gameActions.roundResult();

gameActions.warriorTurn(warriorDamage);
gameActions.roundResult();
gameActions.mageTurn(mageDamage);
gameActions.roundResult();
gameActions.dragonTurn(dragonDamage);
gameActions.roundResult();

gameActions.warriorTurn(warriorDamage);
gameActions.roundResult();
gameActions.mageTurn(mageDamage);
gameActions.roundResult();
gameActions.dragonTurn(dragonDamage);
gameActions.roundResult();

gameActions.warriorTurn(warriorDamage);
gameActions.roundResult();
gameActions.mageTurn(mageDamage);
gameActions.roundResult();
gameActions.dragonTurn(dragonDamage);
gameActions.roundResult();

gameActions.warriorTurn(warriorDamage);
gameActions.roundResult();
gameActions.mageTurn(mageDamage);
gameActions.roundResult();
gameActions.dragonTurn(dragonDamage);
gameActions.roundResult();

gameActions.warriorTurn(warriorDamage);
gameActions.roundResult();
gameActions.mageTurn(mageDamage);
gameActions.roundResult();
gameActions.dragonTurn(dragonDamage);
gameActions.roundResult();