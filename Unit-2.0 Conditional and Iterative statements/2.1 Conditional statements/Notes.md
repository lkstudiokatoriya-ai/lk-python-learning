# 📘 Conditional Statements — Short Notes

> **Unit 2.1 • Conditional Statements**  
> 🎯 **VVI Notes • Exam + Dry Run + Practical Understanding**

---

# 2.1 Conditional Statements

Conditional statements are used for **decision making** in a Python program.

According to the syllabus, this section contains:

1. **Simple `if` statement**
2. **`if-else` statement**
3. **`if-elif-else` statement**

---

# 1. 🟢 Simple `if` Statement

## Definition

A simple `if` statement is used to execute a block of statements only when the given condition is `True`.

If the condition is `True`, the statements inside `if` are executed.

If the condition is `False`, the statements inside `if` are skipped.

## Syntax

`if condition:`

`    statement`

## Example

`number = 10`

`if number > 0:`

`    print("Positive number")`

## Working

First, Python checks the condition `number > 0`.

If the condition is `True`, the `print()` statement is executed.

If the condition is `False`, the `print()` statement is skipped.

---

# 2. 🟡 `if-else` Statement

## Definition

The `if-else` statement is used when there are two possible paths based on a condition.

- If the condition is `True` → `if` block executes.
- If the condition is `False` → `else` block executes.

## Syntax

`if condition:`

`    statement1`

`else:`

`    statement2`

## Example

`number = int(input("Enter a number: "))`

`if number % 2 == 0:`

`    print("Even number")`

`else:`

`    print("Odd number")`

## Working

Python first checks the condition.

If `number % 2 == 0` is `True`, the `if` block executes.

Otherwise, the `else` block executes.

---

# 3. 🔴 `if-elif-else` Statement

## Definition

The `if-elif-else` statement is used when multiple conditions need to be checked.

Python checks the conditions from top to bottom.

The block belonging to the **first True condition** is executed.

## Syntax

`if condition1:`

`    statement1`

`elif condition2:`

`    statement2`

`elif condition3:`

`    statement3`

`else:`

`    statement4`

## Example

`marks = int(input("Enter marks: "))`

`if marks >= 80:`

`    print("Grade A")`

`elif marks >= 60:`

`    print("Grade B")`

`elif marks >= 40:`

`    print("Grade C")`

`else:`

`    print("Grade F")`

---

# ⚖️ Difference Between Conditional Statements

| Statement | Purpose |
|---|---|
| `if` | Executes code when one condition is True |
| `if-else` | Selects between two possible blocks |
| `if-elif-else` | Selects one block from multiple conditions |

---

# 🧠 Important Concepts

## Condition

A condition is an expression that produces a Boolean result: `True` or `False`.

Examples:

`number > 10`

`marks >= 40`

`a == b`

---

## Colon `:`

A colon is required after the condition.

Correct:

`if number > 0:`

---

## Indentation

Statements belonging to an `if`, `elif`, or `else` block must be indented.

Example:

`if number > 0:`

`    print("Positive")`

---

## `=` vs `==`

`=` → Assignment operator

`==` → Equality comparison operator

Example:

`number = 10`

`number == 10`

---

# ✍️ How Questions Are Asked in the Exam

### Simple `if`

**Q1.** Define a simple `if` statement in Python.

**Q2.** Write the syntax of a simple `if` statement.

**Q3.** Write a Python program using a simple `if` statement to check whether a number is positive.

---

### `if-else`

**Q4.** What is an `if-else` statement? Explain with an example.

**Q5.** Write a Python program to check whether a number is even or odd using `if-else`.

---

### `if-elif-else`

**Q6.** Explain the `if-elif-else` statement with syntax.

**Q7.** Write a Python program to display grades using `if-elif-else`.

---

### Difference

**Q8.** Differentiate between `if`, `if-else`, and `if-elif-else` statements.

---

# 📝 How to Write the Answer in the Exam

For a theory question, use this order:

**1. Definition**

Write a short and clear definition.

**2. Syntax**

Write the correct syntax.

**3. Example/Program**

Write a suitable Python example or program.

**4. Explanation**

Explain briefly how the condition is checked and which block is executed.

This makes the answer complete and easy to evaluate.

---

# 🧮 Dry Run in the Exam

## What is a Dry Run?

A **dry run** means manually tracing a program **step by step on paper** without actually executing it on a computer.

