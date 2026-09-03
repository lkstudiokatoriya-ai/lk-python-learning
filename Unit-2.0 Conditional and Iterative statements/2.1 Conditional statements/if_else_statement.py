# ============================================================
# if_else_statement.py
# Unit 2.1 - Conditional Statements
# Topic: if-else Statement
# ============================================================

# if-else is used when one block should execute
# when the condition is True and another block when it is False.

number = int(input("Enter a number: "))

# Check whether the number is positive or not
if number > 0:
    print("The number is positive.")
else:
    print("The number is zero or negative.")

# Check whether the number is even or odd
if number % 2 == 0:
    print("The number is even.")
else:
    print("The number is odd.")

# Check whether the number is greater than 100
if number > 100:
    print("The number is greater than 100.")
else:
    print("The number is not greater than 100.")

# Check whether the number is divisible by 5
if number % 5 == 0:
    print("The number is divisible by 5.")
else:
    print("The number is not divisible by 5.")

print("Program completed.")