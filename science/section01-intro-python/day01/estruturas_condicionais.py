salary = 2001


def check_position(salary):
    if salary % 2 == 0:
        return 'even'
    else:
        return 'odd'
# print(check_position(salary))


#  estruturas de mapeamento (dicts)
key = 'id'
key2 = 'mail'
from_to = {
  'id': 'identifier',
  'mail': 'email',
  'lastName': 'last_name'
}
# print(from_to[key2]) # 'email'


# max number
def check_if_exits(element, input_list):
    if element in input_list:
        return True
    return False
# print(check_if_exits(10, range(15))) # True


def check_words(word):
    return len(word) >= 4
# print(check_words('perfect')) # True
