class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo: string;

  constructor(
    brand: string,
    size: number,
    resolution: string,
    connections: string[],
    connectedTo: string
  ) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
    this._connectedTo = connectedTo;
  }

  turnOn() {
    console.log(
      this._brand,
      this._size,
      this._resolution,
      this._connections,
      this._connectedTo
    );
  }

  get connectedTo(): string {
    return this.connectedTo;
  }

  set connectedTo(value: string) {
    if (this._connections.includes(value)) {
      this._connectedTo = value;
      console.log(value);
      
    } else {
      console.log("Sorry, connection unavailable!");
    }
  }
}

const samsung = new Tv(
  "Samsung",
  60,
  "1920x1080",
  ["HDMI", "ETHERNET"],
  "HDMI"
);

samsung.turnOn();
