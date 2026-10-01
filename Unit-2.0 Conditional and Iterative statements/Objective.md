# Unit 2 — Conditional and Iterative Statements
## Objective Questions (MCQ)

> Python Programming — SBTE Bihar Diploma
>
> Covered Topics:
> - Simple if statement
> - if-else statement
> - if-elif-else statement
> - while loop
> - for loop
> - range() function
> - break statement
> - continue statement
> - nested loops

---

# Section A — Conditional Statements

## 1. Which keyword is used to create a simple conditional statement in Python?

A. check
B. if
C. condition
D. when

**Answer: B**

---

## 2. Which statement executes a block only when its condition is True?

A. if
B. for
C. while
D. break

**Answer: A**

---

## 3. Which symbol is required after the condition of an if statement?

A. ;
B. .
C. :
D. ,

**Answer: C**

---

## 4. Which of the following is the correct syntax of a simple if statement?

A. if condition
B. if condition:
C. if (condition);
D. if: condition

**Answer: B**

---

## 5. What happens when the condition of an if statement is False?

A. The if block is executed
B. The program stops automatically
C. The if block is skipped
D. The condition becomes True

**Answer: C**

---

## 6. What is the output?

    x = 10

    if x > 5:
        print("Yes")

A. No output
B. Yes
C. 10
D. Error

**Answer: B**

---

## 7. What is the output?

    x = 3

    if x > 5:
        print("Yes")

A. Yes
B. 3
C. No output
D. Error

**Answer: C**

---

## 8. Which statement is used to provide an alternative block when the if condition is False?

A. elif
B. else
C. otherwise
D. alternative

**Answer: B**

---

## 9. Which keyword is used with if to test another condition?

A. else
B. elif
C. another
D. switch

**Answer: B**

---

## 10. Which is the correct structure?

A. if → else → elif
B. else → if → elif
C. if → elif → else
D. elif → else → if

**Answer: C**

---

## 11. How many else blocks can normally be associated with one if-elif-else structure?

A. One
B. Two
C. Three
D. Unlimited

**Answer: A**

---

## 12. How many elif blocks can be used in an if-elif-else structure?

A. Only one
B. Only two
C. Multiple
D. None

**Answer: C**

---

## 13. Which block executes when all if and elif conditions are False?

A. if
B. elif
C. else
D. while

**Answer: C**

---

## 14. What is the output?

    x = 10

    if x > 20:
        print("A")
    else:
        print("B")

A. A
B. B
C. A B
D. Error

**Answer: B**

---

## 15. What is the output?

    x = 15

    if x > 10:
        print("A")
    else:
        print("B")

A. A
B. B
C. A B
D. No output

**Answer: A**

---

## 16. What is the output?

    marks = 70

    if marks >= 80:
        print("A")
    elif marks >= 60:
        print("B")
    else:
        print("C")

A. A
B. B
C. C
D. Error

**Answer: B**

---

## 17. What is the output?

    marks = 90

    if marks >= 80:
        print("A")
    elif marks >= 60:
        print("B")
    else:
        print("C")

A. A
B. B
C. C
D. A B

**Answer: A**

---

## 18. What is the output?

    marks = 40

    if marks >= 80:
        print("A")
    elif marks >= 60:
        print("B")
    else:
        print("C")

A. A
B. B
C. C
D. No output

**Answer: C**

---

## 19. In an if-elif-else structure, when a condition becomes True, what normally happens?

A. All remaining blocks execute
B. The matching block executes and remaining conditions are skipped
C. The program always stops
D. The else block executes

**Answer: B**

---

## 20. Which statement is correct about indentation in Python?

A. Indentation is optional
B. Indentation defines the block of code
C. Indentation is used only for comments
D. Indentation is used only in loops

**Answer: B**

---

## 21. What is the output?

    x = 10

    if x > 5:
        print("Greater")
        print("Value accepted")

A. Greater
B. Value accepted
C. Greater and Value accepted
D. No output

**Answer: C**

---

## 22. Which of the following represents a decision-making statement?

A. if
B. print
C. input
D. import

