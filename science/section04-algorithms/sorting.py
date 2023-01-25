def selection_sort(numbers):
    length = len(numbers)
    for index in range(0, length-1):  # n-1, range(0, 3-1), range(0, 2)
        print(index)
        min_i = index

        for right_i in range(min_i + 1, length):  # range(0+1, 3)
            print(right_i)
            print(numbers[right_i])
            print(numbers[min_i])
            if numbers[right_i] < numbers[min_i]:
                min_i = right_i

        # trocando elem de posição
        curr_element = numbers[index]
        # print(curr_element)
        numbers[index] = numbers[min_i]
        # print(numbers[min_i])
        numbers[min_i] = curr_element
        # print(curr_element)

    return numbers


# numbers = [7, 5, 9, 2, 6, 8]
numbers = [7, 5, 9]
print(f"Lista inicial: {numbers}")
ordered_numbers = selection_sort(numbers)
print(f"Lista final: {ordered_numbers}")
