export interface IVehicle {
  drive(): void;
}

export interface FlyingCar extends IVehicle {
  fly(): void;
}