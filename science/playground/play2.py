# fibonacci
n = 10
last, next = 0, 1
while last < n:
    # print(last)
    last, next = next, last + next
# last = next E next += last

# factorial
num = 5
factorial, counter = 1, 1
while counter <= num:
  factorial *= counter
  counter += 1
# print(factorial)

# range
ratings = [6, 8, 5, 9, 10]
# ratings_result = [num*10 for num in ratings]
ratings_result = [num*10 for num in ratings if num%3 == 0]
# print(ratings_result)



