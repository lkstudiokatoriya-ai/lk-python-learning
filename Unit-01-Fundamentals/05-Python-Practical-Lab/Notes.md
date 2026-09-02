# 🧪 Python Practical Lab

> **Unit 01 • Fundamentals of Python Programming Syntax**  
> **Practical Programming • CO-1**

---

## 📚 Introduction

The **Python Practical Lab** contains the important programming exercises of Unit 01.

These practicals help in applying basic Python concepts such as variables, input/output, arithmetic operations, expressions, mathematical formulas, and basic problem solving.

According to the SBTE Bihar Diploma in Electrical Engineering Semester III curriculum, the Unit 01 practical includes:

1. Calculate the Area of a Triangle using three given sides.
2. Swap Two Variables.
3. Solve a Quadratic Equation for real numbers.

---

# 🔺 1. Calculate the Area of a Triangle

## 📖 Definition

The **area of a triangle** can be calculated when its three sides `a`, `b`, and `c` are known.

For three given sides, first calculate the **semi-perimeter** using:

**s = (a + b + c) / 2**

Then calculate the area using **Heron's Formula**:

**Area = √[s(s-a)(s-b)(s-c)]**

The SBTE practical specifically requires this program to be written without using a separate function.

## 📌 Formula

**Semi-Perimeter:**

`s = (a + b + c) / 2`

**Area:**

`Area = √[s(s-a)(s-b)(s-c)]`

## 💻 Program

The following program takes the three sides as input and calculates the area:

`import math`  
`a = float(input("Enter side a: "))`  
`b = float(input("Enter side b: "))`  
`c = float(input("Enter side c: "))`  
`s = (a + b + c) / 2`  
`area = math.sqrt(s * (s - a) * (s - b) * (s - c))`  
`print("Semi-Perimeter =", s)`  
`print("Area of Triangle =", area)`

## 🖥️ Example

For `a = 3`, `b = 4`, and `c = 5`:

**Semi-Perimeter:** `6.0`

**Area of Triangle:** `6.0`

## ⭐ Key Points

- Three sides of the triangle are required.
- `s` represents the semi-perimeter.
- Heron's Formula is used to calculate the area.
- `math.sqrt()` is used for the square root.
- The program is written without defining a separate function.

---

# 🔄 2. Swap Two Variables

## 📖 Definition

**Swapping two variables** means exchanging the values stored in two variables.

For example, if `a = 10` and `b = 20`, after swapping:

**a = 20**

**b = 10**

Python allows two variables to be swapped directly using multiple assignment.

## 💻 Program

`a = int(input("Enter first number: "))`  
`b = int(input("Enter second number: "))`

`print("Before swapping:")`  
`print("a =", a)`  
`print("b =", b)`

`a, b = b, a`

`print("After swapping:")`  
`print("a =", a)`  
`print("b =", b)`

## 🖥️ Example

Input:

**First number:** `10`

**Second number:** `20`

Before swapping:

**a = 10**

**b = 20**

After swapping:

**a = 20**

**b = 10**

## ⭐ Key Points

- Swapping means exchanging two values.
- Python supports multiple assignment.
- `a, b = b, a` swaps the values directly.
- A temporary variable is not required.

---

# 🧮 3. Solve a Quadratic Equation

## 📖 Definition

A **quadratic equation** is generally written in the form:

**ax² + bx + c = 0**

where:

- `a` is the coefficient of `x²`.
- `b` is the coefficient of `x`.
- `c` is the constant.
- `a` must not be zero.

The roots of a quadratic equation can be calculated using the quadratic formula.

## 📌 Quadratic Formula

**x = (-b ± √(b² - 4ac)) / 2a**

## 🔹 Discriminant

The expression:

**D = b² - 4ac**

is called the **discriminant**.

The value of the discriminant helps determine the nature of the real roots:

