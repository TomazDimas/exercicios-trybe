abstract class Character {
  abstract talk(): void
  abstract specialMove(): void
}

class MeleeCharacter extends Character {
  public talk(): void {
    console.log(`Sou melee`);
  }

  public specialMove(): void {
      console.log(`Ataque de perto`);
  }
}

class LongRangeCharacter extends Character {
  public talk(): void {
    console.log(`Sou long range`);
  }

  public specialMove(): void {
      console.log(`Ataque de longe`);
  }
}

const callFuncs = (character: Character) => {
  character.talk();
  character.specialMove();
}

const guerreiro = new MeleeCharacter();
const arqueiro = new LongRangeCharacter();

callFuncs(guerreiro);
callFuncs(arqueiro);