**Answer: A**

---

## 23. Which statement is most suitable when there are multiple conditions to check?

A. Simple if
B. if-elif-else
C. print
D. break

**Answer: B**

---

## 24. What is the output?

    x = 5

    if x == 5:
        print("Correct")
    else:
        print("Wrong")

A. Correct
B. Wrong
C. 5
D. Error

**Answer: A**

---

## 25. What is the output?

    x = 5

    if x != 5:
        print("Correct")
    else:
        print("Wrong")

A. Correct
B. Wrong
C. 5
D. No output

**Answer: B**

---

# Section B — While Loop

## 26. Which loop is generally used when a condition controls repetition?

A. for
B. while
C. if
D. elif

**Answer: B**

---

## 27. Which keyword is used to create a while loop?

A. repeat
B. loop
C. while
D. during

**Answer: C**

---

## 28. What is the basic structure of a while loop?

A. while condition:
B. while: condition
C. while(condition);
D. loop while condition

**Answer: A**

---

## 29. What happens when the while condition becomes False?

A. The loop continues forever
B. The loop terminates
C. The program restarts
D. The condition becomes True

**Answer: B**

---

## 30. What is the output?

    i = 1

    while i <= 3:
        print(i)
        i += 1

A. 1 2 3
B. 0 1 2
C. 1 2
D. Infinite loop

**Answer: A**

---

## 31. What is the output?

    i = 5

    while i > 2:
        print(i)
        i -= 1

A. 5 4 3
B. 5 4 3 2
C. 4 3 2
D. Infinite loop

**Answer: A**

---

## 32. What can happen if the condition of a while loop never becomes False?

A. Syntax error
B. Infinite loop
C. Automatic break
D. Loop executes once

**Answer: B**

---

## 33. Which operation is commonly necessary to prevent an unintended infinite while loop?

A. Changing/updating the loop variable
B. Removing indentation
C. Adding another if
D. Using print()

**Answer: A**

---

## 34. What is the output?

    i = 1

    while i <= 5:
        print(i)
        i = i + 2

A. 1 2 3 4 5
B. 1 3 5
C. 2 4
D. 1 3

**Answer: B**

---

## 35. A while loop checks its condition:

A. After every program
B. Before each iteration
C. Only at the end
D. Only once after the loop

**Answer: B**

---

# Section C — For Loop

## 36. Which keyword is used to create a for loop in Python?

A. repeat
B. loop
C. for
D. foreach

**Answer: C**

---

## 37. Which loop is commonly used to iterate over a sequence or range of values?

A. if
B. for
C. elif
D. else

**Answer: B**

---

## 38. What is the output?

    for i in range(3):
        print(i)

A. 1 2 3
B. 0 1 2
C. 0 1 2 3
D. 3

**Answer: B**

---

## 39. What is the output?

    for i in range(1, 4):
        print(i)

A. 0 1 2 3
B. 1 2 3
C. 1 2 3 4
D. 0 1 2

**Answer: B**

---

## 40. What is the output?

    for i in range(2, 8, 2):
        print(i)

A. 2 4 6
B. 2 4 6 8
C. 0 2 4 6
D. 2 3 4 5 6 7

**Answer: A**

---

## 41. Which loop is generally more convenient when the number of iterations is known?

A. while
B. for
C. if
D. elif

**Answer: B**

---

# Section D — range() Function

## 42. What is the purpose of range()?

A. To compare values
B. To generate a sequence of numbers
C. To stop a loop
D. To define a function

**Answer: B**

---

## 43. What does `range(5)` represent?

A. 1, 2, 3, 4, 5
B. 0, 1, 2, 3, 4
C. 0, 1, 2, 3, 4, 5
D. 5 only

**Answer: B**

---

## 44. What is the default starting value of range() when only one argument is given?

A. 0
B. 1
C. -1
D. The given number

**Answer: A**

---

## 45. In `range(2, 7)`, which value is excluded?

A. 2
B. 5
C. 6
D. 7

**Answer: D**

---

## 46. What is the output?

    print(list(range(5)))

