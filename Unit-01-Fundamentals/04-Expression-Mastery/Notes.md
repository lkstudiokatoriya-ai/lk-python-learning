# 🧠 Expression Mastery

> **Unit 01 • Fundamentals of Python Programming Syntax**

---

## 📝 1. Expressions

### Definition

An **expression** is a combination of values, variables, operators, and function calls that Python evaluates to produce a result.

### Example

`a = 10`  
`b = 5`  
`result = a + b * 2`

**Result:** `20`

### Types of Expressions

- Arithmetic Expression → `a + b`
- Relational Expression → `a > b`
- Logical Expression → `a > 5 and b < 10`

### Key Point

An expression is evaluated by Python to produce a value.

---

## 🔄 2. Type Conversion

### Definition

**Type conversion** is the process of converting a value from one data type to another.

### Common Conversion Functions

`int()` → Converts a value to integer  
`float()` → Converts a value to float  
`str()` → Converts a value to string  
`bool()` → Converts a value to Boolean

### Example

`x = "25"`  
`y = int(x)`

**Result:** `25`

Another example:

`x = 10`  
`y = float(x)`

**Result:** `10.0`

### Key Point

Type conversion is useful when a value needs to be used in a different data type.

---

## 🎯 3. Operator Precedence

### Definition

**Operator precedence** determines the order in which different operators are evaluated in an expression.

### Example

`result = 10 + 5 * 2`

Multiplication is performed before addition.

**Result:** `20`

### Using Parentheses

Parentheses can be used to control the order of evaluation.

`result = (10 + 5) * 2`

**Result:** `30`

### Basic Order

1. Parentheses `()`
2. Exponentiation `**`
3. Multiplication, Division, Floor Division and Modulus `* / // %`
4. Addition and Subtraction `+ -`
5. Relational operators
6. Logical operators

### Key Point

Python evaluates an expression according to operator precedence.

---

## 🧮 4. Expression Evaluation

### Definition

**Expression evaluation** means calculating an expression according to the rules of operators and precedence to obtain its final value.

### Example

`result = 20 + 10 * 5 - 5`

First:

`10 * 5 = 50`

Then:

`20 + 50 - 5 = 65`

**Final Result:** `65`

### Example with Parentheses

`result = (20 + 10) * 5`

First:

`20 + 10 = 30`

Then:

`30 * 5 = 150`

**Final Result:** `150`

---

## ⚡ Quick Revision

| Topic | Main Concept |
|---|---|
| Expression | Produces a value |
| Type Conversion | Changes data type |
| `int()` | Convert to integer |
| `float()` | Convert to float |
| `str()` | Convert to string |
| `bool()` | Convert to Boolean |
| Operator Precedence | Determines evaluation order |
| Parentheses `()` | Controls evaluation order |
| Expression Evaluation | Calculates the final result |

---

## 🎯 Practice

1. Create an arithmetic expression using three numbers.
2. Create a relational expression.
3. Create a logical expression.
4. Convert a string into an integer.
5. Convert an integer into a float.
6. Write an expression using parentheses.
7. Evaluate an expression containing multiple operators.
8. Compare the result of expressions with and without parentheses.

---

> 🐍 **Expression Mastery**
>
> **Write → Evaluate → Understand → Practice**
