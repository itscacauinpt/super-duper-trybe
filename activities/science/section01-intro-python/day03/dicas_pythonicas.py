from functools import partial

# (.venv) cacau@dell:~/super-duper-trybe/science$ bpython


def soma(x, y):
    return x+y


soma(2, 3)
# 5

incrementa = partial(soma, 2)  # método baseado na def soma

# incrementa(3)


def divisao_interira(x, y):
    return x//y


divisao_interira(10, 5)  # 2
divisao_interira(5, 10)  # 0


def divisao_resto(x, y):
    return x/y


divide = partial(divisao_interira, 10)

divide(2)  # 5
divide(7)  # 1


def potencia_de_tres_termos(a, b, c):
    return ((a**b)**c)


potencia = partial(potencia_de_tres_termos, 2)
# potencia = partial(potencia_de_tres_termos, 6, 2)
