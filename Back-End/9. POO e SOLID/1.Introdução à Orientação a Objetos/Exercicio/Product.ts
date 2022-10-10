class Product {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  get name() { return this.name; }

  set name(value: string) { this.name = value; }

  get price() { return this.price; } 

  set price(value: number) { this.price = value; }  
}

export default Product;
