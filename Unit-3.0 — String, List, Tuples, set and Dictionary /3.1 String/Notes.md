# Unit 3.1 – String

## 1. String

A string is a sequence of characters enclosed inside single quotes (`' '`), double quotes (`" "`), or triple quotes.

### Example

    name = "Lalan"
    city = 'Banka'

---

## 2. Indexing

Indexing is used to access individual characters of a string.

Python uses zero-based indexing.

Positive indexing starts from `0`.

Negative indexing starts from `-1`.

### Example

    text = "PYTHON"

    print(text[0])
    print(text[1])
    print(text[2])

    print(text[-1])
    print(text[-2])
    print(text[-3])

---

## 3. String Operations

Python supports several operations on strings.

### 3.1 Concatenation

Concatenation means joining two or more strings using the `+` operator.

    first_name = "Lalan"
    last_name = "Kumar"

    full_name = first_name + " " + last_name

    print(full_name)

### 3.2 Repetition

The `*` operator is used to repeat a string multiple times.

    text = "Python "

    print(text * 3)

### 3.3 Membership

The `in` and `not in` operators are used to check whether a character or substring exists in a string.

    text = "Python Programming"

    print("Python" in text)
    print("Java" in text)

    print("Java" not in text)

### 3.4 Slicing

Slicing is used to extract a part of a string.

### Syntax

    string[start:stop:step]

The `stop` index is not included.

### Example

    text = "PYTHON"

    print(text[0:3])
    print(text[1:5])
    print(text[:4])
    print(text[2:])
    print(text[::2])
    print(text[::-1])

---

## 4. Traversing a String Using Loops

Traversing means accessing each character of a string one by one.

### Using for loop

    text = "PYTHON"

    for character in text:
        print(character)

### Using index

    text = "PYTHON"

    for i in range(len(text)):
        print(text[i])

### Using while loop

    text = "PYTHON"

    i = 0

    while i < len(text):
        print(text[i])
        i = i + 1

### Reverse Traversing

    text = "PYTHON"

    for character in text[::-1]:
        print(character)

---

## 5. Built-in Functions

Python provides built-in functions that can be used with strings.

### len()

Returns the number of characters in a string.

    text = "Python"

    print(len(text))

### max()

Returns the character with the highest value according to the character ordering.

    text = "Python"

    print(max(text))

### min()

Returns the character with the lowest value according to the character ordering.

    text = "Python"

    print(min(text))

### sorted()

Returns the characters of a string in sorted order as a list.

    text = "Python"

    print(sorted(text))

### type()

Returns the data type of an object.

    text = "Python"

    print(type(text))

### str()

Converts a value into a string.

    number = 100

    text = str(number)

    print(text)

---

## 6. String with User Input

    text = input("Enter a string: ")

    print(len(text))
    print(text[0])
    print(text[-1])

---

## 7. Important Points

- A string is a sequence of characters.
- String indexing starts from `0`.
- Negative indexing starts from `-1`.
- Strings support concatenation using `+`.
- Strings can be repeated using `*`.
- `in` checks membership in a string.
- `not in` checks absence of a character or substring.
- Slicing is used to extract a portion of a string.
- Strings can be traversed using loops.
- `len()` returns the length of a string.
- `max()` returns the maximum character.
- `min()` returns the minimum character.
- `sorted()` returns sorted characters as a list.
- `type()` returns the data type.
- `str()` converts a value into a string.

---

## 8. Quick Revision

| Topic | Purpose |
|---|---|
| Indexing | Access individual characters |
| Concatenation | Join strings |
| Repetition | Repeat strings |
| Membership | Check whether text exists |
| Slicing | Extract part of a string |
| Traversing | Access characters one by one |
| Built-in Functions | Perform common operations |

---

## 9. 3.1 String Completed

The topics covered in Unit 3.1 are:

1. Indexing
2. Concatenation
3. Repetition
4. Membership
5. Slicing
6. Traversing a String Using Loops
7. Built-in Functions