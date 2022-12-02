# for
restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

filtered_restaurants = []
min_rating = 3.0
for restaurant in restaurants:
    if restaurant["nota"] > min_rating:
        filtered_restaurants.append(restaurant)
# list comprehension
min_rating = 3.0
filtered_restaurants = [restaurant
                         for restaurant in restaurants
                         if restaurant["nota"] > min_rating]
# print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

# S = [2 * x for x in range(101) if x ** 2 > 3]

team = ['Anne', 'Abe', 'Carla', 'daniel', 'Duda']
team_d = [element for element in team if element[0].upper() == 'D']
# team_d = [element for element in team if 'D' in element[0].upper()]
team_a = [element for element in team if element[0].upper() == 'A']
# new_list = [element for element in team if 'a' in element]
# print(team_d)
# print(team_a)

# fibonacci
n = 10
last, next = 0, 1
while last < n:
#    print(last)
    last, next = next, last + next

# enumerate
lyrics = ['she', 'is', 'no', 'angel', 'but', 'she', 'is', 'my', 'religion']
enumerate_lyrics = list(enumerate(lyrics))
# print(enumerate_lyrics)

for index, word in enumerate(lyrics):
    print(f'{index} - {word}')
