class Student {
  private _matricula: string;
  private _nome: string;
  private _notasProvas: number[];
  private _notasTrabalhos: number[];

  constructor(
    matricula: string,
    nome: string,
    notasProvas: number[],
    notasTrabalhos: number[],

  ) {
    this._matricula = matricula;
    this._nome = nome;
    this._notasProvas = notasProvas;
    this._notasTrabalhos = notasTrabalhos;
  }

  get matricula(): string { return this._matricula; }

  set matricula(value: string) { this._matricula = value; }

  get nome(): string { return this._nome; }

  set nome(value: string) { this._nome = value; }

  get notasProvas(): number[] { return this._notasProvas; }

  set notasProvas(value: number[]) {
    if(value.length > 4) throw new Error('Podem existir apenas 4 notas de provas!')
    this._notasProvas = value
  }

  get notasTrabalhos(): number[] { return this._notasTrabalhos }

  set notasTrabalhos(value: number[]) {
    if(value.length > 2) throw new Error('Podem existir apenas 2 notas de trabalho!')
    this._notasProvas = value
  }
}

const tomaz = new Student('123', 'Tomaz', [9, 8, 7, 8], [7, 8]);
tomaz.notasProvas = [1, 2, 3, 4]
console.log(tomaz);
