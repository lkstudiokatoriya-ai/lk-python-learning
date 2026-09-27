# string_slicing.py

text = "PYTHON"

# Basic slicing
print(text[0:3])
print(text[1:5])
print(text[:4])
print(text[2:])


# Slicing with step
print(text[0:6:2])
print(text[1:6:2])


# Reverse string
print(text[::-1])


# Slicing with negative index
print(text[-5:-1])
print(text[-4:])


# Slicing with user input
text = input("Enter a string: ")

print(text[0:3])
print(text[::2])
print(text[::-1])