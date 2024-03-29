import Client from "./Client";
import Product from "./Product";

class Order {
  private _client: Client;
  private _products: Product[] = [];
  private _payment: string;
  private _discount: number;

  constructor(client: Client, products: Product[], payment: string, discount: number) {
    this._client = client;
    this._products = products;
    this._payment = payment;
    this._discount = discount;
  }

  get client(): Client { return this.client; }

  set client(client: Client) { this.client = client; } 

  get products(): Product[] { return this._products; }  

  set products(products: Product[]) { this._products = products; }

  get payment(): string { return this._payment; }

  set payment(payment: string) { this._payment = payment; }

  get discount(): number { return this._discount; }

  set discount(discount: number) { this._discount = discount; }

  getTotal() {
    const sum = this.products.reduce((acc, curr) => {
      const toSum = curr.price;
      return toSum + acc;
    }, 0)
    return sum;
  }

  getTotalWithDiscount() {
    const total: number = this.getTotal();
    return total*(1 - this.discount);
  }
}


const client = new Client('João');


const sandwich = new Product('Sanduíche Natural', 5.00);
const juice = new Product('Suco de Abacaxi', 5.00);
const dessert = new Product('Gelatina de Uva', 2.50);

const order = new Order(client, [sandwich, juice, dessert], 'dinheiro', 0.10);

console.log(order);
console.log('Valor normal: ', order.getTotal());
console.log('Valor com desconto: ', order.getTotalWithDiscount());