In the theory examination, you should be prepared to write the program and determine its output manually.

---

# 🔍 How to Perform a Dry Run

Follow these steps:

1. Read the program carefully.
2. Identify the initial values of variables.
3. Check the condition.
4. Decide whether the condition is `True` or `False`.
5. Execute only the appropriate block.
6. Update variable values if required.
7. Continue line by line.
8. Write the final output.

---

# 📌 Dry Run Example — `if`

Program:

`number = 10`

`if number > 5:`

`    print("Greater")`

### Dry Run

Initial value:

`number = 10`

Condition:

`10 > 5`

Condition result:

`True`

Therefore, the `print()` statement executes.

**Output:** `Greater`

---

# 📌 Dry Run Example — `if-else`

Program:

`number = 7`

`if number % 2 == 0:`

`    print("Even")`

`else:`

`    print("Odd")`

### Dry Run

`number = 7`

Calculate:

`7 % 2 = 1`

Condition:

`1 == 0`

Result:

`False`

Therefore, the `else` block executes.

**Output:** `Odd`

---

# 📌 Dry Run Example — `if-elif-else`

Program:

`marks = 65`

`if marks >= 80:`

`    print("A")`

`elif marks >= 60:`

`    print("B")`

`elif marks >= 40:`

`    print("C")`

`else:`

`    print("F")`

### Dry Run

`marks = 65`

First condition:

`65 >= 80` → `False`

Second condition:

`65 >= 60` → `True`

Therefore, `print("B")` executes.

The remaining `elif` and `else` blocks are not checked for execution.

**Output:** `B`

---

# 📊 Dry Run Table Method

For longer programs, you can make a table on the answer sheet.

| Step | Variable | Condition | Result | Action |
|---|---|---|---|---|
| 1 | `number = 7` | `7 % 2 == 0` | False | `else` executes |

This method helps you avoid mistakes while finding the output.

---

# 🎯 VVI Short Questions

### Q1.
What is a conditional statement?

### Q2.
What is a simple `if` statement?

### Q3.
Write the syntax of a simple `if` statement.

### Q4.
What is the purpose of `else`?

### Q5.
What is an `if-else` statement?

### Q6.
What is the purpose of `elif`?

### Q7.
When is an `if-elif-else` statement used?

### Q8.
What is indentation in Python?

### Q9.
Why is a colon `:` required after a condition?

### Q10.
What is the difference between `=` and `==`?

---

# 🔥 VVI Long Questions

### Q1.
Explain the simple `if` statement with syntax and example.

### Q2.
Explain the `if-else` statement with syntax and example.

### Q3.
Explain the `if-elif-else` statement with syntax and example.

### Q4.
Differentiate between simple `if`, `if-else`, and `if-elif-else`.

### Q5.
Write a Python program using conditional statements and explain its working.

### Q6.
Perform a dry run of a given Python program containing conditional statements and determine its output.

---

# 🧪 Important Programs for Practice

Practice these programs:

1. Check whether a number is positive.
2. Check whether a number is even or odd.
3. Check whether a number is greater than 100.
4. Check whether a number is divisible by 5.
5. Display grade according to marks.
6. Display Pass or Fail.
7. Find the largest of two numbers using `if-else`.
8. Find the largest of three numbers using `if-elif-else`.

---

# ⚠️ Common Mistakes

### 1. Forgetting the colon

Incorrect:

`if number > 0`

Correct:

`if number > 0:`

### 2. Incorrect indentation

Statements inside the conditional block must be indented.

### 3. Confusing `=` and `==`

Remember:

`=` → Assigns a value.

`==` → Compares two values.

### 4. Checking every `elif` after a True condition

In an `if-elif-else` chain, once a condition becomes `True`, its block executes and the remaining chain is skipped.

---

# 🚀 One-Minute Revision

**`if`** → Executes when the condition is True.

**`if-else`** → Provides two possible paths.

**`if-elif-else`** → Checks multiple conditions.

**`:`** → Required after the condition.

**Indentation** → Defines the conditional block.

**`==`** → Compares values.

**Dry Run** → Manually traces the program and finds the output on paper.

---

# 🎯 Exam Tip

For programming questions in the theory examination:

**Understand the logic → Write the code → Check indentation → Perform the dry run → Write the output.**

Remember: the examination is performed on paper, so practice tracing conditional programs **without depending on a mobile, laptop, or Python interpreter**.