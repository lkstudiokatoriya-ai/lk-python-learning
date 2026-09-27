# linear_search.py

numbers = [10, 25, 30, 45, 50]
search = int(input("Enter number to search: "))

found = False

for number in numbers:
    if number == search:
        found = True
        break

if found:
    print("Number found")
else:
    print("Number not found")