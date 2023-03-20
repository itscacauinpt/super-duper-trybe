heights = [1.90, 1.80, 1.50, 1.62, 1.75, 1.86]

# print(heights[0])  # first
# print(heights[-1])  # last
# print(heights[:4])  # 4 first
# print(heights[0:6:2])  # start at index zero, until the six positon, 2 by 2
# print(heights[::-1])  # moonwalk

nome = 'Cacau'
# print(nome[::-1])  # uacaC >^<

if 1.62 in heights:
    pass
    # print('Achei!')

# ordered_heights = heights.sort()  # method doest return anything
ordered_heights = sorted(heights)  # copied the list and retuns the result
a_starange_name = sorted(nome)

# print(a_starange_name)
# print(ordered_heights)

first, last = heights[0], heights[-1]
a, *b, c = heights  # unboxing ><
# print(a, b, c)
*a, b, c = heights
# print(a, b, c)
a, b, *c = heights
# print(a, b, c)


a_list = [['Cacau', 1.59], ['Carol', 1.75]]
# a_list = [['Cacau', 1.59, 'xablau'], ['Carol', 1.75]]
# for item in a_list:
#     print(item[0], item[1])

a_dict = dict()
for name, height in a_list:
    a_dict[name] = height

another_dict = {name: height for name, height in a_list}

# print(a_dict)
# print(another_dict)

heights_ft = [
  round(height * 3.28, 1)
  if height > 1.70 else 0
  for height in heights
  ]

# print(heights_ft)
