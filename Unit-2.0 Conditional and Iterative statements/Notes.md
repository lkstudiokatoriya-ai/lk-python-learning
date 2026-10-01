# Unit 2 — Conditional and Iterative Statements

## Python Programming — Course Code: 2418305

---

# 1. Introduction

In Python programming, a program often needs to make decisions and repeat a particular task multiple times.

Python provides:

1. Conditional Statements
2. Iterative Statements
3. Loop Control Statements

According to the SBTE Bihar syllabus, Unit 2 contains:

- Simple if statement
- if-else statement
- if-elif-else statement
- while loop
- for loop
- range() function
- break statement
- continue statement
- Nested loops

---

# 2. Conditional Statements

## 2.1 What is a Conditional Statement?

A conditional statement is used to make decisions in a Python program.

It checks a condition and executes a particular block of code depending on whether the condition is True or False.

### Main Conditional Statements

Python provides:

1. if statement
2. if-else statement
3. if-elif-else statement

---

# 3. Simple if Statement

## Definition

The `if` statement executes a block of code only when the given condition is True.

### Syntax

    if condition:
        statement

### Example

    age = 18

    if age >= 18:
        print("Eligible")

### Explanation

- `if` is a Python keyword.
- `age >= 18` is the condition.
- If the condition is True, the print statement is executed.
- If the condition is False, the block is skipped.

---

# 4. if Statement with Comparison

Example:

    number = 10

    if number > 5:
        print("Number is greater than 5")

Here, the condition `number > 5` is True, so the message is displayed.

---

# 5. if Statement with User Input

Example:

    number = int(input("Enter a number: "))

    if number > 0:
        print("Positive Number")

This program checks whether the entered number is positive.

---

# 6. if-else Statement

## Definition

The `if-else` statement is used when there are two possible paths.

- If the condition is True → `if` block executes.
- If the condition is False → `else` block executes.

### Syntax

    if condition:
        statement
    else:
        statement

### Example

    number = 10

    if number > 0:
        print("Positive")
    else:
        print("Negative")

---

# 7. Even or Odd Using if-else

Example:

    number = int(input("Enter a number: "))

    if number % 2 == 0:
        print("Even")
    else:
        print("Odd")

### Explanation

The `%` operator gives the remainder.

If the remainder after division by 2 is `0`, the number is even.

Otherwise, it is odd.

---

# 8. if-elif-else Statement

## Definition

The `if-elif-else` statement is used when multiple conditions need to be checked.

### Syntax

    if condition1:
        statement
    elif condition2:
        statement
    elif condition3:
        statement
    else:
        statement

### Example

    marks = 75

    if marks >= 80:
        print("A Grade")
    elif marks >= 60:
        print("B Grade")
    elif marks >= 40:
        print("C Grade")
    else:
        print("Fail")

### Working

Python checks conditions from top to bottom.

The block belonging to the first True condition is executed.

---

# 9. Multiple elif Statements

More than one `elif` can be used when required.

Example:

    marks = 85

    if marks >= 90:
        print("Excellent")
    elif marks >= 80:
        print("Very Good")
    elif marks >= 70:
        print("Good")
    elif marks >= 60:
        print("Average")
    else:
        print("Needs Improvement")

---

# 10. Difference Between if, if-else and if-elif-else

| Statement | Purpose |
|---|---|
| if | Checks a single condition |
| if-else | Provides two possible paths |
| if-elif-else | Checks multiple conditions |

---

# 11. Nested Conditional Statements

A conditional statement can be placed inside another conditional statement.

Example:

    age = 20
    citizen = True

    if age >= 18:
        if citizen:
            print("Eligible")
        else:
            print("Not eligible")
    else:
        print("Under age")

This is called a nested conditional structure.

---

# 12. Iterative Statements

## Definition

An iterative statement is used to execute a block of code repeatedly.

Python provides two main loops:

1. while loop
2. for loop

---

# 13. while Loop

## Definition

The `while` loop repeatedly executes a block of code as long as its condition remains True.

### Syntax

    while condition:
        statement

### Example

    i = 1

    while i <= 5:
        print(i)
        i += 1

### Working

The loop checks the condition before each iteration.

When the condition becomes False, the loop stops.

---

# 14. while Loop with User Input

Example:

    number = int(input("Enter a number: "))

    i = 1

    while i <= 10:
        print(number * i)
        i += 1

This program displays the multiplication table using a `while` loop.

---

# 15. Infinite while Loop

If the condition of a `while` loop never becomes False, the loop can continue indefinitely.

Example:

    i = 1

    while i <= 5:
        print(i)

The value of `i` is never changed, so the condition remains True.

To avoid this situation, update the loop variable appropriately.

Correct example:

    i = 1

    while i <= 5:
        print(i)
        i += 1

---

# 16. for Loop

## Definition

The `for` loop is used to iterate over a sequence or range of values.

### Syntax

    for variable in sequence:
        statement

### Example

    for i in range(1, 6):
        print(i)

