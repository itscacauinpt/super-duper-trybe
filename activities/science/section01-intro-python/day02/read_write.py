# characters_file = open('personagens.txt', mode='w')

# characters_file.write('Alucard\n')
# characters_file.write('Neo\n')
# characters_file.write('Alberto\n')

# print('Batman\n', file=characters_file)

# more_characters = ['Dream\n', 'Sakura\n', 'Akira\n']

# characters_file.writelines(more_characters)

# characters_file.close()

# dois_dois = {}
# with open('personagens.txt', mode='r') as f:
#   # content = f.read(8)
#   for line in f:
#     print(line, end='')
# # print(len(content))
# # print(content)
# f.close()

import json

with open('pokemons.json') as f:
#   content = f.read()
  # pokemons = json.loads(content)['results'] # tranforma em dic; loads = content/texto
  pokemons = json.load(f)['results'] # load = arquivo
# print(pokemons[0])

# Separamos somente os do tipo grama
grass_type_pokemons = [
    pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
]

print(grass_type_pokemons[0])
# Abre o arquivo para escrevermos apenas o pokemons do tipo grama
# with open("grass_pokemons.json", "w") as file:
#     json_to_write = json.dumps(
#         grass_type_pokemons
#     )  # conversão de Python para o formato json (str)
#     file.write(json_to_write)

