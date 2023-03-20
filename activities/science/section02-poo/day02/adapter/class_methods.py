from abs_interface import InterfaceA, InterfaceB


class ClassA(InterfaceA):
    '''class a, implements interface a'''
    def method_a(self):
        print('method a')


class ClassB(InterfaceB):
    '''class b, impleents interface b'''
    def method_b(self):
        print('method b')
