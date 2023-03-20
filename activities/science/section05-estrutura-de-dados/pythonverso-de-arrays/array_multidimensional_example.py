from array_example import ListaArray


class Matrix(ListaArray):

    def get(self, row, column):
        return self.data[row][column]

    def set(self, row, column, value):
        """Caso a linha não exista, uma nova linha
        será criada."""
        try:
            self.data[row].insert(column, value)
        except IndexError:
            self.data.insert(row, [value])

    def remove(self, row, column):
        # removeremos o item, retornando-o
        return self.data[row].pop(column)


print('----- Arrays multidimensionais')

multi_array = Matrix()

multi_array.set(0, 0, "Marcos")
multi_array.set(0, 1, 6)
multi_array.set(0, 2, 9)

multi_array.set(1, 0, "Patrícia")
multi_array.set(1, 1, 9)
multi_array.set(1, 2, 6)

print(multi_array)

# remove o índice 2, da primeira linha com o valor 9
multi_array.remove(0, 2)

print(multi_array)
