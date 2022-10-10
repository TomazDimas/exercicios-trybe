class Tv {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  connectedTo: string;

  constructor(
    brand: string,
    size: number,
    resolution: string,
    connections: string[],
    connectedTo: string
  ) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
    this.connectedTo = connectedTo;
  }

  turnOn() {
    console.log(
      this.brand,
      this.size,
      this.resolution,
      this.connections,
      this.connectedTo
    );
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
