# Unit 3.5 — Dictionary

## 3.5 Dictionary

A dictionary is a collection of items stored in key-value pairs.

Example:
    student = {
        "name": "Lalan",
        "age": 17,
        "branch": "Electrical"
    }

## 1. Accessing Items in a Dictionary Using Keys

Dictionary items are accessed using their keys.

Example:
    student = {
        "name": "Lalan",
        "age": 17,
        "branch": "Electrical"
    }

    print(student["name"])
    print(student["age"])
    print(student["branch"])

A variable can also be used as a key.

Example:
    key = "name"
    print(student[key])

## 2. Mutability of Dictionary

A dictionary is mutable, which means its items can be added, modified, or changed after creation.

### Adding a New Item

A new item can be added by assigning a value to a new key.

Example:
    student = {
        "name": "Lalan",
        "age": 17
    }

    student["branch"] = "Electrical"

    print(student)

### Modifying an Existing Item

An existing item's value can be changed using its key.

Example:
    student = {
        "name": "Lalan",
        "age": 17,
        "branch": "Electrical"
    }
    student["name"] = Ashish 
    student["age"] = 18
    student["branch"] = "Civil"

    print(student)

## 3. Built-in Dictionary Functions

Common functions and methods used with dictionaries include len(), keys(), values(), and items().

Example:
    student = {
        "name": "Lalan",
        "age": 17,
        "branch": "Electrical"
    }

    print(len(student))
    print(student.keys())
    print(student.values())
    print(student.items())

### len()

Returns the number of items in the dictionary.

    print(len(student))

### keys()

Returns all keys of the dictionary.

    print(student.keys())

### values()

Returns all values of the dictionary.

    print(student.values())

### items()

Returns key-value pairs of the dictionary.

    print(student.items())

## Important Points

- A dictionary stores data in key-value pairs.
- Keys are used to access dictionary values.
- A dictionary is mutable.
- A new item can be added using a new key.
- An existing item can be modified using its key.
- len() gives the number of dictionary items.
- keys() returns the keys.
- values() returns the values.
- items() returns key-value pairs.

## Quick Revision

Dictionary
├── Accessing Items Using Keys
├── Mutability
│   ├── Adding a New Item
│   └── Modifying an Existing Item
└── Built-in Dictionary Functions
    ├── len()
    ├── keys()
    ├── values()
    └── items()