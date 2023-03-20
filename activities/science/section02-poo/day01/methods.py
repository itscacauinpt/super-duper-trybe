# cls referência a classe
# self referência ao objeto
# o método altera o valor do atributo da classe,
# refletindo a alteração em todas as instâncias.
# Com isso é possível realizar uma comunicação entre as instâncias da classe.
from functools import cache
from dataclasses import dataclass


@cache
def fibonacci(n):
    if n <= 1:
        print('ativou')
        return n
    else:
        print('ativou')
        return fibonacci(n-1) + fibonacci(n-2)


# print(fibonacci(5))

@dataclass
class User:
    password: str
    email: str


user_1 = User('senhatop', 'email@email.com')
print(user_1)


class MinhaClass:
    _atributo_protegido = 10
    __dunder_atributo_privado = True

    @staticmethod
    def methd_static():
        print('hey')

    @classmethod
    def set_atributo_p(cls, valor):
        cls._atributo_protegido = valor

    @classmethod
    def get_atributo_p(cls):
        return cls._atributo_protegido

    def __new__(cls):
        print('construindo')
        return super().__new__(cls)

    def __init__(self):
        print('inicializando')

    def __del__(self):
        print('finalizando')


# MinhaClass().methd_static()
# a = MinhaClass()
# a.methd_static()
# print(a._atributo_protegido)  # "protegido"
# print(a.get_atributo_p())
# a.set_atributo_p(20)
# print(a.get_atributo_p())
