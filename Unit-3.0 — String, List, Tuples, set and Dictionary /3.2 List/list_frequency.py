# list_frequency.py

numbers = [10, 20, 10, 30, 20, 10, 40]

search = int(input("Enter number: "))

count = 0

for number in numbers:
    if number == search:
        count += 1

print("Frequency =", count)