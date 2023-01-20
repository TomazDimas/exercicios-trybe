def get_biggest_word(list):
    biggest = ""
    for name in list:
        if len(name) > len(biggest):
            biggest = name
    return biggest

print(get_biggest_word(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))