A. [1, 2, 3, 4, 5]
B. [0, 1, 2, 3, 4]
C. [0, 1, 2, 3, 4, 5]
D. [5]

**Answer: B**

---

## 47. What is the output?

    print(list(range(2, 6)))

A. [2, 3, 4, 5]
B. [2, 3, 4, 5, 6]
C. [1, 2, 3, 4, 5]
D. [3, 4, 5, 6]

**Answer: A**

---

## 48. What is the output?

    print(list(range(1, 10, 3)))

A. [1, 3, 5, 7, 9]
B. [1, 4, 7]
C. [1, 4, 7, 10]
D. [0, 3, 6, 9]

**Answer: B**

---

## 49. In `range(start, stop, step)`, what does `step` specify?

A. Ending value
B. Starting value
C. Difference between consecutive values
D. Number of loops only

**Answer: C**

---

## 50. What is the output?

    print(list(range(5, 0, -1)))

A. [5, 4, 3, 2, 1]
B. [5, 4, 3, 2, 1, 0]
C. [0, 1, 2, 3, 4, 5]
D. [1, 2, 3, 4, 5]

**Answer: A**

---

## 51. Which statement is correct about the stop value of range()?

A. It is always included
B. It is normally excluded
C. It must be zero
D. It must be negative

**Answer: B**

---

# Section E — break Statement

## 52. Which keyword is used to terminate a loop immediately?

A. stop
B. exit
C. break
D. terminate

**Answer: C**

---

## 53. What does break do inside a loop?

A. Skips one iteration
B. Terminates the loop
C. Restarts the loop
D. Pauses the program

**Answer: B**

---

## 54. What is the output?

    for i in range(1, 6):
        if i == 4:
            break
        print(i)

A. 1 2 3
B. 1 2 3 4
C. 1 2 3 4 5
D. 4 5

**Answer: A**

---

## 55. What happens after break is executed?

A. The next iteration starts
B. The current loop terminates
C. The loop restarts
D. The condition becomes True

**Answer: B**

---

## 56. Which statement is useful when a desired condition is found and further looping is unnecessary?

A. continue
B. break
C. range
D. elif

**Answer: B**

---

# Section F — continue Statement

## 57. Which keyword skips the current iteration of a loop?

A. skip
B. continue
C. pass
D. next

**Answer: B**

---

## 58. What does continue do?

A. Terminates the loop
B. Skips the current iteration and continues with the next iteration
C. Stops the entire program
D. Restarts Python

**Answer: B**

---

## 59. What is the output?

    for i in range(1, 6):
        if i == 3:
            continue
        print(i)

A. 1 2 3 4 5
B. 1 2 4 5
C. 3
D. 1 2

**Answer: B**

---

## 60. What happens when continue is executed inside a loop?

A. The loop ends permanently
B. The current iteration is skipped
C. The program closes
D. The loop variable is deleted

**Answer: B**

---

## 61. Which is the main difference between break and continue?

A. break skips one iteration; continue stops the loop
B. break stops the loop; continue skips the current iteration
C. Both always stop the loop
D. Both always skip the current iteration

**Answer: B**

---

# Section G — Nested Loops

## 62. What is a nested loop?

A. A loop without a condition
B. A loop inside another loop
C. Two unrelated loops
D. A loop with an if statement only

**Answer: B**

---

## 63. Which of the following can be nested?

A. Only for inside for
B. Only while inside while
C. Different types of loops can be nested
D. No loops can be nested

**Answer: C**

---

## 64. What is the output?

    for i in range(2):
        for j in range(2):
            print(i, j)

A. 0 0 / 1 1
B. 0 0 / 0 1 / 1 0 / 1 1
C. 0 1
D. 1 0

**Answer: B**

---

## 65. In a nested loop, the inner loop normally completes its iterations:

A. Before the outer loop starts
B. For each iteration of the outer loop
C. Only once in the entire program
D. After the outer loop finishes

**Answer: B**

---

## 66. What is the output?

    for i in range(2):
        for j in range(3):
            print("*")

How many times is `*` printed?

