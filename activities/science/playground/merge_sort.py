# 2 1 3 1 2

# 1 2 3 1 2
# 1 2 1 3 2
# 1 1 2 3 2
# 1 1 2 2 3

# merge sort
# divide the collection in half, until the subgroups
# can be swaped in the same time, do this until the whole group is sorted
# mid = len(array) // 2
# mid = 5
# array[:mid] --- array[mid] metade esquerda, metade direita
# enquanto tiver numeros na esq e dir
# se esq0 for igual ou menor que dir0
# add lista esquerda (.pop(index))
# se não, add lista direita, conta um swap
# resut.extend(left and right)
# return result, nswaps
