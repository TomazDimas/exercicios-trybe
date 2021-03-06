const service = require('./service');

describe('Exercício 1 Itens 1 a 3', () => {

  // afterEach(() => service.randomNumber.mockRestore())

  it('Exercício 1 Item 1', () => {
    jest.spyOn(service, 'randomNumber').mockReturnValue(10)

    expect(service.randomNumber()).toBe(10)
    expect(service.randomNumber).toHaveBeenCalled()
    expect(service.randomNumber).toHaveBeenCalledTimes(1)
  })

  it('Exercício 1 Item 2', () => {
    service.randomNumber = jest.fn().mockImplementation((a, b) => a / b) 
    
    expect(service.randomNumber(10, 2)).toBe(5)
    expect(service.randomNumber).toHaveBeenCalled()
    expect(service.randomNumber).toHaveBeenCalledTimes(1)
    expect(service.randomNumber).toHaveBeenCalledWith(10, 2)
  })

  it('Exercício 1 Item 3.1', () => {
    service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c) 
    
    expect(service.randomNumber(10, 2, 5)).toBe(100)
    expect(service.randomNumber).toHaveBeenCalled()
    expect(service.randomNumber).toHaveBeenCalledTimes(1)
    expect(service.randomNumber).toHaveBeenCalledWith(10, 2, 5)
  })

  it('Exercício 1 Item 3.2', () => {
    service.randomNumber.mockReset()
    service.randomNumber = jest.fn().mockImplementation((a) => 2 * a) 
    
    expect(service.randomNumber(10)).toBe(20)
    expect(service.randomNumber).toHaveBeenCalled()
    expect(service.randomNumber).toHaveBeenCalledTimes(1)
    expect(service.randomNumber).toHaveBeenCalledWith(10)
  })

})

describe('Exercício 1 Item 4', () => {
  it('Funcões mockadas', () => {
    service.toUpperCase = jest.fn().mockImplementation((string) => string.toLowerCase())
    service.firstLetter = jest.spyOn(service, 'firstLetter').mockImplementation(string => string.charAt(string.length - 1))
    service.concatString = jest.spyOn(service, 'concatString').mockImplementation((str1, str2, str3) => `${str1}${str2}${str3}`)

    expect(service.toUpperCase('TomAZ')).toBe('tomaz')
    expect(service.toUpperCase).toHaveBeenCalled()
    expect(service.toUpperCase).toHaveBeenCalledTimes(1)

    expect(service.firstLetter('tomaz')).toBe('z')
    expect(service.firstLetter).toHaveBeenCalled()
    expect(service.firstLetter).toHaveBeenCalledTimes(1)

    expect(service.concatString('tomaz', 'dimas', 'souza')).toBe('tomazdimassouza')
    expect(service.concatString).toHaveBeenCalled()
    expect(service.concatString).toHaveBeenCalledTimes(1)
  })
})