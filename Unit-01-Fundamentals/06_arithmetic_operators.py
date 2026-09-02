# 06_arithmetic_operators.py
# Python Arithmetic Operators

a = 10
b = 3

# 1. Addition (+)
print("Addition:", a + b)

# 2. Subtraction (-)
print("Subtraction:", a - b)

# 3. Multiplication (*)
print("Multiplication:", a * b)

# 4. Division (/)
print("Division:", a / b)

# 5. Floor Division (//)
print("Floor Division:", a // b)

# 6. Modulus (%)
print("Modulus:", a % b)

# 7. Exponentiation (**)
print("Power:", a ** b)


# Taking input from user
x = float(input("\nEnter first number: "))
y = float(input("Enter second number: "))

print("\nResults:")
print("Addition =", x + y)
print("Subtraction =", x - y)
print("Multiplication =", x * y)

if y != 0:
    print("Division =", x / y)
    print("Floor Division =", x // y)
    print("Modulus =", x % y)
else:
    print("Division, Floor Division and Modulus by zero are not possible.")

print("Power =", x ** y)