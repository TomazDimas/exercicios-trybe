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

class LocalDbModel implements IModel {
  async createCharacter(character: Character): Promise<DbCharacter> {
    const characterWithId = {id: (db.length + 1), ...character}
    await db.push(characterWithId);
    return characterWithId
  };

  async getAllCharacter(): Promise<DbCharacter[]> {
    const database = db;
    return database;
  };

  async updateCharacter(id: number, character: Character): Promise<DbCharacter> {
    const newCharacter = {id, ...character};
    db.splice((id - 1), 1, newCharacter)
    return newCharacter;
  };

  async deleteCharacter(id: number): Promise<string> {
    db.splice((id - 1), 1);
    return 'Personagem deleteado';
  };
}

class CharacterService {
  constructor(readonly model: IModel) { }s

  async create(character: Character) {
    const newCharacter = await this.model.createCharacter(character);
    return ({ status: 201, data: newCharacter });
  }

  async getAll() {
    const allCharacter = await this.model.getAllCharacter();
    return ({ status: 200, data: allCharacter });
  }
}
