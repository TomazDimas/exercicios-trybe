class Product {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  get name() { return this._name; }

  set name(value: string) { this._name = value; }

  get price() { return this._price; } 

  set price(value: number) { this._price = value; }  
}

export default Product;
