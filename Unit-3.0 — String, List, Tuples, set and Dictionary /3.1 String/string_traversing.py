# string_traversing.py

text = "PYTHON"

# Traversing using for loop
for character in text:
    print(character)


# Traversing using index
for i in range(len(text)):
    print(text[i])


# Traversing using while loop
i = 0

while i < len(text):
    print(text[i])
    i = i + 1


# Traversing in reverse
for character in text[::-1]:
    print(character)


# Traversing a user input string
text = input("Enter a string: ")

for character in text:
    print(character)