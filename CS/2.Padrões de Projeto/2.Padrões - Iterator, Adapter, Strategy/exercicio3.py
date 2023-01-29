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

    def __init__(self):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]

    def getCards(self):
        return self._cartas

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return BaralhoIterator(self._cartas)

class BaralhoIterator(Iterator):
    def __init__(self, iterable):
        self.__iterable = iterable
        self.__index = 0

    def __next__(self):
        try:
            result = self.__iterable[self.__index]
        except IndexError:
            raise StopIteration

        self.__index += 1
        return result


class BaralhoInverso(Baralho):
    def __iter__(self):
        return BaralhoInversoIterator(self._cartas)

class BaralhoInversoIterator(Iterator):
    def __init__(self, iterable):
        self.__iterable = iterable
        self.__index = int(len(iterable)) - 1

    def __next__(self):
        try:
            result = self.__iterable[self.__index]
        except IndexError:
            raise StopIteration

        self.__index -= 1
        return result


baralho = BaralhoInverso()
print(baralho.getCards())
for carta in baralho:
    print(carta)