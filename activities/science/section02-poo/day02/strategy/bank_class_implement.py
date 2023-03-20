from banks_methods import BancoAStrategy, BancoBStrategy


class Banco:
    def __init__(self, banco_strategy):
        self.__banco_strategy = banco_strategy

    def debitar(self, conta, valor):
        self.__banco_strategy.debitar(conta, valor)


Banco(BancoAStrategy).debitar(120, 123)
Banco(BancoBStrategy).debitar(120, 123)