This processes the values from 1 to 5.

---

# 17. for Loop with a String

A `for` loop can traverse the characters of a string.

Example:

    name = "Python"

    for ch in name:
        print(ch)

Each character is processed one by one.

---

# 18. for Loop with a List

Example:

    numbers = [10, 20, 30, 40]

    for number in numbers:
        print(number)

The loop processes each element of the list.

---

# 19. range() Function

## Definition

The `range()` function generates a sequence of numbers.

It is commonly used with the `for` loop.

### Forms of range()

    range(stop)

    range(start, stop)

    range(start, stop, step)

---

# 20. range(stop)

Example:

    for i in range(5):
        print(i)

The sequence starts from `0` and stops before `5`.

Values:

    0
    1
    2
    3
    4

---

# 21. range(start, stop)

Example:

    for i in range(2, 7):
        print(i)

Values:

    2
    3
    4
    5
    6

The stop value `7` is not included.

---

# 22. range(start, stop, step)

The `step` value determines how much the number changes each time.

Example:

    for i in range(1, 10, 2):
        print(i)

Values:

    1
    3
    5
    7
    9

---

# 23. Reverse range

A negative step can be used to generate decreasing values.

Example:

    for i in range(5, 0, -1):
        print(i)

Values:

    5
    4
    3
    2
    1

---

# 24. break Statement

## Definition

The `break` statement immediately terminates the loop.

### Example

    for i in range(1, 6):
        if i == 4:
            break
        print(i)

When `i` becomes `4`, the loop terminates.

### Important Point

`break` exits the entire loop in which it is used.

---

# 25. break with while Loop

Example:

    i = 1

    while i <= 10:
        if i == 6:
            break

        print(i)
        i += 1

The loop stops when `i` becomes `6`.

---

# 26. continue Statement

## Definition

The `continue` statement skips the current iteration and moves to the next iteration.

### Example

    for i in range(1, 6):
        if i == 3:
            continue

        print(i)

The value `3` is skipped.

---

# 27. continue with while Loop

Example:

    i = 0

    while i < 5:
        i += 1

        if i == 3:
            continue

        print(i)

The current iteration is skipped when `i` is `3`.

---

# 28. Difference Between break and continue

| break | continue |
|---|---|
| Terminates the loop | Skips the current iteration |
| Control comes out of the loop | Control goes to the next iteration |
| Stops further iterations | Further iterations continue |

### Remember

    break → Stop the loop

    continue → Skip this iteration

---

# 29. Nested Loops

## Definition

When one loop is placed inside another loop, it is called a nested loop.

### Syntax

    for variable1 in sequence:
        for variable2 in sequence:
            statement

### Example

    for i in range(1, 3):
        for j in range(1, 4):
            print(i, j)

Here:

- The outer loop controls `i`.
- The inner loop controls `j`.
- The inner loop runs for each iteration of the outer loop.

---

# 30. Nested Loop Pattern

Example:

    for i in range(3):
        for j in range(3):
            print("*", end=" ")
        print()

Nested loops are commonly useful for working with patterns and repeated combinations.

---

# 31. Program: Check Positive, Negative or Zero

    number = int(input("Enter a number: "))

    if number > 0:
        print("Positive")
    elif number < 0:
        print("Negative")
    else:
        print("Zero")

---

# 32. Program: Check Even or Odd

    number = int(input("Enter a number: "))

    if number % 2 == 0:
        print("Even")
    else:
        print("Odd")

---

# 33. Program: Check Leap Year

    year = int(input("Enter year: "))

    if year % 400 == 0:
        print("Leap Year")
    elif year % 100 == 0:
        print("Not a Leap Year")
    elif year % 4 == 0:
        print("Leap Year")
    else:
        print("Not a Leap Year")

---

# 34. Program: Multiplication Table

Using for loop:

    number = int(input("Enter a number: "))

    for i in range(1, 11):
        print(number, "x", i, "=", number * i)

---

# 35. Program: Factorial of a Number

    n = int(input("Enter a number: "))

    factorial = 1

    for i in range(1, n + 1):
        factorial *= i

    print("Factorial =", factorial)

---

# 36. Program: Fibonacci Sequence

    n = int(input("Enter number of terms: "))

    a = 0
    b = 1

    for i in range(n):
        print(a)
        a, b = b, a + b

---

# 37. Program: Prime Numbers in an Interval

    start = int(input("Enter starting number: "))
    end = int(input("Enter ending number: "))

    for num in range(start, end + 1):

        if num < 2:
            continue

        is_prime = True

        for i in range(2, num):
            if num % i == 0:
                is_prime = False
                break

        if is_prime:
            print(num)

---

# 38. Program: Sum of Numbers from 1 to n

    n = int(input("Enter a number: "))

    total = 0

    for i in range(1, n + 1):
        total += i

    print("Sum =", total)

---

# 39. Program: Print Odd Numbers

    for i in range(1, 21):
        if i % 2 != 0:
            print(i)

---

