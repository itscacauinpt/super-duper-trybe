from collections import ChainMap, OrderedDict, defaultdict

# chainmap, permite a junção de diferentes dicts
pessoa = ChainMap({'nome': 'ana'}, {'nome': 'claudia'}, {'idade': '22'}, {'origem': 'brasil'})

# print(type(pessoa))  # tuple
# print(pessoa['nome'])
# without Chainmap -> TypeError: tuple indices must be integers or slices, not str
# chaves iguais? retorna a primeira encontrada

# dicts não são ordenados, hashmap
# com orderedDict, a odem de definição é relevante, estrututra de dados como dtc, mas que precisa ser ordenada
ordered_dict = OrderedDict()
ordered_dict['idade'] = '22'
ordered_dict['nome'] = 'cacau'

# print(ordered_dict)
# print(ordered_dict.keys())

# defaultDict, é adicionado um valor padrão à todos as keys
default_dict = defaultdict(list)
default_dict['nomes'].append('ana')
default_dict['nomes'].append('banana')

# print(default_dict)

pessoa = defaultdict(list)
pessoa['nome'].append('ana')

# print(pessoa['nome'])  # ['ana']
# print(pessoa['origem'])  # []

