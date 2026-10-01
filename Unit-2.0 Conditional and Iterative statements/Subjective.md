# UNIT 2 — CONDITIONAL AND ITERATIVE STATEMENTS
## Subjective Questions with Answers

### Q1. What is a Conditional Statement?

Answer:
A conditional statement is used to execute a particular block of code based on a condition.

Python provides three main conditional statements:
1. if statement
2. if-else statement
3. if-elif-else statement


### Q2. Explain the simple if statement with an example.

Answer:
The simple if statement executes a block of code only when the given condition is True.

Example:

age = 18

if age >= 18:
    print("Eligible")


### Q3. Explain the if-else statement with an example.

Answer:
The if-else statement is used when there are two possible outcomes.
If the condition is True, the if block is executed.
If the condition is False, the else block is executed.

Example:

number = 10

if number > 0:
    print("Positive")
else:
    print("Negative")


### Q4. Explain the if-elif-else statement.

Answer:
The if-elif-else statement is used to check multiple conditions.
Python checks the conditions from top to bottom and executes the block of the first True condition.

Example:

marks = 75

if marks >= 80:
    print("A Grade")
elif marks >= 60:
    print("B Grade")
else:
    print("C Grade")


### Q5. What is an iterative statement?

Answer:
An iterative statement is used to execute a block of code repeatedly.

Python mainly provides:
1. while loop
2. for loop

Other important loop-control statements are:
- break
- continue
- range()


### Q6. Explain the while loop with an example.

Answer:
The while loop repeatedly executes a block of code as long as its condition remains True.

Example:

i = 1

while i <= 5:
    print(i)
    i += 1


### Q7. Explain the for loop with an example.

Answer:
The for loop is used to iterate over a sequence or range of values.

Example:

for i in range(1, 6):
    print(i)


### Q8. What is the range() function?

Answer:
The range() function generates a sequence of numbers.
It is commonly used with the for loop.

Forms of range():

range(stop)
range(start, stop)
range(start, stop, step)

Example:

for i in range(2, 7):
    print(i)


### Q9. Explain the break statement.

Answer:
The break statement immediately terminates the loop.

Example:

for i in range(1, 6):
    if i == 4:
        break
    print(i)


### Q10. Explain the continue statement.

Answer:
The continue statement skips the current iteration and moves to the next iteration of the loop.

Example:

for i in range(1, 6):
    if i == 3:
        continue
    print(i)


### Q11. What is a nested loop?

Answer:
A loop inside another loop is called a nested loop.

Example:

for i in range(1, 3):
    for j in range(1, 4):
        print(i, j)


### Q12. Differentiate between if, if-else and if-elif-else.

Answer:

if:
Used to check a single condition.

if-else:
Used when there are two possible outcomes.

if-elif-else:
Used when multiple conditions need to be checked.


### Q13. Differentiate between break and continue.

Answer:

break:
It immediately terminates the entire loop.

continue:
It skips only the current iteration and continues with the next iteration.


### Q14. Write a Python program to check whether a number is positive, negative or zero.

Answer:

number = int(input("Enter a number: "))

if number > 0:
    print("Positive")
elif number < 0:
    print("Negative")
else:
    print("Zero")


### Q15. Write a Python program to display numbers from 1 to 10.

Answer:

for i in range(1, 11):
    print(i)


### Q16. Write a Python program to display the multiplication table of a number.

Answer:

n = int(input("Enter a number: "))

for i in range(1, 11):
    print(n, "x", i, "=", n * i)


### Q17. Write a Python program to find the factorial of a number.

Answer:

n = int(input("Enter a number: "))
factorial = 1

for i in range(1, n + 1):
    factorial *= i

print(factorial)


### Q18. Write a Python program to print the Fibonacci sequence.

Answer:

n = int(input("Enter number of terms: "))

a = 0
b = 1

for i in range(n):
    print(a)
    a, b = b, a + b


### Q19. Write a Python program to print all prime numbers in an interval.

Answer:

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


### Q20. Write a Python program using nested loops to print a 3 × 3 pattern.

Answer:

for i in range(3):
    for j in range(3):
        print("*", end=" ")
    print()


# QUICK REVISION

1. if → Checks a condition.
2. if-else → Provides two possible paths.
3. if-elif-else → Checks multiple conditions.
4. while → Repeats while a condition is True.
5. for → Iterates over a sequence or range.
6. range() → Generates a sequence of numbers.
7. break → Terminates the loop.
8. continue → Skips the current iteration.
9. Nested loop → A loop inside another loop.