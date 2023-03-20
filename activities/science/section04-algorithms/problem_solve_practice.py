from sorting.quick_sort import quick_sort
# from sorting.merge_sort import merge_sort


# progressão aritmética, return True ou False
def arithmetic_progression(numbers):
    if len(numbers) <= 2:
        return False

    # ordenar array
    # array.sort()  # retorna o mesmo array modificado
    # retorna novo array ordenado sorted()
    array = quick_sort(numbers, 0, len(numbers) - 1)
    print(array)

    common_diff = array[1] - array[0]
    print(common_diff)

    # range do index 1 até x
    for index in range(1, len(array)):
        if array[index] - array[index - 1] != common_diff:
            return False

    return True


if __name__ == '__main__':
    test = [1, 2, 5]
    test1 = [3, 6, 1]
    test2 = [3, 6, 1]
    test3 = [1, 2]
    test4 = [1, 2, 8]

    print(arithmetic_progression(test))
    # print(arithmetic_progression(test1))
    # print(arithmetic_progression(test4))
    # print(quick_sort(test2, 0, len(test2) - 1))
