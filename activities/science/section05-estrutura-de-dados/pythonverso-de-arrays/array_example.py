"""Perceba que temos uma coleção de valores
e operações que atuam sobre estes valores,
de acordo com o que foi definido pelo TAD."""
import sys


class ListaArray:
    def __init__(self):
        self.data = []

    def __len__(self):
        # quando pedido o tamanho do array
        # retorne o tamanho de data
        return len(self.data)

    def __str__(self):
        # converte para string e exibe os valores de data
        return str(self.data)

    def get(self, index):
        # recupera o elemento no índice informado
        return self.data[index]

    def set(self, index, value):
        # insere um elemento no índice informado
        self.data.insert(index, value)

    def remove(self, index):
        # removeremos o item, retornando-o
        return self.data.pop(index)

    def update(self, index, value):
        # atualiza um item
        self.remove(index)
        return self.set(index, value)


# vamos inicializar e preencher uma estrutura de dados array
array = ListaArray()

# sys.getsizeof retorna o tamanho da lista em bytes
# array_memory_size = sys.getsizeof(array.data)
# print(array_memory_size)  # 56

array.set(0, "Felipe")
array.set(2, "Shirley")
array.set(3, "Miguel")

print(f'indice um: {array.get(1)}')  # Shirley
array.set(1, "Ana")
array.set(4, "Lucas")

print("-----")

print(array)

# para acessar um elemento do array, utilizamos seu índice
print(array.get(0))  # saída: Felipe
print(array.get(2))  # saída: Shirley

print("-----")

array.remove(0)  # saída Felipe
print(array)  # 0, ana; shirly, 1...

print("-----")

array.update(0, 'Marco')
print(array)  # 0, marco; shirly, 1...

print("-----")

# podemos iterar sobre seus elementos da seguinte maneira
index = 0
# enquanto há elementos no array
while index < len(array):
    # recupera o elemento através de um índice
    print("Index:", index, ", Nome:", array.get(index))
    index += 1

print("-----")

array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)  # 120
# acordo com a documentação da linguagem Python,
# a cada vez que um elemento é inserido, a lista cresce em 1.125.
# quando há um crescimento, um novo adrr na memória é reservado pra nova lista
# Em seguida, os elementos são copiados da lista original para a nova,
# e então, o novo elemento é adicionado ao espaço de memória da nova lista.
