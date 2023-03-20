from abc import ABC, abstractmethod
# https://docs.python.org/3/library/abc.html


class Employee(ABC):
    @abstractmethod
    def __init__(self, name):
        self._name = name

    @property
    @abstractmethod
    def name(self):
        pass

    @name.setter
    @abstractmethod
    def name(self, new_name):
        pass


class Manager(Employee):
    def __init__(self, name):
        self._name = name

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, new_name):
        self._name = new_name

# nomes com um underscore são "protegidos"
# nomes com dois undescore/dunder são privados
# setters: implementa um valor
# getter: recupera um valor


me = Manager('Cacau')
print(me.name)

# interfaces, classes abstratas comuns que são herdadas por classes normais.


class DB(ABC):
    @abstractmethod
    def execute(self, query):
        ...


class Mongo(DB):
    def execute(self, query):
        print(f'executando: {query} com mongo')


class MySQL(DB):
    def execute(self, query):
        print(f'executando: {query} com mysql')


# Mongo().execute('meh')
# MySQL().execute('outro meh')

db1 = Mongo()
db2 = MySQL()


def func_exec(database, query):
    if isinstance(database, DB):
        database.execute(query)
    else:
        print(f'{database} não é um db válido')


func_exec(db1, 'query mais legal')
func_exec(db2, 'query legal')
func_exec('um db ai', 'query aleatoria')
