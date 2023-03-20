class Conjunto:
    def __init__(self) -> None:
        self.uma_lista = [False] * 1001
        self.last = 0

    def __str__(self) -> str:
        string = '{'

        for index, is_in_list in enumerate(self.uma_lista):
            if is_in_list:
                string += str(index)
                if index < self.last:
                    string += ", "

        string += "}"
        return string
    
    def add_item(self, value):
        if value not in self.uma_lista:
            self.uma_lista[value] = True
        if value > self.last:
            self.last = value
    
    def is_in(self, value):
        return self.is_in[value]

    def create_conjunto(self, conjunto):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.uma_lista[index] or conjunto.uma_lista[index]:
                new_conjunto.add(index)

        return new_conjunto


if __name__ == "__main__":
    conj = Conjunto()
    values = [0, 10, 100, 1000]

    for value in values:
        conj.add_item(value)
    
    print(conj)
