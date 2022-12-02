import random
from collections import Counter

random_list = random.sample(range(10000), 1000)
random_list_2 = random.sample(range(60), random.randint(50, 55))
# print(len(random_list_2))
# print(max(random_list_2))
# print(min(random_list_2))

list_num = []
for x in range(10):
  list_num.append(random.randint(0, 50))

# print(list_num)
counter = Counter(list_num)
# print(counter)

most_comuns = counter.most_common()
# print(most_comuns)

elemento_comum, numero_elemento_comum = most_comuns[0]
# print(numero_elemento_comum, elemento_comum)

# print as vogais da frase
frase = 'Uma frase genérica.'
vogais = 'aeiou'

# lista_vogais = [letra for letra in frase if letra in vogais]
lista_vogais_set = {letra for letra in frase if letra in vogais}
# print(lista_vogais_set)

# métodos
# help(all any enumerate max min len)
nomes_1 = ['Ana', 'Bea', 'Carla', 'Vanessa']
nomes_2 = ['Flávio', 'Carlos', 'Roni', '']
numeros_1 = [1, 2, 3, 4]
numeros_2 = [0, 5, 6, 7]

# print(all(nomes_1)) print(all(numeros_1)) print(any(numeros_1)) # True
# print(all(nomes_2)) # False

def indice():
  for inde, ele in enumerate(nomes_1):
    print(ele, inde)

# print(indice())
