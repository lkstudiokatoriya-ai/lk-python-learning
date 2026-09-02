# 08_logical_operators.py
# Python Logical Operators

a = 10
b = 5

# 1. AND (and)
print("AND:", a > 5 and b < 10)

# 2. OR (or)
print("OR:", a > 15 or b < 10)

# 3. NOT (not)
print("NOT:", not (a > b))


# Taking input from user
x = int(input("\nEnter first number: "))
y = int(input("Enter second number: "))

print("\nResults:")
print("x > 0 and y > 0:", x > 0 and y > 0)
print("x > 0 or y > 0:", x > 0 or y > 0)
print("not (x > y):", not (x > y))