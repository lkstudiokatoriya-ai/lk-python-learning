# nested_tuples.py

# Nested tuple
student = (
    ("Lalan", 17),
    ("Python", 80),
    ("Circuit", 75)
)

print(student)

# Accessing elements of nested tuple
print(student[0])
print(student[0][0])
print(student[0][1])

print(student[1][0])
print(student[1][1])

# Traversing nested tuple
for item in student:
    print(item)