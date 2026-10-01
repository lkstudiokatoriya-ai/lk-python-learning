# UNIT 2
# CONDITIONAL AND ITERATIVE STATEMENTS

## 2.1 CONDITIONAL STATEMENTS

### 1. Conditional Statement

A conditional statement is used to make a decision in a program.

Python provides:
- if statement
- if-else statement
- if-elif-else statement


### 2. Simple if Statement

The `if` statement executes a block of code when the given condition is True.

Syntax:

    if condition:
        statement

Example:

    age = 18

    if age >= 18:
        print("Eligible")

Remember:
- Condition must be True to execute the block.
- Indentation is compulsory.


### 3. if-else Statement

The `if-else` statement is used when there are two possible conditions.

Syntax:

    if condition:
        statement
    else:
        statement

Example:

    n = 10

    if n > 0:
        print("Positive")
    else:
        print("Negative")

Remember:

True  → if block
False → else block


### 4. if-elif-else Statement

It is used when more than two conditions are required.

Syntax:

    if condition1:
        statement
    elif condition2:
        statement
    else:
        statement

Example:

    marks = 75

    if marks >= 80:
        print("A Grade")
    elif marks >= 60:
        print("B Grade")
    else:
        print("C Grade")

Python checks the conditions from top to bottom.


## 2.2 ITERATIVE STATEMENTS

### 5. Iterative Statement

An iterative statement is used to execute a block of statements repeatedly.

Python provides:
- while loop
- for loop


### 6. while Loop

The `while` loop executes statements repeatedly as long as the condition is True.

Syntax:

    while condition:
        statement

Example:

    i = 1

    while i <= 5:
        print(i)
        i += 1

Important:
Always update the loop variable properly to avoid an infinite loop.


### 7. for Loop

The `for` loop is used to iterate through a sequence or range of values.

Syntax:

    for variable in sequence:
        statement

Example:

    for i in range(1, 6):
        print(i)


### 8. range() Function

The `range()` function generates a sequence of numbers.

Three forms:

    range(stop)

    range(start, stop)

    range(start, stop, step)


Example:

    range(5)

Gives:

    0, 1, 2, 3, 4


Example:

    range(2, 7)

Gives:

    2, 3, 4, 5, 6


Example:

    range(1, 10, 2)

Gives:

    1, 3, 5, 7, 9

Important:
The `stop` value is not included.


### 9. break Statement

The `break` statement immediately terminates the loop.

Example:

    for i in range(1, 6):
        if i == 4:
            break
        print(i)

Remember:

    break = Stop the loop


### 10. continue Statement

The `continue` statement skips the current iteration and moves to the next iteration.

Example:

    for i in range(1, 6):
        if i == 3:
            continue
        print(i)

Remember:

    continue = Skip current iteration


### 11. Nested Loop

A loop inside another loop is called a nested loop.

Example:

    for i in range(1, 3):
        for j in range(1, 4):
            print(i, j)

Here:
- Outer loop controls `i`.
- Inner loop controls `j`.


# IMPORTANT DIFFERENCES

## if vs if-else

if:
Used for a single condition.

if-else:
Used for two possible results.


## for vs while

for:
Used to iterate over a sequence or range.

while:
Used to repeat statements while a condition remains True.


## break vs continue

break:
Terminates the loop completely.

continue:
Skips only the current iteration.


# IMPORTANT PROGRAMS

## 1. Positive, Negative or Zero

    n = int(input("Enter number: "))

    if n > 0:
        print("Positive")
    elif n < 0:
        print("Negative")
    else:
        print("Zero")


## 2. Multiplication Table

    n = int(input("Enter number: "))

    for i in range(1, 11):
        print(n, "x", i, "=", n * i)


## 3. Factorial

    n = int(input("Enter number: "))
    fact = 1

    for i in range(1, n + 1):
        fact *= i

    print(fact)


## 4. Fibonacci Series

    n = int(input("Enter terms: "))

    a = 0
    b = 1

    for i in range(n):
        print(a)
        a, b = b, a + b


## 5. Prime Numbers in an Interval

    start = int(input("Enter starting number: "))
    end = int(input("Enter ending number: "))

    for n in range(start, end + 1):

        if n < 2:
            continue

        prime = True

        for i in range(2, n):
            if n % i == 0:
                prime = False
                break

        if prime:
            print(n)


# QUICK REVISION

if
→ Decision making

if-else
→ Two choices

if-elif-else
→ Multiple choices

while
→ Repeats while condition is True

for
→ Iterates over a sequence/range

range()
→ Generates numbers

break
→ Terminates loop

continue
→ Skips current iteration

Nested loop
→ Loop inside another loop


# EXAM POINTS

1. Learn the syntax of all conditional statements.
2. Remember proper indentation.
3. Understand `range()` carefully.
4. Remember that the stop value of `range()` is excluded.
5. Know the difference between `break` and `continue`.
6. Practice while and for loops.
7. Practice the practical programs given in Unit 2.

# UNIT 2 COMPLETE