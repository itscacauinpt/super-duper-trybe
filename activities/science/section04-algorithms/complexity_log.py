# ps. logs são funções exponenciais invertidas, amém!!! logb (b**x) = x
# complexity with examples
# input (N = 3)
# o(1) = 1
# O(n) = O(3) = 3
# o(log n) = o(log 3) = 2
# o(n**2) = o(3**2) = 9
# o(2**n) = o(2**3) = 9
# o(!n) = o(!3) = 6

# input (N = 4)
# o(1) = 1
# O(n) = O(4) = 4
# o(log n) = o(log 4) = 2
# o(n**2) = o(4**2) = 16
# o(2**n) = o(2**4) = 16
# o(!n) = o(!4) = 24

# input (N = 5)
# o(1) = 1
# O(n) = O(5) = 5
# o(log n) = o(log 5) = 2
# o(n**2) = o(5**2) = 25
# o(2**n) = o(2**5) = 32
# o(!n) = o(!5) = 120


def range_100(n):
    import random
    # complexidade de tempo O(n), de espaço O(1) pelo range de 100
    # n valores aleatórios
    range_list = []
    average = 0
    # sem armazenar os numeors do range
    for _ in range(10):
        for _ in range(n):
            average += random.randrange(1, n)
        average = average/n
        range_list.append(average)

    return range_list


# print(range_100(3))


def get_grid(grid, line, column):
    # complexidade de espaço O(1), nesse caso não importaria o tamanho do grid
    # o input e o outpu sempre 'gastam' o msm espaço de memória
    if (grid[line][column] == 1):
        return True

    return False


# print(get_grid([[0, 0, 0, 0, 1], [0, 0, 0, 1, 0]], 0, 4))


def contains_duplicate(numbers):
    # melhor caso
    # só funciona pq o array de números é ordenado primeiro
    # outra alternativa, seria correr pelo array para cada número, pior caso
    numbers.sort()
    previous_number = 'not a number'
    for number in numbers:
        if (previous_number == number):
            return True

        previous_number = number

    return False


def log_complexity(arrayOne, arrayTwo):
    # sequential search, O(n)
    for elem in arrayOne:
        # binary search, O(log n)
        return binary_search(arrayTwo, elem)


# A estrutura deve estar ordenada para que a busca binária funcione
def binary_search(numbers, target):
    # binary search
    # tree seconds, O(log n)
    start = 0
    end = len(numbers) - 1

    while start <= end:
        mid = (start + end) // 2

        if numbers[mid] == target:
            return mid

        if target < numbers[mid]:
            end = mid - 1
        else:
            start = mid + 1

    return -1
    # sequential search
    # six seconds, O(n)
    # for number in numbers:
    #     if number == target:
    #         return numbers.index(number)


numbers = [2, 3, 4, 40, 10, 10]
# target = 40
# result = binary_search(numbers, target)
# print(f"Elemento encontrado na posição: {result}")
# print(contains_duplicate(numbers))
