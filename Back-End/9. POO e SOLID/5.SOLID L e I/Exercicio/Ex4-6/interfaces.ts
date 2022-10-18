export interface DriveVehicle {
  drive(): void;
}

export interface FlyingVehicle {
  fly(): void;
}

export interface FlyAndDriveVehicle extends DriveVehicle, FlyingVehicle {};