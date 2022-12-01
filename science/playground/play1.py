#i want all the prime numbers in a range of 11000
nums=range(100)

def is_prime(num):
  for x in range(2, num):
    if (num%x) == 0:
      return False
    return True

primes=list(filter(is_prime, nums))
# print(primes)

# assotiate taxes to citizens
citizens = [('Steve', 10), ('Mark', 8), ('Clara', 7), ('Julia', 6)]

def tax(citizen):
  name = citizen[0]
  taxed_balance = citizen[1]*0.5
  return (name, taxed_balance)

taxed_citizens = []
# for citizen in citizens:
#   taxed_citizen = tax(citizen)
#   taxed_citizens.append(taxed_citizen)
# or
taxed_citizens = list(map(tax, citizens))
# it applies the function in each element in the iterable
# print(taxed_citizens)

# operators
num = 5
num += 4
num -= 4
num /= 4
num **= 4
# print(num)
