from abc import abstractmethod
from collections.abc import Iterable, Iterator


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return '<%s de %s>' % (self.valor, self.naipe)

class Baralho(Iterable):
    naipes = 'copas ouros espadas paus'.split()
    valores = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split()

    def __init__(self, strategy):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]
        self.__strategy = strategy

    def getCards(self):
        return self._cartas

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return BaralhoIterator(self._cartas, self.__strategy)

class BaralhoIterator(Iterator):
    def __init__(self, iterable, strategy):
        self.__iterable = iterable
        self.__strategy = strategy

    def __next__(self):
        self.__strategy(self.__iterable).iter()

class BaralhoStrategy():
    def __init__(self, iterable):
        self.__iterable = iterable

    @abstractmethod
    def iter():
        raise NotImplementedError

class NormalStrategy(BaralhoStrategy):
    def __init__(self, iterable):
        super().__init__(iterable)
        # self.__iterable = iterable
        self.__index = 0

    def iter(self):
        try:
            result = self.__iterable[self.__index]
        except IndexError:
            raise StopIteration

        self.__index += 1
        return result

class InverseStrategy(BaralhoStrategy):
    def __init__(self, iterable):
        super().__init__(iterable)
        self.__index = len(iterable) - 1

    def iter(self):
        try:
            result = self.__iterable[self.__index]
        except IndexError:
            raise StopIteration

        self.__index -= 1
        return result

baralho_normal = Baralho(NormalStrategy)
baralho_invertido = Baralho(InverseStrategy)
for carta in baralho_normal:
    print(carta)