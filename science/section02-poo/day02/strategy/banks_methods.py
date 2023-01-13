from bank_strategy_abs import BancoStrategy


class BancoAStrategy(BancoStrategy):
    @classmethod
    def debitar(cls, conta, valor):
        # métodos específicos do banco
        print('débito pelo banco A')


class BancoBStrategy(BancoStrategy):
    @classmethod
    def debitar(cls, conta, valor):
        # métodos específicos do banco
        print('débito pelo banco B')
