import sys
import json
import csv

def main():
    file_path = sys.argv[1]
    file_data = import_json(file_path)
    porcentage = calculate_percentage(file_data)
    export_csv("output.csv", porcentage)
    # print(porcentage)

def import_json(path_name):
    with open(path_name) as file:
        data = json.load(file)
    return data

def calculate_percentage(data):
    categories_percentage = dict()
    total = len(data)
    for book in data:
        categories = book["categories"]
        for categorie in categories:
            if categorie not in categories_percentage:
                categories_percentage[categorie] = 1
            else:
                categories_percentage[categorie] += 1
    for categorie in categories_percentage:
        categories_percentage[categorie] = categories_percentage[categorie] / total
    return categories_percentage

def export_csv(file_name, data: dict):
    with open(file_name, mode="w") as file:
        csv_writer = csv.writer(file)
        for key, value in data.items():
            csv_writer.writerow([key, value])

if __name__ == "__main__":
    main()