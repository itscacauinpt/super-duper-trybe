a_dict = {'a': '1'}
another_dict = {'b': '2'}
a_set = {'a', 'b', 'c'}
a_list = ['a', 'b', 'c']
a_list_of_sets = [{'a', 'b', 'c'}, {'a', 'b', 'c', 'd'}, {'a', 'b'}]
a_list_of_dicts = [{'a': '1'}, {'b': '2'}]

# a_set_of_dicts = {{'a': '1'}, {'b': '2'}}  # TypeError: unhashable type: 'dict'
# a_set_of_lists = {['a', 'b', 'c'], ['a', 'b', 'c'], ['a', 'b', 'c']}  # TypeError: unhashable type: 'list'

# if __name__ == '__main__':
  # for item in a_set:
  # for item in a_list_of_sets:
  # for item in a_list_of_dicts:
  # print(item)
