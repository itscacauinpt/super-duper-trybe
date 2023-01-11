import functools


@functools.singledispatch  # decorando a função para criar um dispatcher
def func(param):
    print(param)


@func.register(int)  # passando um tipo para o registrador do dispatcher
def _batatinha(param) -> int:  # nome da funcao é irrelevante
    print(param * 2)


@func.register  # sem passar um tipo no decorator
def _(param: float):  # passando o tipo aqui, como type hint
    print(param * 5)


func(4)
func(4.0)
func('4')


def func(valor1=40, valor2=15):
    print(valor1 + valor2 * 30)  # realiza uma operação com os valores


func()
func(10, 2)
