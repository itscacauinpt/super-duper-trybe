class ClassUm:
    def __init__(self) -> None:
        pass


class ClassDois:
    def __init__(self) -> None:
        pass


class Classtres:
    def __init__(self) -> None:
        pass


class ClassQautro:
    def __init__(self) -> None:
        pass


lista = ['1', '2', '3']
lista_classes = [ClassUm, ClassDois, Classtres]

print(lista)
print(lista_classes)

lista.append('quatro')
lista_classes.append(ClassQautro)

print(lista)
print(lista_classes)

lista.remove('2')
lista_classes.remove(ClassQautro)

print(lista)
print(lista_classes)
