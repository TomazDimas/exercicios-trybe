import { FlyingCar } from './interfaces';

export default class FuturisticCar implements FlyingCar {
  drive(): void { console.log('Drive a futuristic car'); }

  fly(): void { console.log('Flying a futuristic car'); }
}
