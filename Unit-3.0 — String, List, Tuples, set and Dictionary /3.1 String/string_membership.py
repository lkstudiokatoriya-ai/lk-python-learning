# string_membership.py

# Using in operator
text = "Python Programming"

print("Python" in text)
print("Programming" in text)
print("Java" in text)


# Using not in operator
print("Java" not in text)
print("Python" not in text)


# Membership with user input
text = input("Enter a string: ")
search = input("Enter text to search: ")

print(search in text)
print(search not in text)