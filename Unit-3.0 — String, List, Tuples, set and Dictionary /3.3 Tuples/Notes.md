# Unit 3.3 — Tuples

## 3.3 Tuples

A tuple is an ordered collection of elements. Tuples are written using parentheses `()`.

The syllabus covers:
- Creating Tuples
- Initializing Tuples
- Accessing Elements
- Tuple Assignment
- Performing Operations on Tuples
- Tuple Methods and Built-in Functions
- Nested Tuples

---

## 1. Creating Tuples

A tuple can be created using parentheses `()`.

    numbers = (10, 20, 30, 40, 50)

    print(numbers)

A tuple can contain different types of elements.

    data = (10, "Python", 3.14, True)

    print(data)

An empty tuple can be created as:

    empty = ()

    print(empty)

---

## 2. Initializing Tuples

A tuple can be initialized with values at the time of creation.

    numbers = (10, 20, 30)

    print(numbers)

For a single-element tuple, a comma is required.

    single = (10,)

    print(single)

Without the comma, it is treated as a normal value.

---

## 3. Accessing Elements

Tuple elements are accessed using indexing.

Indexing starts from `0`.

    numbers = (10, 20, 30, 40, 50)

    print(numbers[0])
    print(numbers[2])
    print(numbers[4])

Negative indexing starts from `-1`.

    print(numbers[-1])
    print(numbers[-2])

---

## 4. Tuple Assignment

Tuple assignment allows multiple values to be assigned to multiple variables.

    student = ("Lalan", 17)

    name, age = student

    print(name)
    print(age)

Multiple values can also be assigned directly.

    a, b, c = (10, 20, 30)

    print(a)
    print(b)
    print(c)

---

## 5. Performing Operations on Tuples

### Concatenation

Two tuples can be joined using the `+` operator.

    tuple1 = (10, 20, 30)
    tuple2 = (40, 50, 60)

    result = tuple1 + tuple2

    print(result)

### Repetition

A tuple can be repeated using the `*` operator.

    numbers = (10, 20, 30)

    result = numbers * 2

    print(result)

### Membership

The `in` and `not in` operators are used to check membership.

    numbers = (10, 20, 30, 40)

    print(20 in numbers)
    print(50 not in numbers)

### Slicing

Slicing is used to access a part of a tuple.

    numbers = (10, 20, 30, 40, 50)

    print(numbers[1:4])
    print(numbers[:3])
    print(numbers[2:])
    print(numbers[::-1])

---

## 6. Tuple Methods and Built-in Functions

### Tuple Methods

`count()` returns the number of occurrences of an element.

    numbers = (10, 20, 20, 30, 20)

    print(numbers.count(20))

`index()` returns the index of an element.

    numbers = (10, 20, 30, 40)

    print(numbers.index(30))

### Built-in Functions

Common built-in functions used with tuples include:

- `len()` — returns the number of elements
- `max()` — returns the largest element
- `min()` — returns the smallest element
- `sum()` — returns the sum of numeric elements
- `sorted()` — returns the elements in sorted order

Example:

    numbers = (10, 20, 30, 40, 50)

    print(len(numbers))
    print(max(numbers))
    print(min(numbers))
    print(sum(numbers))
    print(sorted(numbers))

---

## 7. Nested Tuples

A tuple containing another tuple is called a nested tuple.

    student = (
        ("Lalan", 17),
        ("Python", 80),
        ("Circuit", 75)
    )

    print(student)

Elements of a nested tuple can be accessed using multiple indexes.

    print(student[0])
    print(student[0][0])
    print(student[0][1])

A nested tuple can also be traversed using a loop.

    for item in student:
        print(item)

---

## Important Points

1. Tuples are ordered collections.
2. Tuple elements are accessed using indexes.
3. Indexing starts from `0`.
4. Negative indexing starts from `-1`.
5. Tuple assignment allows multiple values to be assigned at once.
6. Tuple operations include concatenation, repetition, membership and slicing.
7. Common tuple methods are `count()` and `index()`.
8. Built-in functions such as `len()`, `max()`, `min()`, `sum()` and `sorted()` can be used with tuples.
9. A tuple can contain another tuple. This is called a nested tuple.

---

## Quick Revision

Tuple
├── Creating Tuples
├── Initializing Tuples
├── Accessing Elements
├── Tuple Assignment
├── Performing Operations on Tuples
├── Tuple Methods and Built-in Functions
└── Nested Tuples