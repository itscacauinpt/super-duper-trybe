# https://www.npmjs.com/package/written-number
# decorated, not instance


class Calculator:
    def summit(self, x, y):
        return x + y


NUMEROS_INTEIROS = {
    'um': 1, 'dois': 2, 'tres': 3, 'quatro': 4, 'cinco': 5,
    'seis': 6, 'sete': 7, 'oito': 8, 'nove': 9, 'dez': 10, 'zero': 0
}

INT_NUMBERS = {
    'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5,
    'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10, 'zero': 0
}


class CalculatorDecorated:
    def __init__(self, calculator):
        self.calculator = calculator

    def convertNumber(self, number):
        if not isinstance(number, str):
            return number
        return self.isNumberOrNumero(number)

    def isNumberOrNumero(self, number):
        if (number in INT_NUMBERS.keys()):
            return INT_NUMBERS.get(number)
        elif (number in NUMEROS_INTEIROS.keys()):
            return NUMEROS_INTEIROS.get(number)
        else:
            raise TypeError('deu ruim')

    def summit(self, x, y):
        return self.calculator.summit(
          self.convertNumber(x), self.convertNumber(y)
        )


if __name__ == '__main__':
    calculator = Calculator()
    calculatorDecorated = CalculatorDecorated(calculator)

    print(f'''
    10 + 2 = {calculator.summit(10, 2)}
    dez + dois = {calculatorDecorated.summit('um', 'two')}
    ''')
