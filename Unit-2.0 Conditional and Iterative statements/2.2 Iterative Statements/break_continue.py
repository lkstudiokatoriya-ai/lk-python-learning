# break_continue.py

# break
for i in range(1, 11):
    if i == 6:
        break
    print(i)


# continue
for i in range(1, 11):
    if i == 5:
        continue
    print(i)


# break with user input
number = int(input("Enter a number: "))

for i in range(1, 11):
    if i == number:
        break
    print(i)


# continue with even numbers
for i in range(1, 11):
    if i % 2 != 0:
        continue
    print(i)