A. 2
B. 3
C. 5
D. 6

**Answer: D**

---

## 67. If the outer loop executes 3 times and the inner loop executes 4 times for each outer iteration, how many total inner-loop executions occur?

A. 7
B. 12
C. 4
D. 3

**Answer: B**

---

## 68. Which structure can be used to print a pattern of rows and columns?

A. Nested loops
B. Simple if only
C. break only
D. continue only

**Answer: A**

---

# Section H — Mixed Concept Questions

## 69. Which statement belongs to conditional statements?

A. if
B. range()
C. break
D. continue

**Answer: A**

---

## 70. Which of the following belongs to iterative statements?

A. if-else
B. elif
C. while
D. else

**Answer: C**

---

## 71. Which pair contains only conditional statements?

A. if and if-else
B. for and while
C. break and continue
D. range and for

**Answer: A**

---

## 72. Which pair contains loop statements?

A. if and elif
B. for and while
C. else and elif
D. break and if

**Answer: B**

---

## 73. Which pair is used to control loop execution?

A. if and elif
B. break and continue
C. else and elif
D. range and if

**Answer: B**

---

## 74. What is the output?

    for i in range(5):
        if i == 2:
            break
        print(i)

A. 0 1
B. 0 1 2
C. 2 3 4
D. 0 1 2 3 4

**Answer: A**

---

## 75. What is the output?

    for i in range(5):
        if i == 2:
            continue
        print(i)

A. 0 1 2 3 4
B. 0 1 3 4
C. 2
D. 0 1

**Answer: B**

---

## 76. What is the output?

    x = 10

    if x > 5:
        if x < 20:
            print("Yes")

A. Yes
B. No
C. 10
D. Error

**Answer: A**

---

## 77. What is the output?

    for i in range(1, 4):
        if i == 2:
            continue
        print(i)

A. 1 2 3
B. 1 3
C. 2
D. 1 2

**Answer: B**

---

## 78. What is the output?

    for i in range(1, 4):
        if i == 2:
            break
        print(i)

A. 1
B. 1 2
C. 2 3
D. 1 2 3

**Answer: A**

---

## 79. Which statement is correct?

A. break skips only the current iteration
B. continue terminates the complete loop
C. break terminates the loop
D. range() terminates a loop

**Answer: C**

---

## 80. Which statement is correct?

A. continue terminates the complete loop
B. continue skips the current iteration
C. break skips only one iteration
D. range() skips an iteration

**Answer: B**

---

## 81. Which statement is correct about while loops?

A. They can never become infinite
B. They repeat while their condition remains True
C. They always execute exactly five times
D. They cannot use break

**Answer: B**

---

## 82. Which statement is correct about for loops?

A. They cannot use range()
B. They can iterate through values generated by range()
C. They cannot contain if statements
D. They cannot contain break

**Answer: B**

---

## 83. Which statement is correct about nested loops?

A. A loop cannot be placed inside another loop
B. A nested loop contains a loop inside another loop
C. Nested loops are only used with while
D. Nested loops always execute once

**Answer: B**

---

## 84. What is the output?

    count = 1

    while count <= 3:
        print(count)
        count += 1

A. 0 1 2
B. 1 2 3
C. 1 2
D. Infinite loop

**Answer: B**

---

## 85. What is the output?

    for i in range(3, 8):
        print(i)

A. 3 4 5 6 7
B. 3 4 5 6 7 8
C. 0 1 2 3 4
D. 4 5 6 7 8

**Answer: A**

---

## 86. What is the output?

    for i in range(10, 5, -1):
        print(i)

A. 10 9 8 7 6
B. 10 9 8 7 6 5
C. 5 6 7 8 9 10
D. 10 8 6

**Answer: A**

---

## 87. What is the output?

    for i in range(2, 10, 2):
        print(i)

A. 2 4 6 8
B. 2 4 6 8 10
C. 0 2 4 6 8
D. 1 3 5 7 9

**Answer: A**

---

## 88. What is the output?

    x = 20

    if x < 10:
        print("A")
    elif x < 20:
        print("B")
    else:
        print("C")

