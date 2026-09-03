# ============================================================
# for_loop.py
# Unit 2.2 - Iterative Statements
# Topic: for Loop
# ============================================================

# A for loop is used to repeat a block of code
# for each item in a sequence or range.

# Print numbers from 1 to 10
for number in range(1, 11):
    print(number)

# Print even numbers from 2 to 20
for number in range(2, 21, 2):
    print("Even:", number)

# Print the multiplication table of a number
number = int(input("Enter a number: "))

for i in range(1, 11):
    print(number, "x", i, "=", number * i)

print("Program completed.")