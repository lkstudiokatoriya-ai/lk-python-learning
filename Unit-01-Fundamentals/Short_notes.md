# 📘 Python Programming — Unit 01 One-Shot Notes

> **Fundamentals of Python Programming Syntax**  
> 🎯 **VVI Short Notes | Quick Revision**

---

## 1. 🐍 Python Character Set

Python में उपयोग होने वाले characters का समूह **Python Character Set** कहलाता है।

मुख्य characters:
- Alphabets: `A-Z`, `a-z`
- Digits: `0-9`
- Special symbols: `+ - * / % = < >`
- Whitespace characters

---

## 2. 🔹 Tokens

Program की सबसे छोटी meaningful units को **Tokens** कहते हैं।

मुख्य प्रकार:
- Keywords
- Identifiers
- Literals
- Operators
- Punctuators

---

## 3. 🏷️ Variables

Variable एक नाम है जिसका उपयोग किसी value को store करने के लिए किया जाता है।

Example: `x = 10`

यहाँ `x` variable है और `10` उसका value है।

---

## 4. 📌 L-Value और R-Value

**L-Value:** Assignment operator के left side में आने वाला value/location.

Example: `x = 10` → `x` L-value है।

**R-Value:** Assignment के right side में आने वाला value.

Example: `x = 10` → `10` R-value है।

---

## 5. 💬 Comments

Comments program में explanation लिखने के लिए होते हैं। Python इन्हें execute नहीं करता।

Single-line comment:

`# This is a comment`

---

# 6. 🧩 Python Data Types

Data type बताता है कि variable में किस प्रकार का data stored है।

| Data Type | Example |
|---|---|
| `int` | `10` |
| `float` | `10.5` |
| `complex` | `2+3j` |
| `bool` | `True` |
| `str` | `"Python"` |
| `list` | `[1, 2, 3]` |
| `tuple` | `(1, 2, 3)` |
| `None` | `None` |
| `dict` | `{"a": 10}` |

---

## 7. 🔄 Mutable और Immutable

**Mutable:** जिन objects की value को बाद में बदला जा सकता है।

Example: `list`, `dictionary`

**Immutable:** जिन objects की value बनने के बाद बदली नहीं जा सकती।

Example: `int`, `float`, `complex`, `bool`, `string`, `tuple`

---

# 8. ➕ Arithmetic Operators

Mathematical calculations के लिए arithmetic operators उपयोग होते हैं।

`+` Addition  
`-` Subtraction  
`*` Multiplication  
`/` Division  
`%` Modulus  
`//` Floor Division  
`**` Exponentiation

Example: `a + b`

---

# 9. ⚖️ Relational Operators

दो values की comparison करने के लिए relational operators उपयोग होते हैं।

`==` Equal  
`!=` Not Equal  
`>` Greater than  
`<` Less than  
`>=` Greater than or equal to  
`<=` Less than or equal to

इनका result सामान्यतः `True` या `False` होता है।

---

# 10. 🧠 Logical Operators

Conditions को combine करने के लिए logical operators उपयोग होते हैं।

- `and`
- `or`
- `not`

Example: `a > 5 and b < 10`

---

# 11. ✏️ Assignment Operators

Variable को value assign करने के लिए assignment operators उपयोग होते हैं।

`=` → Assignment

Augmented assignment operators:

`+=`, `-=`, `*=`, `/=`, `%=`, `//=`, `**=`

Example: `x += 5`

---

# 12. 🔢 Expressions

Operators और operands से मिलकर बनी meaningful combination को **Expression** कहते हैं।

Example: `a + b * 2`

Expression का एक value होता है।

---

# 13. 📝 Statements

Python program में instruction की एक complete line या unit को **Statement** कहा जाता है।

Example: `x = 10`

---

# 14. 🔄 Type Conversion

एक data type की value को दूसरे data type में बदलना **Type Conversion** कहलाता है।

मुख्य functions:

- `int()`
- `float()`
- `complex()`
- `str()`
- `bool()`

Example: `int("25")`

---

# 15. ⌨️ Input और Output

### `input()`

User से input लेने के लिए `input()` function उपयोग होता है।

Example: `name = input("Enter name: ")`

### `print()`

Output display करने के लिए `print()` function उपयोग होता है।

Example: `print(name)`

---

# 16. 🥇 Operator Precedence

एक expression में operators को किस क्रम में evaluate किया जाएगा, इसे **Operator Precedence** कहते हैं।

सामान्य क्रम:

1. Parentheses `()`
2. Exponentiation `**`
3. Multiplication, Division, Floor Division, Modulus
4. Addition, Subtraction
5. Relational operators
6. Logical operators
7. Assignment operators

---

# 17. 🧮 Expression Evaluation

Expression में operators की precedence और associativity के अनुसार calculation की जाती है।

Example:

`2 + 3 * 4`

पहले multiplication होगा:

`2 + 12 = 14`

इसलिए result **14** होगा।

---

# 18. 🔺 Area of Triangle

जब तीन sides `a`, `b`, `c` दी गई हों:

` s = (a + b + c) / 2 `

Heron's Formula:

`Area = √(s(s-a)(s-b)(s-c))`

---

# 19. 🔄 Swap Two Variables

दो variables की values को आपस में बदलना **Swapping** कहलाता है।

Example:

`a = 10`  
`b = 20`

Swap के बाद:

`a = 20`  
`b = 10`

Python में:

`a, b = b, a`

---

# 20. 📐 Quadratic Equation

Quadratic equation का सामान्य रूप:

`ax² + bx + c = 0`

Roots निकालने का formula:

`x = (-b ± √(b² - 4ac)) / 2a`

जहाँ:

`D = b² - 4ac`

**Discriminant:**
- `D > 0` → Two real roots
- `D = 0` → Equal real roots
- `D < 0` → Real roots नहीं मिलते

---

# 🔥 VVI Quick Revision

**Python Character Set** → Python में उपयोग होने वाले characters.

**Token** → Program की smallest meaningful unit.

**Variable** → Value store करने के लिए नाम.

**L-Value** → Assignment के left side का value/location.

**R-Value** → Assignment के right side का value.

**Data Type** → Data का प्रकार बताता है.

**Mutable** → Value बदली जा सकती है.

**Immutable** → Value बदली नहीं जा सकती.

**Expression** → Operators और operands की meaningful combination.

**Statement** → Python instruction.

**Type Conversion** → एक data type को दूसरे में बदलना.

**Operator Precedence** → Operators के evaluation का order.

**`input()`** → User से input लेने के लिए.

**`print()`** → Output display करने के लिए.

**Heron's Formula** → Three sides से triangle का area निकालने के लिए.

**Quadratic Equation** → `ax² + bx + c = 0`

**Discriminant** → `b² - 4ac`

---

# 🎯 Exam Focus

⭐ Python Tokens  
⭐ Variables, L-Value & R-Value  
⭐ Data Types  
⭐ Mutable & Immutable  
⭐ Operators  
⭐ Expressions & Statements  
⭐ Type Conversion  
⭐ Input & Output  
⭐ Operator Precedence  
⭐ Heron's Formula  
⭐ Swapping Variables  
⭐ Quadratic Equation & Discriminant