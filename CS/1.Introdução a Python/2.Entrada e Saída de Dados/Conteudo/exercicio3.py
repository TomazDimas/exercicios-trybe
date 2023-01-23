# reproved_students = []
with open('arquivo.txt') as file:
     # for line in file:
     #      student_grade = line.split(' ')
          # if int(student_grade[1]) < 6:
          #      reproved_students.append(student_grade[0] + '\n')
     reproved_students = [
          student_grade.split(' ')[0] + '\n' for student_grade in file if int(student_grade.split(' ')[1]) < 6
     ]
     print(reproved_students)

with open('novo_arquivo.txt', 'w') as file:
     file.writelines(reproved_students)