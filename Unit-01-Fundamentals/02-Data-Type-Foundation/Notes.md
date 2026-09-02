# 🧩 Data Type Foundation

> Unit 01 • Fundamentals of Python Programming Syntax

---

## 📦 1. Data Types

### Definition

A **data type** defines the kind of value stored in a Python variable.

Python supports different data types such as integer, float, complex, boolean, string, list, tuple, `None`, and dictionary.

---

## 🔢 2. Integer — `int`

### Definition
The `int` data type is used to store whole numbers without a decimal point.

### Example
`age = 18`

`print(age)`

**Output:** `18`

### Type Check
`print(type(age))`

**Output:** `<class 'int'>`

---

## 🔢 3. Float — `float`

### Definition
The `float` data type is used to store numbers containing a decimal point.

### Example
`marks = 85.5`

`print(marks)`

**Output:** `85.5`

### Type Check
`print(type(marks))`

**Output:** `<class 'float'>`

---

## 🧮 4. Complex — `complex`

### Definition
The `complex` data type is used to represent complex numbers.

### Example
`number = 3 + 4j`

`print(number)`

**Output:** `3+4j`

### Type Check
`print(type(number))`

**Output:** `<class 'complex'>`

---

## ✅ 5. Boolean — `bool`

### Definition
The `bool` data type represents one of two values: `True` or `False`.

### Example
`is_student = True`

`print(is_student)`

**Output:** `True`

### Type Check
`print(type(is_student))`

**Output:** `<class 'bool'>`

---

## 🔤 6. String — `str`

### Definition
A **string** is a sequence of characters enclosed in single or double quotes.

### Example
`name = "Lalan"`

`print(name)`

**Output:** `Lalan`

### Type Check
`print(type(name))`

**Output:** `<class 'str'>`

---

## 📋 7. List

### Definition
A **list** is an ordered collection of values. A list is mutable, which means its values can be changed.

### Example
`subjects = ["Python", "Math", "Electrical"]`

`print(subjects)`

**Output:** `['Python', 'Math', 'Electrical']`

### Type Check
`print(type(subjects))`

**Output:** `<class 'list'>`

---

## 📌 8. Tuple

### Definition
A **tuple** is an ordered collection of values. A tuple is immutable, which means its values cannot be changed after creation.

### Example
`coordinates = (10, 20, 30)`

`print(coordinates)`

**Output:** `(10, 20, 30)`

### Type Check
`print(type(coordinates))`

**Output:** `<class 'tuple'>`

---

## 🚫 9. None Type

### Definition
`None` represents the absence of a value.

### Example
`result = None`

`print(result)`

**Output:** `None`

### Type Check
`print(type(result))`

**Output:** `<class 'NoneType'>`

---

## 🗂️ 10. Dictionary — `dict`

### Definition
A **dictionary** stores data in **key-value pairs**.

### Example
`student = {"name": "Lalan", "age": 18}`

`print(student)`

**Output:** `{'name': 'Lalan', 'age': 18}`

### Accessing a Value
`print(student["name"])`

**Output:** `Lalan`

### Type Check
`print(type(student))`

**Output:** `<class 'dict'>`

---

## 🔄 11. Mutable and Immutable

### Mutable

A mutable data type can be changed after it is created.

**Example:** `list`

`subjects = ["Python", "Math"]`

`subjects[0] = "C"`

**Output:** `['C', 'Math']`

### Immutable

An immutable data type cannot be changed after it is created.

**Examples:** `int`, `float`, `complex`, `bool`, `str`, `tuple`

---

## ⚡ Quick Revision

| Data Type | Example | Mutable |
|---|---|---|
| `int` | `10` | No |
| `float` | `10.5` | No |
| `complex` | `3+4j` | No |
| `bool` | `True` | No |
| `str` | `"Python"` | No |
| `list` | `[1, 2, 3]` | Yes |
| `tuple` | `(1, 2, 3)` | No |
| `None` | `None` | — |
| `dict` | `{"a": 1}` | Yes |

---

## 🔍 Checking Data Type

The `type()` function is used to identify the data type of a value or variable.

**Example:** `x = 25`  
`print(type(x))`

**Output:** `<class 'int'>`

---

## 🎯 Practice

1. Create an integer variable and check its type.
2. Create a float variable and check its type.
3. Create a complex number.
4. Create a Boolean variable.
5. Create a string variable.
6. Create a list and change one value.
7. Create a tuple.
8. Create a dictionary with three key-value pairs.
9. Create a variable containing `None`.
10. Use `type()` to check different data types.

---

## 📝 Summary

**int** → Whole numbers  
**float** → Decimal numbers  
**complex** → Complex numbers  
**bool** → `True` or `False`  
**str** → Text/characters  
**list** → Mutable collection  
**tuple** → Immutable collection  
**None** → No value  
**dict** → Key-value pairs

> 🐍 Learn → Code → Run → Practice
