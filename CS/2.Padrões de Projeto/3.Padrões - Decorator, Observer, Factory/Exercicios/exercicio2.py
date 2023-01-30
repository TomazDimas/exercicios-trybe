from abc import ABC, abstractmethod


class Alarme:
    def __init__(self):
        self.rotinas = []

    def adicionar_rotina(self, rotina):
        self.rotinas.append(rotina)

    def despertar(self):
        for rotina in self.rotinas:
            rotina.acionar()

class RotinaAbstrata(ABC):
    @abstractmethod
    def acionar(self):
        pass

class RotinaLuzes(RotinaAbstrata):
    def __init__(self, alarme) -> None:
        self.alarme = alarme
        self.alarme.adicionar_rotina(self)
    
    def acionar(self):
        print('Luzes estão acesas')

class RotinaCafé(RotinaAbstrata):
    def __init__(self, alarme) -> None:
        self.alarme = alarme
        self.alarme.adicionar_rotina(self)
    
    def acionar(self):
        print('Café está pronto')

class RotinaComputador(RotinaAbstrata):
    def __init__(self, alarme) -> None:
        self.alarme = alarme
        self.alarme.adicionar_rotina(self)
    
    def acionar(self):
        print('Computador está ligado')

alarme = Alarme()
RotinaLuzes(alarme)
RotinaCafé(alarme)
RotinaComputador(alarme)
alarme.despertar()