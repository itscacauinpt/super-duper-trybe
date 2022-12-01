# buildin types
#https://docs.python.org/3/library/stdtypes.html

type(operando)
help()

a = 5.0
type(a)
# <class 'float'>
# tuple, set, 

# list -> .append, .remove, .extend, .index, .sort(), [0]
# tuplas -> [0], user = ('Will', 'Marcondes', 42)
# set -> {'', ''}, .add, .union, .intersection, .difference
# frozenset -> permissions = frozenset(['membro', 'group']), .union, .intersection, .difference
# dict -> .items(), del, [0],


# ativ 6
trybe_course = ["Introdução", "Front-end", "Back-end"]
trybe_course
['Introdução', 'Front-end', 'Back-end']
trybe_course.append('Ciência da Computação')
trybe_course
['Introdução', 'Front-end', 'Back-end', 'Ciência da Computação']
trybe_course[0] = 'Fundamentos'
trybe_course
['Fundamentos', 'Front-end', 'Back-end', 'Ciência da Computação']
# ativ 7
var = set()
var
set()
var.add('Cacau')
var
{'Cacau'}

# ativ 8 
info = { "personagem": "Margarida", "origem": "Pato Donald", "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald"}
info
{'personagem': 'Margarida', 'origem': 'Pato Donald', 'nota': 'Namorada do personagem principal nos quadrinhos do Pato Donald'}
info['recorrente'] = 'sim'
info
{'personagem': 'Margarida', 'origem': 'Pato Donald', 'nota': 'Namorada do personagem principal nos quadrinhos do Pato Donald', 'recorrente': 'sim'}
del info['origem']
info
{'personagem': 'Margarida', 'nota': 'Namorada do personagem principal nos quadrinhos do Pato Donald', 'recorrente': 'sim'}

people_by_id = {1: "Maria", 2: "Fernanda", 3: "Felipe"}
people_by_name = {"Maria": 1, "Fernanda": 2, "Felipe": 3}
people_by_id.items()
dict_items([(1, 'Maria'), (2, 'Fernanda'), (3, 'Felipe')])
del people_by_id[1]
people_by_id.items()
dict_items([(2, 'Fernanda'), (3, 'Felipe')])
people_by_id
{2: 'Fernanda', 3: 'Felipe'}

# vamos converter o range em uma lista para ajudar na visualização

# definimos somente o valor de parada
list(range(5))  # saída: [0, 1, 2, 3, 4]

# definimos o valor inicial e o de parada
list(range(1, 6))  # saída: [1, 2, 3, 4, 5]

# definimos valor inicial, de parada e modificamos o passo para 2
list(range(1, 11, 2))  # saída: [1, 3, 5, 7, 9]

# podemos utilizar valores negativos para as entradas também
list(range(10, 0, -1))  # saída: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

persmissions = frozenset(['mebro', 'group'])
persmissions
frozenset({'mebro', 'group'})
persmissions.union({'user'})
frozenset({'mebro', 'user', 'group'})
persmissions.intersection({'user', 'mebro'})
frozenset({'mebro'})


great_chest_players = ["Cara Um", "Cara dois"]
great_chest_players
['Cara Um', 'Cara dois']
great_chest_players.append("Cara tres")
great_chest_players
['Cara Um', 'Cara dois', 'Cara tres']
great_chest_players.remove("Cara tres")
great_chest_players
['Cara Um', 'Cara dois']
 
great_chest_players.extend(more_chest_players)
great_chest_players
['Cara Um', 'Cara dois', 'Outro cara um', 'Outro cara dois']

great_chest_players.extend(more_chest_players)
great_chest_players
['Cara Um', 'Cara dois', 'Outro cara um', 'Outro cara dois']
chanpion = ("Campeao", 1)
chanpion
('Campeao', 1)
great_chest_players
['Cara Um', 'Cara dois', 'Outro cara um', 'Outro cara dois']
great_chest_players_ranking = [chanpion]
great_chest_players
['Cara Um', 'Cara dois', 'Outro cara um', 'Outro cara dois']
great_chest_players_ranking
[('Campeao', 1)]

great_chest_players_ranking.append("Campeao", 20221)
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# TypeError: list.append() takes exactly one argument (2 given)
great_chest_players_ranking.append(("Campeao", 20221))
great_chest_players_ranking
[('Campeao', 1), ('Campeao', 20221)]

great_chest_players_ranking.extend([(great_chest_players[2], 2011), (great_chest_players[3], 2010), ])
great_chest_players_ranking
[('Campeao', 1), ('Campeao', 20221), ('Outro cara um', 2011), ('Outro cara dois', 2010)]

# set
admin_user = {"Alberto", "Gabi"}
data_squad = {"p1", "p2", "p3"}
admin_user.intersection(data_squad)
set()
data_squad.add("Gabi")
admin_user.intersection(data_squad)
{'Gabi'}

admin_user.intersection(data_squad)
{'Gabi'}
data_squad.difference(admin_user)
{'p3', 'p1', 'p2'}

