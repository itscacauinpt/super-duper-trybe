from abc import ABC, abstractmethod


class BancoStrategy(ABC):
    @classmethod
    @abstractmethod
    def debitar(cls):
        raise NotImplementedError
