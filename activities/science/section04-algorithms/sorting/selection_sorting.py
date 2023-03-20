def selection_sort(numbers):
    length = len(numbers)

    for index in range(0, length):
        min_i = index

        for right_i in range(index + 1, length):
            if numbers[right_i] < numbers[min_i]:
                min_i = right_i

        curr_element = numbers[index]
        numbers[index] = numbers[min_i]
        numbers[min_i] = curr_element

    return numbers


def find_min_num(numbers):
    min_num = numbers[0]

    for num in numbers:
        if num <= min_num:
            min_num = num
        else:
            min_num = min_num

    return min_num


# numbers = [7, 5, 9, 2, 6, 8]

# for indx, num in enumerate(numbers):
# print(indx, num)

# min_num = find_min_num(numbers)
# ordered_numbers = selection_sort(numbers)

# print(f"Lista inicial: {numbers}")
# print(f'Menor número: {min_num}')
# print(f"Lista final: {ordered_numbers}")
