# herança, composição

class Eletrodomestico:
    @property
    def cor(self):
        return self.__cor.upper()

    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor

    def __init__(self, marca, cor, potencia, tensao, preco):
        self.marca = marca

        self.cor = cor
        self.preco = preco
        self.__potencia = potencia
        self.__tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_max = 3
        self.__corrente_atual = 0
        self.__corrente_max = potencia / tensao

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_max or velocidade < 0:
            raise ValueError(
                f'Velocidade deve estar entre 0 e {self.__velocidade_max}'
                )
        self.__velocidade = velocidade
        self.__corrente_atual = (
            (self.__potencia / self.__tensao) / self.__velocidade_max
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def ta_lgd(self):
        # return self.__ligado
        if self.__ligado:
            return 'os viado tão ligado'
        return 'tá não'

# nomes com um underscore são "protegidos"
# nomes com dois undescore/dunder são privados
# setters: implementa um valor
# getter: recupera um valor


class Liquidificador(Eletrodomestico):
    # pass
    def __str__(self) -> str:
        return f'Liquidificador {self.cor}, custando R${self.preco}'


meu_liquidificador = Liquidificador('MarcaBoa', 'Azul', 200, 127, 200)
seu_liquidificador = Liquidificador(
    marca='MarcaBoa', cor='Preto', potencia=250, tensao=220, preco=100
    )
# print(vars(meu_liquidificador))
# print(vars(seu_liquidificador))
# print(meu_liquidificador.__potencia)
# AttError: 'Liquidificador' object has no attribute '__potencia'

# print(meu_liquidificador)

liquidificador_v = Liquidificador(
        marca='MarcaBoa', cor='vermelho', potencia=250, tensao=220, preco=100
        )
liquidificador_v.ligar(2)
# print('Tá ligado, né viado?', liquidificador_v.ta_lgd())


class Ventilador(Eletrodomestico):
    def __init__(self, marca, cor, potencia, tensao, preco, helices) -> None:
        super().__init__(marca, cor, potencia, tensao, preco)
        self.helices = helices

    def __str__(self) -> str:
        return (
                f'Ventilador da {self.marca}, '
                f'na cor {self.cor}, por R${self.preco}, '
                f'com {self.helices} helices.'
                )


ventilador_um = Ventilador('MarcaBoa', 'preto', 200, 127, 200, 6)
# print(ventilador_um)


class Pessoa:
    def __init__(self, nome, money, email=None) -> None:
        self.nome = nome
        self.money = money
        self.product = None
        self.email = email

    def __str__(self) -> str:
        if self.product is not None:
            return (f'{self.nome} possui {self.money} em sua conta, '
                    f'porque comprou um {self.product}')
        if self.email is not None:
            return (f'{self.email} - {self.nome} possui {self.money} na conta')

        return f'{self.nome} possui {self.money} em sua conta.'

    def buy(self, product):
        if product.preco <= self.money:
            self.money -= product.preco
            self.product = product


cozinheiro = Pessoa('Jacquin', 1000)
# print(cozinheiro)
cozinheiro.buy(liquidificador_v)
# print(cozinheiro)
cozinheiro.buy(ventilador_um)
# print(cozinheiro)


# cozinheiro2 = Pessoa('Paola', 1000)
cozinheiro2 = Pessoa('Paola', 1000, 'paola.top@mail.com')
# print(cozinheiro2)
cozinheiro2.buy(ventilador_um)
# print(cozinheiro2)
