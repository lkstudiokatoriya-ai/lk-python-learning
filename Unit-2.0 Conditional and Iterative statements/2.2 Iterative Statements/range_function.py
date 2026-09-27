# range_function.py

# range(stop)
for i in range(5):
    print(i)


# range(start, stop)
for i in range(1, 6):
    print(i)


# range(start, stop, step)
for i in range(1, 11, 2):
    print(i)


# Even numbers
for i in range(2, 11, 2):
    print(i)


# Reverse counting
for i in range(10, 0, -1):
    print(i)


# Multiplication table
number = 5

for i in range(1, 11):
    print(number * i)


# Sum of numbers
total = 0

for i in range(1, 11):
    total = total + i

print(total)
