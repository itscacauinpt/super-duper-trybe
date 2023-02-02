def merge(left, right, merged_array):
    left_path, right_path = 0, 0

    while left_path < len(left) and right_path < len(right):

        if left[left_path] <= right[right_path]:
            merged_array[left_path + right_path] = left[left_path]
            left_path += 1
        else:
            merged_array[left_path + right_path] = right[right_path]
            right_path += 1

    for left_path in range(left_path, len(left)):
        merged_array[left_path + right_path] = left[left_path]

    for right_path in range(right_path, len(right)):
        merged_array[right_path + left_path] = right[right_path]

    return merged_array


def merge_sort(array):
    if len(array) <= 1:
        return array

    mid = len(array) // 2
    left, right = merge_sort(array[mid:]), merge_sort(array[:mid])

    return merge(left, right, array.copy())


print(merge_sort([10, 3, 4, 2, 1, 0, 12]))
