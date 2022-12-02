import random
import sys

random_num = random.randint(1, 5)
guess = ''

# while guess != random_num:
#   guess = int(input('Guess the number! '))

# print('The number is...... ', guess)
# python3 in_and_out.py
# Guess the number! 2
# Guess the number! 1
# Guess the number! 3
# Guess the number! 4
# The number is......  4

if __name__ == '__name__':
  for argument in sys.argv:
    print('Receved -> ', argument)
