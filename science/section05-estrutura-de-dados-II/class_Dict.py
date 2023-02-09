letters = dict()
# letters = {}

letters[0] = 'a'
letters[12] = 'b'
letters[9] = 'c'
# print(letters)  # {0: 'a', 12: 'b', 9: 'c'}

letters[9] = 'd'
# print('atualizando valor da chave 9: ', letters)  # {0: 'a', 12: 'b', 9: 'd'}

letters[5] = 'c'
# print('novo valor na chave 5: ', letters)  # {0: 'a', 12: 'b', 9: 'd', 5: 'c'}

# Se a chave não existir no dict, causa erro
letter14 = letters[5]
del letters[5]
# print('deleta valor na chave 5: ', letters)  # {0: 'a', 12: 'b', 9: 'd'}

# apenas objetos imutáveis podem ser utilizados como chave

# {key: value for (key, value) in iterable}
map_dict = range(3, 21)
map_dict = {inteiro: inteiro*2 for inteiro in map_dict}  # começa no 3, para no 20
# print(map_dict)


# Para cada char na string:
# - Se o char não estiver no dicionário, inclua com o valor 1;
# - Se estiver, incremente o valor.
# Exemplo:

def find_doubled_letters(string):
    char_dict = {}
    for char in string:
        if char not in char_dict:
          char_dict[char] = 1
        else:
          char_dict[char] += 1

    return char_dict

string = "bbbbaaaacccaaaaaaddddddddccccccc"
# print(find_doubled_letters(string))
# saída: {'b': 4, 'a': 10, 'c': 10, 'd': 8}
string2 = "coxinha"
# print(find_doubled_letters(string2))
# saída: {'c': 1, 'o': 1, 'x': 1, 'i': 1, 'n': 1, 'h': 1, 'a': 1}

