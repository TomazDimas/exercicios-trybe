import { IVehicle } from './interfaces';

export default class Car implements IVehicle {
  drive(): void { console.log('Drive a futuristic car'); }

  fly(): void { console.log('Can`t fly'); }
}