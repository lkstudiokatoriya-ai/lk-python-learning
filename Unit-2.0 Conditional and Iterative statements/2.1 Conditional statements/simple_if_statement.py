# ============================================================
# simple_if_statement.py
# Unit 2.1 - Conditional Statements
# Topic: Simple if Statement
# ============================================================

# Simple if executes its block only when the condition is True.

number = int(input("Enter a number: "))

# Check whether the number is positive
if number > 0:
    print("The number is positive.")

# Check whether the number is greater than 10
if number > 10:
    print("The number is greater than 10.")

# Check whether the number is even
if number % 2 == 0:
    print("The number is even.")

# Check whether the number is divisible by 5
if number % 5 == 0:
    print("The number is divisible by 5.")

# This statement is outside all if blocks,
# so it always executes.
print("Program completed.")
