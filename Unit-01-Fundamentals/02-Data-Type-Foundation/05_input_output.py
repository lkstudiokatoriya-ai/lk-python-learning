# 05_input_output.py
# Python Input and Output - Basic Examples


# 1. Simple Output
print("Hello, Python!")


# 2. Printing multiple values
name = "Lalan"
age = 18

print("Name:", name)
print("Age:", age)


# 3. Taking String Input
name = input("Enter your name: ")
print("Hello", name)


# 4. Taking Integer Input
age = int(input("Enter your age: "))
print("Your age is:", age)


# 5. Taking Float Input
marks = float(input("Enter your marks: "))
print("Your marks are:", marks)


# 6. Taking Two Numbers
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

print("First number:", a)
print("Second number:", b)


# 7. Addition using Input
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

sum = a + b

print("Sum =", sum)


# 8. Multiple Values in One Line
a, b = input("Enter two values: ").split()

print("First:", a)
print("Second:", b)
