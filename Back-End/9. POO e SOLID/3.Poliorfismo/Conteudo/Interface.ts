interface Character {
  name: string;
  specialMove: string;
}

interface DbCharacter extends Character {
  id: number;
}

const db: DbCharacter[] = [];

interface IModel {
  createCharacter(character: Character): Promise<DbCharacter>;
  getAllCharacter(): Promise<DbCharacter[]>;
  updateCharacter(id: number, character: Character): Promise<DbCharacter>;
  deleteCharacter(id: number): Promise<string>;
}