def binary_sort(array, low_index, high_index, target):
    if high_index < low_index:
        raise ValueError('deu ruim')

    middle_index = (low_index + high_index) // 2

    if array[middle_index] == target:
        return middle_index
    elif array[middle_index] > target:
        return binary_sort(array, low_index, middle_index - 1, target)
    else:
        return binary_sort(array, middle_index + 1, high_index, target)


array = [3, 40, 45, 60, 12, 10, 20]
target = 40
# print(f'Index: {binary_sort(array, 0, len(array) - 1, 40)}')
# complexidade quadrática, um loop dentro do outro
