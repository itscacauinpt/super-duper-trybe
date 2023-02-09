# quantos elementos d lista A aparecem na lista B? qual a interseção entre as listas

def intersection(listA, listB):
    seen_list_a = {}
    # seen_list_b = {}

    for item in listA:
      if item not in seen_list_a:
        seen_list_a[item] = True
    
    seen_both = []

    for item in listB:
      if item in seen_list_a:
        seen_both.append(item)
    
    return seen_both
