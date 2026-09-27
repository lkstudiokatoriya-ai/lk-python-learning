# Unit 2.2 – Iterative Statements

## 1. Iterative Statements

Iterative statements are used to execute a block of code repeatedly.

The main loops in Python are:

- while loop
- for loop
- nested loops

Loop control statements include:

- break
- continue
- pass

---

## 2. while Loop

The while loop executes a block of code as long as the given condition is True.

### Syntax

    while condition:
        statement

### Example

    i = 1

    while i <= 5:
        print(i)
        i = i + 1

---

## 3. for Loop

The for loop is used to iterate over a sequence such as a range, list, string, tuple, etc.

### Syntax

    for variable in sequence:
        statement

### Example

    for i in range(1, 6):
        print(i)

---

## 4. range() Function

The range() function generates a sequence of numbers.

### range(stop)

    for i in range(5):
        print(i)

### range(start, stop)

    for i in range(1, 6):
        print(i)

### range(start, stop, step)

    for i in range(1, 11, 2):
        print(i)

### Reverse range

    for i in range(10, 0, -1):
        print(i)

---

## 5. break Statement

The break statement immediately terminates the loop.

### Example

    for i in range(1, 11):
        if i == 6:
            break
        print(i)

When the condition becomes True, the loop stops completely.

---

## 6. continue Statement

The continue statement skips the current iteration and moves to the next iteration.

### Example

    for i in range(1, 11):
        if i == 5:
            continue
        print(i)

---

## 7. pass Statement

The pass statement is an empty statement.

It is used when a statement is syntactically required but no action is needed.

### Example

    for i in range(5):
        pass

---

## 8. Nested Loops

A loop inside another loop is called a nested loop.

### Example

    for i in range(1, 4):
        for j in range(1, 4):
            print(i, j)

The outer loop runs first, and for every iteration of the outer loop, the inner loop executes completely.

---

## 9. Nested while Loop

A while loop can also contain another while loop.

### Example

    i = 1

    while i <= 3:
        j = 1

        while j <= 3:
            print(i, j)
            j = j + 1

        i = i + 1

---

## 10. Nested Loop Pattern

Nested loops can be used to create different patterns.

### Example

    for i in range(1, 6):
        for j in range(i):
            print("*", end=" ")
        print()

---

## 11. Multiplication Table Using Loop

    number = int(input("Enter a number: "))

    for i in range(1, 11):
        print(number * i)

---

## 12. break with while Loop

    i = 1

    while i <= 10:
        if i == 6:
            break

        print(i)
        i = i + 1

---

## 13. continue with while Loop

    i = 1

    while i <= 10:
        if i == 5:
            i = i + 1
            continue

        print(i)
        i = i + 1

---

## 14. Loop with else

Python allows an else block with loops.

The else block executes when the loop finishes normally without being terminated by break.

### Example

    for i in range(1, 6):
        print(i)
    else:
        print("Loop completed")

---

## 15. break vs continue

| break | continue |
|---|---|
| Terminates the entire loop | Skips only the current iteration |
| Loop stops completely | Loop continues with the next iteration |
| Used to exit a loop | Used to skip an iteration |

---

## 16. for Loop vs while Loop

| for loop | while loop |
|---|---|
| Used to iterate over a sequence | Runs according to a condition |
| Commonly used with range() | Requires a condition |
| Useful when the number of iterations is known | Useful when the number of iterations depends on a condition |

---

## 17. Important Points

- Loops are used for repeated execution of code.
- The while loop works based on a condition.
- The for loop iterates over a sequence.
- The range() function generates a sequence of numbers.
- break terminates the loop.
- continue skips the current iteration.
- pass does nothing and acts as a placeholder.
- A loop inside another loop is called a nested loop.
- Nested loops are commonly used for patterns and repeated operations.
- A loop can also have an else block.

---

## 18. Complete Example

    number = int(input("Enter a number: "))

    for i in range(1, 11):

        if i == 5:
            continue

        if i == 9:
            break

        print(number * i)

---

## 19. Quick Revision

### while
Repeats code while a condition is True.

### for
Iterates over a sequence.

### range()
Generates a sequence of numbers.

### break
Stops the loop completely.

### continue
Skips the current iteration.

### pass
Does nothing and acts as a placeholder.

### nested loop
A loop inside another loop.

### loop else
Executes when the loop completes normally without break.