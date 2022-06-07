const service = require('./service');

describe('Exercício 1', () => {

  it('Exercício 1 Item 1', () => {
    jest.spyOn(service, 'randomNumber').mockReturnValue(10)

    expect(service.randomNumber()).toBe(10)
    expect(service.randomNumber).toHaveBeenCalled()
    expect(service.randomNumber).toHaveBeenCalledTimes(1)
  })
})