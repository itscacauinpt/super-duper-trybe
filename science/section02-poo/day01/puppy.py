import pprint
# class dog, instance attributes and the methods


class Dog:
    def __init__(self, name, age, puppies):
        self.name = name
        self.age = age
        self.puppies = puppies

    def birthday(self):
        self.age += 1

    def have_puppies(self, number_puppies):
        self.have_puppies += number_puppies

# class' dictionary


pprint.pprint(vars(Dog))

# instance of this object, the dog class, the variable jake


jake = Dog(name='Jake', age=4, puppies=0)
jakes_attributes = dir(jake)

# print(jake.name)
# print(jakes_attributes)

# dictionary of the instance
# print(jake.__dict__)
# print(vars(jake))
