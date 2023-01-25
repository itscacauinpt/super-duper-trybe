# fibonacci, próximo elem é igual a soma dos dois anteriores
def fibonacci(n):
    if n < 2:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)


# print(fibonacci(5))


def factorial(n):
    # factorial de 0 é 1
    # if n == 1:
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)


# print(factorial(3))


def sumit(n):
    if n == 0:
        return 0
    else:
        return n + sumit(n - 1)


# print(sumit(5))


def countdown(n):
    while n > 0:
        print(n)
        n -= 1
    print('deu')


# countdown(5)


# função e param
# + condição de parada
# + chamada da função com novo ou próximo param
def countdown_recursive(n):
    if n == 0:  # condição de parada, caso base
        print('deu')
    else:
        print(n)
        n -= 1
        countdown_recursive(n)


# countdown_recursive(5)


# find pair numbers
def iterative_count_pair(number):
    result = 0
    for n in range(0, number + 1):  # range(0, 7)
        if n % 2 == 0 and n != 0:
            result += 1
    return result


# print(iterative_count_pair(6))


# fn dpair numbers in a array
def iterative_count_pair_num(narray):
    result = 0
    for n in narray:
        if n % 2 == 0 and n != 0:
            result += 1
    return result


# print(iterative_count_pair_num([1, 2, 3, 4, 5, 6]))


def recursive_count_pair_num(n):
    result = 0
    if n == 1:
        return result
    elif n % 2 == 0:
        # n - 1 == 2 - 1 = if 1 > 0 = 0 + 1
        result = result + 1
        return result + recursive_count_pair_num(n - 1)
    else:
        return recursive_count_pair_num(n - 1)


# print(recursive_count_pair_num(3))


# contar n pares em uma array
def recursive_count_array(narray):
    array = sorted(narray)

    length = len(array)
    mid = length // 2  # metade do array

    result = 0

    if not mid:
        if array[0] % 2 == 0:
            return result + 1
        else:
            return result
    else:  # if mid
        return array[mid:]
        # left = recursive_count_array(array[:mid])
        # right = recursive_count_array(array[mid:])


# print(recursive_count_array([2, 1, 4, 3, 5, 6]))
# print(recursive_count_array([1, 2, 3, 4]))


# find the biggest int number
def find_int_arry(array, length):
    if length == 1:
        return array[0]
    else:
        biggest = find_int_arry(array, length-1)
        if biggest > array[length-1]:
            return biggest
        else:
            return array[length-1]


def find_int(array):
    length = len(array)
    return find_int_arry(array, length)


# print(find_int([1, 2, 3, 10, 9]))


def mdc(a, b):
    if b == 0:
        return a
    return mdc(b, a % b)


# print(mdc(3, 6))