A. A
B. B
C. C
D. No output

**Answer: C**

---

## 89. Which of the following can be used inside both for and while loops?

A. break
B. continue
C. Both A and B
D. Neither A nor B

**Answer: C**

---

## 90. Which of the following is NOT a loop statement?

A. for
B. while
C. if
D. Both A and B

**Answer: C**

---

# Section I — Exam-Trap Questions

## 91. What is the output?

    x = 5

    if x > 10:
        print("A")
    elif x > 3:
        print("B")
    elif x > 1:
        print("C")
    else:
        print("D")

A. A
B. B
C. C
D. D

**Answer: B**

---

## 92. What is the output?

    for i in range(1, 5):
        if i == 3:
            continue
        print(i)

A. 1 2 3 4
B. 1 2 4
C. 3
D. 1 2

**Answer: B**

---

## 93. What is the output?

    for i in range(1, 5):
        if i == 3:
            break
        print(i)

A. 1 2
B. 1 2 3
C. 3 4
D. 1 2 3 4

**Answer: A**

---

## 94. How many times will `Hello` be printed?

    for i in range(4):
        print("Hello")

A. 3
B. 4
C. 5
D. 0

**Answer: B**

---

## 95. How many times will `Hello` be printed?

    for i in range(2):
        for j in range(3):
            print("Hello")

A. 2
B. 3
C. 5
D. 6

**Answer: D**

---

## 96. What is the output?

    i = 1

    while i < 5:
        print(i)
        i += 1

A. 1 2 3 4
B. 1 2 3 4 5
C. 0 1 2 3
D. Infinite loop

**Answer: A**

---

## 97. What is the output?

    for i in range(5, 0, -1):
        print(i)

A. 0 1 2 3 4
B. 5 4 3 2 1
C. 5 4 3 2 1 0
D. 1 2 3 4 5

**Answer: B**

---

## 98. Which value is NOT produced by `range(1, 10, 2)`?

A. 1
B. 5
C. 9
D. 10

**Answer: D**

---

## 99. What is the main purpose of the `else` block in an if-else statement?

A. Execute when the if condition is False
B. Execute before the if condition
C. Repeat the if condition
D. Stop the program

**Answer: A**

---

## 100. Which sequence correctly represents the major topics of Unit 2?

A. String → List → Tuple
B. Conditional Statements → Iterative Statements
C. Functions → Modules → Packages
D. NumPy → File Handling

**Answer: B**

---

# 🎯 Topic Coverage Checklist

## 2.1 Conditional Statements

- [x] Simple if statement
- [x] if-else statement
- [x] if-elif-else statement
- [x] Condition True/False
- [x] Syntax
- [x] Indentation
- [x] Multiple elif
- [x] else execution
- [x] Output-based questions

## 2.2 Iterative Statements

- [x] while loop
- [x] for loop
- [x] range() function
- [x] range(start, stop)
- [x] range(start, stop, step)
- [x] Positive step
- [x] Negative step
- [x] break statement
- [x] continue statement
- [x] Difference between break and continue
- [x] Nested loops
- [x] Loop counting
- [x] Output-based questions
- [x] Mixed/tricky questions

---

# 🏆 Quick Revision

| Topic | Main Point |
|---|---|
| if | Executes block when condition is True |
| if-else | Chooses between two blocks |
| if-elif-else | Checks multiple conditions |
| while | Repeats while condition is True |
| for | Iterates through values/sequences |
| range() | Generates a sequence of numbers |
| break | Terminates the loop |
| continue | Skips current iteration |
| Nested Loop | Loop inside another loop |

---

# 📌 Unit 2 Coverage

**Total MCQs: 100**

Every syllabus topic of Unit 2 is covered through:

- Direct questions
- Definition questions
- Syntax questions
- Concept questions
- Output-based questions
- Difference-based questions
- Tricky questions
- Loop-counting questions
- range() questions
- break/continue questions
- Nested-loop questions

**Unit 2 — Conditional and Iterative Statements — Objective Practice Complete.**