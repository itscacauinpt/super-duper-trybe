from decimal import Decimal

# i want all the prime numbers in a range of 11000
nums = range(100)


def is_prime(num):
    for x in range(2, num):
        if (num % x) == 0:
            return False
        return True


primes = list(filter(is_prime, nums))
# print(primes)

# assotiate taxes to citizens
citizens = [('Steve', 10), ('Mark', 8), ('Clara', 7), ('Julia', 6)]


def tax(citizen):
    name = citizen[0]
    taxed_balance = citizen[1]*0.5
    return (name, taxed_balance)


taxed_citizens = []
# for citizen in citizens:
#   taxed_citizen = tax(citizen)
#   taxed_citizens.append(taxed_citizen)
# or
taxed_citizens = list(map(tax, citizens))
# it applies the function in each element in the iterable
# print(taxed_citizens)

# operators
num = 5
num += 4
# num -= 4
# num /= 4
# num **= 4
# print(num)

# from decimal import Decimal
x = Decimal('0.7')
y = Decimal('0.6')
# print(x+y)
# 1.2999999999999998
# 1.3


def guess():
    i = 0
    while i < 3:
        i += 1
    else:
        return 0
# print(guess())


items = ['Sword', 'Shild', 'Rock']
rarity = [99, 56, 5]
weight = [1.30, 1.10, 0.01]
inv = zip(items, rarity, weight)
i, r, w = zip(*inv)
# print(list(inv))
# print(i,r,w)

inventory = ['axe', 'sword', 'stick']
rare = {'axe': 98, 'bow': 90, 'sword': 80, 'stick': 1}
# sort_inv = sorted(inventory, key=rare.__getitem__)
sort_inv = sorted(inventory, key=rare.__getitem__, reverse=True)
# print(sort_inv)

name = 'Chris'


def guessName():
    # if name == 'Carlos' or 'Tim' or 'Sheldon':
    if name in ['Carlos', 'Tim', 'Sheldon']:
        return 'Access granted'
    else:
        return 'Access denied'
# guessName()
# Acces granted
# Access denied


def my_func(my_input):
    '''getting the index of every even number in the my_input'''
    print(*enumerate(my_input))
    return [indx for indx, y in enumerate(my_input) if y % 2 == 0]


my_input = [2, 3, 4, 5, 55, 60, 80]
# print(my_func(my_input))
# (0, 2) (1, 3) (2, 4) (3, 5) (4, 55) (5, 60) (6, 80)
# [0, 2, 5, 6]


def func(x):
    return print(x[::-1].title())


x = 'em evas esaelp'
func(x)
