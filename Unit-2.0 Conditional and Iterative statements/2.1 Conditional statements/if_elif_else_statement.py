# ============================================================
# if_elif_else_statement.py
# Unit 2.1 - Conditional Statements
# Topic: if-elif-else Statement
# ============================================================

# if-elif-else is used when there are multiple conditions.
# Python checks the conditions from top to bottom.
# The first True condition is executed.

marks = float(input("Enter your marks: "))

if marks >= 80:
    print("Grade: A")

elif marks >= 60:
    print("Grade: B")

elif marks >= 40:
    print("Grade: C")

else:
    print("Grade: F")


# Checking a student's result
if marks >= 40:
    print("Result: Pass")
else:
    print("Result: Fail")


# Checking the marks range
if marks < 0 or marks > 100:
    print("Invalid marks.")
elif marks >= 90:
    print("Performance: Excellent")
elif marks >= 75:
    print("Performance: Very Good")
elif marks >= 50:
    print("Performance: Good")
else:
    print("Performance: Needs Improvement.")


print("Program completed.")