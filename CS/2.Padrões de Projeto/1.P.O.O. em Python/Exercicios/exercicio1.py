class TV():
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    @__volume.setter
    def __volume(self, value):
        if 0 <= value <= 99:
            self.__volume = value
        else:
            raise ValueError('O valor deve estar entre 0 e 99')

    @__canal.setter
    def __canal(self, value):
        if 1 <= value <= 99:
            self.__canal = value
        else:
            raise ValueError('O valor deve estar entre 1 e 99')

    def aumentar_volume(self):
        self.__volume += 1

    def diminuir_volume(self):
        self.__volume -= 1

    def modificar_canal(self, value):
        self.__canal = value

    def ligar_desligar(self, value):
        self.__ligada = not self.__ligada

    def __str__(self):
        return f""""
        O volume da TV está em {self.__volume}
        O canal da TV está em {self.__canal}
        A TV está ligada? {self.__ligada}
        O tamanho da TV é {self.__tamanho}
        """

samsung = TV(25)
print(samsung)