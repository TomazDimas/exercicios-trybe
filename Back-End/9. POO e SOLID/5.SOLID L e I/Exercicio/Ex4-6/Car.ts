import { DriveVehicle } from './interfaces';

export default class Car implements DriveVehicle {
  drive(): void { console.log('Drive a futuristic car'); }
}