import { IVehicle } from './interfaces';

export default class AirPlane implements IVehicle {
  drive(): void { console.log('Can`t drive'); }

  fly(): void { console.log('Flying an airplane'); }
}