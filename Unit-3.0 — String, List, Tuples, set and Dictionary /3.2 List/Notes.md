# Unit 3.2 — Lists

## 3.2 Lists

A list is a collection of elements stored in a single variable. Lists are ordered and their elements can be accessed using an index.

## 1. Introduction to List

A list is created using square brackets `[]`.

    numbers = [10, 20, 30, 40, 50]
    print(numbers)

A list can contain different types of elements.

    data = [10, "Python", 3.14, True]
    print(data)

An empty list can also be created.

    items = []
    print(items)

## 2. Indexing in List

Indexing is used to access individual elements of a list.

List indexing starts from `0`.

    numbers = [10, 20, 30, 40, 50]

    print(numbers[0])
    print(numbers[2])

Negative indexing starts from `-1`.

    print(numbers[-1])
    print(numbers[-2])

An element can be changed using its index.

    numbers[2] = 35
    print(numbers)

## 3. List Concatenation

List concatenation means joining two lists using the `+` operator.

    list1 = [10, 20, 30]
    list2 = [40, 50, 60]

    result = list1 + list2

    print(result)

## 4. List Repetition

List repetition means repeating the elements of a list using the `*` operator.

    numbers = [10, 20, 30]

    result = numbers * 3

    print(result)

## 5. List Membership

The `in` and `not in` operators are used to check whether an element exists in a list.

    numbers = [10, 20, 30, 40, 50]

    print(30 in numbers)
    print(60 in numbers)

    print(30 not in numbers)
    print(60 not in numbers)

## 6. List Slicing

Slicing is used to access a part of a list.

Syntax:

    list[start:stop:step]

Example:

    numbers = [10, 20, 30, 40, 50, 60]

    print(numbers[0:3])
    print(numbers[1:5])

    print(numbers[:4])
    print(numbers[2:])

    print(numbers[0:6:2])

Reverse a list using slicing:

    print(numbers[::-1])

## 7. Traversing a List

Traversing means accessing each element of a list one by one.

### Using for loop

    numbers = [10, 20, 30, 40, 50]

    for number in numbers:
        print(number)

### Using index

    numbers = [10, 20, 30, 40, 50]

    for i in range(len(numbers)):
        print(numbers[i])

## 8. Built-in List Functions

Common built-in functions used with lists are:

- `len()` — returns the number of elements
- `max()` — returns the largest element
- `min()` — returns the smallest element
- `sum()` — returns the sum of numeric elements
- `sorted()` — returns the elements in sorted order

Example:

    numbers = [40, 10, 50, 20, 30]

    print(len(numbers))
    print(max(numbers))
    print(min(numbers))
    print(sum(numbers))
    print(sorted(numbers))

## 9. Linear Search on List of Numbers

Linear search checks the elements of a list one by one until the required number is found.

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

## 10. Counting the Frequency of Elements in a List

Frequency means the number of times an element occurs in a list.

    numbers = [10, 20, 10, 30, 20, 10, 40]

    search = int(input("Enter number: "))

    count = 0

    for number in numbers:
        if number == search:
            count += 1

    print("Frequency =", count)

## Important Points

1. List indexing starts from `0`.
2. Negative indexing starts from `-1`.
3. Lists support concatenation using `+`.
4. Lists support repetition using `*`.
5. `in` and `not in` are used for membership checking.
6. Slicing is used to access a part of a list.
7. A list can be traversed using loops.
8. Built-in functions can be used with lists.
9. Linear search checks list elements one by one.
10. Frequency means counting the occurrences of an element.

## Quick Revision

List
├── Introduction
├── Indexing
├── Concatenation
├── Repetition
├── Membership
├── Slicing
├── Traversing
├── Built-in Functions
├── Linear Search
└── Frequency Counting