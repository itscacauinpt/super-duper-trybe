from collections.abc import Iterable, Iterator
# Iterable, que tem a coleção de objetos que pode ser iterada
print(dir(Iterable))  # o método __iter__, fornece um objeto iterador
print(dir(Iterator))

# initializing list
lis1 = [1, 2, 3, 4, 5]
lis1Iter = iter(lis1)

print(f'type list: {str(type(lis1))}')
print(f'type list_iterator: {str(type(lis1))}')

print(dir(lis1Iter))

# using next() to print iterator values
for i in range(0, len(lis1)):
    print(next(lis1Iter))


class DbSimulator:
    def __init__(self):
        # Imagine que estes dados estão populados no banco de dados
        self.person_table = [
            {"name": "Morgana", "age": "22"},
            {"name": "Sarah", "age": "24"},
            {"name": "Will", "age": "33"},
            {"name": "Rick", "age": "23"},
            {"name": "John", "age": "22"},
            {"name": "Peter", "age": "35"},
            {"name": "Groove", "age": "48"},
            {"name": "Sam", "age": "19"},
        ]

    # Não se preocupe com este método apenas simula um retorno get do banco.
    def get(self, query, page):
        per_page = 2

        if query == "select * from person":
            first = (page * per_page) - per_page
            last = page * per_page
            return self.person_table[first:last]


#  O objeto iterador é uma instância da classe DatabaseIterator
class DBIterable(Iterable):
    def __init__(self, db, query) -> None:
        self.db = db
        self.query = query
        self.current_page = 1

    def get_page(self, page):
        return self.db.get(self.query, page)

    def __next__(self):
        data = self.get_page(page=self.current_page)
        if not data:
            raise StopIteration()

        self.current_page += 1
        return data

    # def __iter__(self) -> Iterator[_T_co]:
        # return super().__iter__()
    def __iter__(self):
        return DBIterable(self.db, self.query)


# instanciar o iterável
record_paginator = DBIterable(DbSimulator(), 'select * from person')

for page in record_paginator:
    for record in page:
        print(record['name'])
