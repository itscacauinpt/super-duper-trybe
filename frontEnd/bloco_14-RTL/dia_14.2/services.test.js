const service = require('./services');

describe('1. Verifying if the function was called, returns correctly and the times tha it has been called', ()=> {
  it('tests if the function was called, if it returns the right answer and how many times it has been called', () => {
    // mock com o padrão 10
    service.randomNumberCreator = jest.fn().mockReturnValue(10);
    expect(service.randomNumberCreator()).toBe(10);
    expect(service.randomNumberCreator).toHaveBeenCalled();
    expect(service.randomNumberCreator).toHaveBeenCalledTimes(1);
  });

    it('tests if the function was called, its return and the time i has been called', () => {
    // mock com a implementação de divisão
    service.randomNumberCreator = jest.fn().
    expect(service.randomNumberCreator()).toBe(10);
    expect(service.randomNumberCreator).toHaveBeenCalled();
    expect(service.randomNumberCreator).toHaveBeenCalledTimes(1);
  });
})

describe('1. Verifying if the function was called, returns correctly and the times tha it has been called', () => {
  it('tests if the function was called, if it returns the right answer and how many times it has been called', () => {

  })
})
