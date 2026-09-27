# Unit 3.4 — Set

## 3.4 Set

A set is an unordered collection of unique elements. Sets are created using curly braces `{}`.

The syllabus covers:
- Creating Set
- Traversing
- Adding Data in Set
- Removing Data in Set
- Performing Set Operations
  - Join
  - Union
  - Intersection
  - Difference

---

## 1. Creating Set

A set can be created using curly braces `{}`.

    numbers = {10, 20, 30, 40, 50}

    print(numbers)

A set can also contain different types of data.

    data = {10, "Python", 3.14}

    print(data)

An empty set is created using `set()`.

    empty = set()

    print(empty)

Duplicate elements are not stored in a set.

    numbers = {10, 20, 10, 30, 20}

    print(numbers)

---

## 2. Traversing a Set

Traversing means accessing each element of a set one by one.

A `for` loop can be used to traverse a set.

    numbers = {10, 20, 30, 40, 50}

    for number in numbers:
        print(number)

---

## 3. Adding Data in Set

The `add()` method is used to add an element to a set.

    numbers = {10, 20, 30}

    numbers.add(40)

    print(numbers)

Another element can also be added.

    numbers.add(50)

    print(numbers)

---

## 4. Removing Data in Set

The `remove()` method is used to remove an element from a set.

    numbers = {10, 20, 30, 40, 50}

    numbers.remove(30)

    print(numbers)

Another element can also be removed.

    numbers.remove(50)

    print(numbers)

---

## 5. Performing Set Operations

Set operations are used to combine or compare sets.

The syllabus includes:

- Join
- Union
- Intersection
- Difference

### Join

The `|` operator can be used to join the elements of two sets.

    set1 = {10, 20, 30}
    set2 = {30, 40, 50}

    result = set1 | set2

    print(result)

### Union

Union returns all unique elements from both sets.

    set1 = {10, 20, 30}
    set2 = {30, 40, 50}

    result = set1.union(set2)

    print(result)

### Intersection

Intersection returns the elements that are common in both sets.

    set1 = {10, 20, 30, 40}
    set2 = {30, 40, 50, 60}

    result = set1 & set2

    print(result)

### Difference

Difference returns the elements that are present in the first set but not in the second set.

    set1 = {10, 20, 30, 40}
    set2 = {30, 40, 50, 60}

    result = set1 - set2

    print(result)

---

## Important Points

1. A set contains unique elements.
2. Sets are created using `{}`.
3. An empty set is created using `set()`.
4. A set can be traversed using a `for` loop.
5. `add()` is used to add data to a set.
6. `remove()` is used to remove data from a set.
7. Union combines unique elements from both sets.
8. Intersection gives common elements.
9. Difference gives elements present in one set but not in the other.
10. Set operations can be performed using operators and set methods.

---

## Quick Revision

Set
├── Creating Set
├── Traversing
├── Adding Data
├── Removing Data
└── Set Operations
    ├── Join
    ├── Union
    ├── Intersection
    └── Difference