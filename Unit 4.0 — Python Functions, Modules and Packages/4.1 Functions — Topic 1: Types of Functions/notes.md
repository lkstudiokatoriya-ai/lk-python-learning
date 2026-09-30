# Functions — Topic 1: Types of Functions

## Introduction to Functions

A function is a block of code that performs a specific task.

Functions help us:
- Organize a program
- Reuse code
- Reduce repetition
- Make programs easier to understand
- Make programs easier to maintain

Python functions can be divided into different types.

The main types covered in this topic are:

1. Built-in Functions
2. Functions Defined in a Module
3. User-defined Functions


# 1. Built-in Functions

Built-in functions are functions that are already provided by Python.

We can use these functions directly without creating them ourselves.

Examples of commonly used built-in functions:

- len()
- max()
- min()
- sum()
- type()
- print()

## Example

    numbers = [10, 20, 30, 40, 50]

    print(len(numbers))
    print(max(numbers))
    print(min(numbers))
    print(sum(numbers))

## Explanation

### len()

The `len()` function returns the number of items.

    numbers = [10, 20, 30, 40, 50]

    print(len(numbers))

### max()

The `max()` function returns the largest value.

    numbers = [10, 20, 30, 40, 50]

    print(max(numbers))

### min()

The `min()` function returns the smallest value.

    numbers = [10, 20, 30, 40, 50]

    print(min(numbers))

### sum()

The `sum()` function adds the numeric values.

    numbers = [10, 20, 30, 40, 50]

    print(sum(numbers))

## Important Point

Built-in functions are already available in Python, so we do not need to define them before using them.


# 2. Functions Defined in a Module

A module is a Python file that contains Python code such as functions and other definitions.

Python provides many modules containing useful functions.

To use functions from a module, we can import the module.

The `import` keyword is used to import a module.

## Example

    import math

    number = 25

    print(math.sqrt(number))

    print(math.factorial(5))

## Explanation

Here:

- `math` is a module.
- `import math` imports the math module.
- `sqrt()` is a function available in the math module.
- `factorial()` is a function available in the math module.

The module name and function name are written using a dot:

    module_name.function_name()

Example:

    math.sqrt(25)

## sqrt()

`sqrt()` returns the square root of a number.

    import math

    number = 25

    print(math.sqrt(number))

## factorial()

`factorial()` calculates the factorial of a number.

    import math

    number = 5

    print(math.factorial(number))

## Important Point

Functions defined in a module are not used in the same way as ordinary built-in functions.

The required module is imported first.

Example:

    import math

Then the function can be accessed using:

    math.sqrt(25)


# 3. User-defined Functions

User-defined functions are functions created by the programmer.

They are created when a program needs a specific task to be performed.

The `def` keyword is used to create a user-defined function.

## Basic Syntax

    def function_name():
        statements

## Example

    def greet():
        print("Hello, Python")

    greet()

## Explanation

### def

`def` is the keyword used to define a function.

### function_name

This is the name given to the function.

Example:

    greet

### Function Body

The indented statements inside the function form the function body.

Example:

    def greet():
        print("Hello, Python")

### Function Call

A function is executed by calling its name.

    greet()


# Creating a User-defined Function

Example:

    def display_message():
        message = "Welcome to Python Programming"
        print(message)

    display_message()

In this example:

- `def` creates the function.
- `display_message` is the function name.
- `message` is a variable inside the function.
- `print(message)` performs the required task.
- `display_message()` calls the function.


# Another Example of a User-defined Function

    def add():
        a = 10
        b = 20
        print(a + b)

    add()

The function performs the addition task when it is called.


# Function Definition and Function Call

There are two important parts of a user-defined function:

## Function Definition

Creating the function is called defining the function.

Example:

    def greet():
        print("Hello")

## Function Call

Using the function is called calling the function.

Example:

    greet()


# Why Use User-defined Functions?

User-defined functions are useful because they:

- Reduce repeated code
- Make programs organized
- Make code easier to understand
- Allow the same task to be performed multiple times
- Divide a large program into smaller parts


# Comparison of the Three Types

## Built-in Functions

- Already provided by Python
- Can be used directly
- Example: `len()`, `max()`, `min()`, `sum()`

## Functions Defined in a Module

- Available inside Python modules
- The required module is imported first
- Example: `math.sqrt()`, `math.factorial()`

## User-defined Functions

- Created by the programmer
- Created using the `def` keyword
- Called using the function name
- Example: `greet()`


# Important Points for Exam

1. A function is a block of code that performs a specific task.
2. Python provides many built-in functions.
3. Built-in functions can be used directly.
4. Modules contain useful Python functions.
5. The `import` keyword is used to import a module.
6. Module functions can be accessed using the module name and dot operator.
7. User-defined functions are created by the programmer.
8. The `def` keyword is used to define a user-defined function.
9. A function executes when it is called.
10. A function can be called multiple times.


# Quick Revision

Functions
│
├── Built-in Functions
│   ├── len()
│   ├── max()
│   ├── min()
│   └── sum()
│
├── Functions Defined in a Module
│   └── math
│       ├── sqrt()
│       └── factorial()
│
└── User-defined Functions
    ├── def
    ├── Function Definition
    └── Function Call


# Key Terms

Function
: A block of code designed to perform a specific task.

Built-in Function
: A function already provided by Python.

Module
: A Python file containing reusable Python code.

User-defined Function
: A function created by the programmer.

def
: Python keyword used to define a user-defined function.

Function Call
: The statement used to execute a function.