reproved_students = []
with open('arquivo.txt') as file:
     for line in file:
          student_grade = line.split(' ')
          if int(student_grade[1]) < 6:
               reproved_students.append(student_grade[0] + '\n')

with open('novo_arquivo.txt', 'w') as file:
     file.writelines(reproved_students)