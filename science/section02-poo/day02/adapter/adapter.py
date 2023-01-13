from class_methods import ClassB
from abs_interface import InterfaceA


class BAdapter(InterfaceA):
    '''class b doesnt have the method_a, so we create an adapter'''
    '''calls the class b instead'''
    def __init__(self):
        self.class_b = ClassB()

    def method_a(self):
        self.class_b.method_b()
