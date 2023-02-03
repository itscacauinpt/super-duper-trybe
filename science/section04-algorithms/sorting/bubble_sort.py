def bubble_sort(array):
    # swaps = 0
    # has_swapped = True

    for ordered_elements in range(len(array) - 1):
        # while has_swapped:
        # has_swapped = False

        # for index in range(len(array) - swaps - 1):
        for index in range(len(array) - ordered_elements - 1):
            if array[index] > array[index + 1]:
                array[index], array[index + 1] = array[index + 1], array[index]
                # has_swapped = True

        # swaps += 1

    return array


# complexidade quadrática
print(bubble_sort([10, 2, 4, 0, 1, 124]))
