import ICepApi from "./ICepApi";

class MockCepAPI implements ICepApi {
  async getAddressByCEP(cep: string, number: number): Promise<string> {
    return `TESTE getAddressByCEP`;
  }

  async getCepByAddress(address: string, number: number): Promise<string> {
    return `TESTE getCepByAddress`;
  }
}

export default MockCepAPI;