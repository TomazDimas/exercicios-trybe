export default interface ICepApi {
  getAddressByCEP(cep: string, number: number): Promise<string>;
  getCepByAddress(address: string, number: number): Promise<string>;
}