def insertion_sort(array):
    array_len = range(len(array))

    for index in array_len:
        current_index = index
        current_value = array[index]

        while current_index > 0 and array[current_index - 1] > current_value:
            array[current_index] = array[current_index - 1]
            current_index = current_index - 1

        array[current_index] = current_value

    return array


# print(insertion_sort([10, 2, 3, 0, 12]))
