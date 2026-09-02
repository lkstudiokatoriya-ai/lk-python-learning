# 12_operator_precedence.py
# Python Operator Precedence

# 1. Multiplication before Addition
result = 10 + 5 * 2
print("10 + 5 * 2 =", result)

# 2. Parentheses have higher priority
result = (10 + 5) * 2
print("(10 + 5) * 2 =", result)

# 3. Multiple Operators
result = 20 + 10 * 5 - 5
print("20 + 10 * 5 - 5 =", result)

# 4. Division and Multiplication
result = 20 / 5 * 2
print("20 / 5 * 2 =", result)

# 5. Exponent has higher priority
result = 2 + 3 ** 2
print("2 + 3 ** 2 =", result)
