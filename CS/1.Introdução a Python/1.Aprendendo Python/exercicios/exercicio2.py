def get_medium(list):
    sum = 0
    for value in list:
        sum += value
    return sum / len(list)


print(get_medium([1, 3, 5]))