# 40. Program: Print Even Numbers

    for i in range(1, 21):
        if i % 2 == 0:
            print(i)

---

# 41. Program: Reverse Counting

    for i in range(10, 0, -1):
        print(i)

---

# 42. Program: Use break to Stop at a Number

    for i in range(1, 11):
        if i == 6:
            break
        print(i)

---

# 43. Program: Use continue to Skip a Number

    for i in range(1, 11):
        if i == 5:
            continue
        print(i)

---

# 44. Program: Nested Loop Multiplication Pattern

    for i in range(1, 4):
        for j in range(1, 4):
            print(i * j, end=" ")
        print()

---

# 45. Important Terms

## Condition

An expression that evaluates to either True or False.

Example:

    x > 10

---

## Iteration

One execution of a loop is called an iteration.

---

## Loop

A programming structure used to execute statements repeatedly.

---

## Nested Loop

A loop inside another loop.

---

## Infinite Loop

A loop that continues indefinitely because its condition never becomes False.

---

# 46. Important Differences

## for Loop vs while Loop

| for Loop | while Loop |
|---|---|
| Commonly used for sequences/ranges | Commonly used when repetition depends on a condition |
| Often used when the number of iterations is known | Useful when the number of iterations depends on a condition |
| Uses `for` keyword | Uses `while` keyword |

---

## if vs Loop

| Conditional Statement | Loop |
|---|---|
| Used for decision making | Used for repetition |
| Usually selects a block based on a condition | Repeatedly executes a block |
| Examples: if, if-else | Examples: for, while |

---

# 47. Common Mistakes

## Mistake 1: Forgetting indentation

Incorrect:

    if x > 5:
    print(x)

Correct:

    if x > 5:
        print(x)

---

## Mistake 2: Forgetting to update while-loop variable

Incorrect:

    i = 1

    while i <= 5:
        print(i)

Correct:

    i = 1

    while i <= 5:
        print(i)
        i += 1

---

## Mistake 3: Confusing break and continue

Remember:

    break = terminate loop

    continue = skip current iteration

---

## Mistake 4: Forgetting that range() excludes stop value

Example:

    range(1, 5)

Generates:

    1, 2, 3, 4

It does not include `5`.

---

# 48. Exam-Oriented Short Questions

### Q1. What is an if statement?

An `if` statement executes a block when its condition is True.

### Q2. What is an if-else statement?

It provides two execution paths depending on the condition.

### Q3. What is an elif statement?

`elif` is used to check another condition when the previous condition is False.

### Q4. What is a loop?

A loop repeatedly executes a block of code.

### Q5. Name the two main loops in Python.

1. while loop
2. for loop

### Q6. What is range()?

`range()` generates a sequence of numbers.

### Q7. What does break do?

It terminates the loop immediately.

### Q8. What does continue do?

It skips the current iteration.

### Q9. What is a nested loop?

A loop inside another loop.

### Q10. What happens if a while-loop condition always remains True?

The loop can continue indefinitely.

---

# 49. Important Long Questions for Examination

1. Explain conditional statements in Python with examples.
2. Explain the simple if statement.
3. Explain the if-else statement with an example.
4. Explain the if-elif-else statement with an example.
5. Explain the while loop with syntax and example.
6. Explain the for loop with syntax and example.
7. Explain the range() function and its different forms.
8. Explain the break statement with an example.
9. Explain the continue statement with an example.
10. Explain nested loops with an example.
11. Differentiate between break and continue.
12. Differentiate between for and while loops.
13. Write a program to check whether a number is positive, negative or zero.
14. Write a program to check whether a year is a leap year.
15. Write a program to print prime numbers in an interval.
16. Write a program to display a multiplication table.
17. Write a program to print the Fibonacci sequence.
18. Write a program to find the factorial of a number.

---

# 50. Quick Revision

## Conditional Statements

    if
    if-else
    if-elif-else

## Iterative Statements

    while
    for

## Other Unit 2 Topics

    range()
    break
    continue
    nested loops

## Easy Memory Trick

    if       → Decision
    for      → Repeat over sequence
    while    → Repeat while condition is True
    range    → Generate numbers
    break    → Stop
    continue → Skip
    nested   → Loop inside loop

---

# Unit 2 Checklist

- [ ] Simple if statement
- [ ] if-else statement
- [ ] if-elif-else statement
- [ ] while loop
- [ ] for loop
- [ ] range() function
- [ ] break statement
- [ ] continue statement
- [ ] Nested loops
- [ ] Positive/Negative/Zero program
- [ ] Leap Year program
- [ ] Prime Numbers program
- [ ] Multiplication Table program
- [ ] Fibonacci program
- [ ] Factorial program

---

# Conclusion

Conditional statements are used for decision making, while iterative statements are used for repeating tasks.

The important concepts of Unit 2 are:

    if
    if-else
    if-elif-else
    while
    for
    range()
    break
    continue
    nested loops

These concepts are fundamental for writing Python programs using decision-making and loop structures.