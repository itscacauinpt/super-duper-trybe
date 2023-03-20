from abc import ABCMeta, abstractmethod


class InterfaceA(metaclass=ABCMeta):
    '''an interface for object a'''
    @staticmethod
    @abstractmethod
    def method_a():
        ...


class InterfaceB(metaclass=ABCMeta):
    '''an interface for object b'''
    @staticmethod
    @abstractmethod
    def method_b():
        ...
