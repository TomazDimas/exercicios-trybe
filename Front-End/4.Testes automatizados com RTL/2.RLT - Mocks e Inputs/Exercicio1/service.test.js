const service = require('./service');

describe('Exercício 1', () => {

  // afterEach(() => service.randomNumber.mockRestore())

  it('Exercício 1 Item 1', () => {
    jest.spyOn(service, 'randomNumber').mockReturnValue(10)

    expect(service.randomNumber()).toBe(10)
    expect(service.randomNumber).toHaveBeenCalled()
    expect(service.randomNumber).toHaveBeenCalledTimes(1)
  })

  it('Exercício 1 Item 2', () => {
    service.randomNumber = jest.fn().mockImplementation((a, b) => a / b) 
    
    console.log(service.randomNumber(6, 3));
    expect(service.randomNumber(10, 2)).toBe(5)
    expect(service.randomNumber).toHaveBeenCalled()
    expect(service.randomNumber).toHaveBeenCalledTimes(2)
    expect(service.randomNumber).toHaveBeenCalledWith(10, 2)
  })

  it('Exercício 1 Item 3', () => {
    service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c) 
    
    console.log(service.randomNumber(6, 3, 2));
  })

})