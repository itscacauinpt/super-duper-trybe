# characters_file = open('personagens.txt', mode='w')

# characters_file.write('Alucard\n')
# characters_file.write('Neo\n')
# characters_file.write('Alberto\n')

# print('Batman\n', file=characters_file)

# more_characters = ['Dream\n', 'Sakura\n', 'Akira\n']

# characters_file.writelines(more_characters)

# characters_file.close()

dois_dois = {}

with open('personagens.txt', mode='r') as f:
  # content = f.read(8)
  for line in f:
    print(line, end='')

# print(len(content))
# print(content)

f.close()