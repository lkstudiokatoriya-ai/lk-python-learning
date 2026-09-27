# tuple_operations.py

tuple1 = (10, 20, 30)
tuple2 = (40, 50, 60)

# Concatenation
result = tuple1 + tuple2
print(result)

# Repetition
result = tuple1 * 2
print(result)

# Membership
print(20 in tuple1)
print(50 not in tuple1)

# Slicing
numbers = (10, 20, 30, 40, 50)

print(numbers[1:4])
print(numbers[:3])
print(numbers[2:])
print(numbers[::-1])