- **D > 0** → Two different real roots.
- **D = 0** → Two equal real roots.
- **D < 0** → No real roots.

## 💻 Program

`import math`

`a = float(input("Enter a: "))`  
`b = float(input("Enter b: "))`  
`c = float(input("Enter c: "))`

`d = b**2 - 4*a*c`

`if d > 0:`  
`    root1 = (-b + math.sqrt(d)) / (2*a)`  
`    root2 = (-b - math.sqrt(d)) / (2*a)`  
`    print("Root 1 =", root1)`  
`    print("Root 2 =", root2)`

`elif d == 0:`  
`    root = -b / (2*a)`  
`    print("Both roots are equal.")`  
`    print("Root =", root)`

`else:`  
`    print("No real roots.")`

## 🖥️ Example

For:

`a = 1`

`b = -5`

`c = 6`

The equation becomes:

**x² - 5x + 6 = 0**

The real roots are:

**Root 1 = 3.0**

**Root 2 = 2.0**

## ⭐ Key Points

- A quadratic equation has the form `ax² + bx + c = 0`.
- The discriminant is `b² - 4ac`.
- `D > 0` gives two different real roots.
- `D = 0` gives two equal real roots.
- `D < 0` gives no real roots.
- `math.sqrt()` is used to calculate the square root.

---

# 🧰 Python Concepts Used

| Concept | Used In |
|---|---|
| `input()` | All three programs |
| `print()` | All three programs |
| Variables | All three programs |
| `int()` | Swap Two Variables |
| `float()` | Triangle & Quadratic Equation |
| Arithmetic Operators | All three programs |
| `**` Operator | Quadratic Equation |
| `math.sqrt()` | Triangle & Quadratic Equation |
| Multiple Assignment | Swap Two Variables |
| Expressions | All three programs |

---

# 🎯 Practical Checklist

Before completing Unit 01 practical work, make sure you can write:

- [ ] Area of a Triangle using three sides.
- [ ] Semi-perimeter calculation.
- [ ] Heron's Formula.
- [ ] Swap Two Variables.
- [ ] Quadratic Equation.
- [ ] Discriminant calculation.
- [ ] Real root calculation.
- [ ] Input and output statements.

---

# 🧠 Viva Revision

### Q1. What is the formula for the semi-perimeter?

**Answer:** `s = (a + b + c) / 2`

### Q2. What formula is used to find the area of a triangle from three sides?

**Answer:** Heron's Formula: `Area = √[s(s-a)(s-b)(s-c)]`

### Q3. What is swapping?

**Answer:** Swapping means exchanging the values of two variables.

### Q4. How can two variables be swapped in Python?

**Answer:** Using multiple assignment: `a, b = b, a`

### Q5. What is a quadratic equation?

**Answer:** A quadratic equation is an equation of the form `ax² + bx + c = 0`.

### Q6. What is the quadratic formula?

**Answer:** `x = (-b ± √(b² - 4ac)) / 2a`

### Q7. What is the discriminant?

**Answer:** `D = b² - 4ac`

### Q8. What happens when `D > 0`?

**Answer:** The equation has two different real roots.

### Q9. What happens when `D = 0`?

**Answer:** The equation has two equal real roots.

### Q10. What happens when `D < 0`?

**Answer:** The equation has no real roots.

### Q11. Which Python module provides `sqrt()`?

**Answer:** The `math` module.

---

# 📝 Final Summary

### 🔺 Area of Triangle

Three sides → Semi-perimeter → Heron's Formula → Area

### 🔄 Swap Two Variables

Two values → Multiple Assignment → Values exchanged

### 🧮 Quadratic Equation

`ax² + bx + c = 0` → Discriminant → Calculate real roots

---

> 🐍 **Python Practical Lab**
>
> **Learn → Understand → Write Code → Run → Check Output → Practice**
>
> 📂 `Unit-01-Fundamentals/05-Python-Practical-Lab/Notes.md`
