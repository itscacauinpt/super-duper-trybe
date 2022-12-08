cities_list = [('Elaine', 'Santo André'), ('Felipe', 'Belo Horizonte')]


# cities_dict = {}
# for name, city in cities_list:
# # cities_dict[name] = name
#     cities_dict[f'nome - {name}'] = name
#     cities_dict[f'city - {name}'] = city
# print(cities_dict)

# cities_dict = {name: city for name, city in cities_list}
cities_dict = dict(cities_list)
# print(cities_dict)
cities_dict['Guilherme'] = 'Contagem'
# print(cities_dict)
cities_dict['Guilherme', 'Carol'] = 'Algum Lugar'
# print(cities_dict)

a_value = cities_dict['Guilherme']
# print(a_value)

# print(cities_dict['Guilherme'], cities_dict['Felipe'])
# print(cities_dict.get('Thiago', 'Guilherme'))  # none  # achou Guilherme
# print(cities_dict.get('Guilherme', 'Carol'))  # value contagem

# if 'Elaine' in cities_dict:
#     print('Achei elaine')

# if 'Santo André' not in cities_dict:  # santo andre é value
#     print('Num achei santo andré')

if 'Santo André' in cities_dict.values():
    pass
    # print('Achei santo andré')

# print(cities_dict.keys())

# sets não adicionam elementos repetidos
conjunto = set()
conjunto.add('Santo André')
conjunto.add('Rio de Janeiro')
conjunto.add('Rio de Janeiro')
conjunto.add('Belo Horizonte')

conjunto2 = set({'Rio de Janeiro', 'Utopia'})

# print(conjunto)
# print(conjunto2)
# print(f'tem no 1 mas não no 2 {conjunto.difference(conjunto2)}')
# print(f'tem no 2 mas não no 1 {conjunto2.difference(conjunto)}')
