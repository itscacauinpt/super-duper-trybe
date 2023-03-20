# https://docs.python.org/pt-br/3/library/exceptions.html#bltin-exceptions

# while True:
#     try:
#         x = int(input("Please enter a number: "))
#         break
#     except ValueError:
#         print("Oops!  That was no valid number.  Try again...")

# python3 handle_exeptions.py 
# Please enter a number: ^[[D
# Oops!  That was no valid number.  Try again...
# Please enter a number: 2

# try:
#     arquivo = open("arquivo.txt", mode="r")
# except OSError:
#     # será executado caso haja uma exceção
#     print("arquivo inexistente")
# else:
#     # será executado se tudo ocorrer bem no try
#     print("arquivo manipulado e fechado com sucesso")
#     arquivo.close()
# finally:
#     # será sempre executado, independentemente de erro
#     print("Tentativa de abrir arquivo")
students = []
with open('students.txt', mode='w') as f:
  f.writelines(['Marcos 10\n', 'Felipe 4\n', 'José 6\n', 'Ana 10\n', 'Maria 9\n', 'Miguel 5\n'])

with open('students.txt', mode='r') as grades_file:
  for line in grades_file:
    grade = line
    grade = line.split(' ')
    if int(line[1]) < 6:
      students.append(grade[0] + '\n')

with open('grades_students.txt', mode='r') as students_grades:
  # print(students)
  students_grades.writelines(students)

