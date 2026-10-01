# Unit 2 — Conditional and Iterative Statements
## Objective Questions — 20 MCQs

### 1. Which keyword is used to execute a block only when a condition is True?

A. for  
B. if  
C. while  
D. break

---

### 2. What is the output?

    x = 8

    if x > 10:
        print("A")
    else:
        print("B")

A. A  
B. B  
C. 8  
D. No output

---

### 3. Which structure is appropriate when more than two conditions need to be checked one after another?

A. Simple if  
B. if-else  
C. if-elif-else  
D. while

---

### 4. What is the output?

    marks = 65

    if marks >= 80:
        print("A")
    elif marks >= 60:
        print("B")
    else:
        print("C")

A. A  
B. B  
C. C  
D. A and B

---

### 5. What happens if all conditions in an if-elif-else structure are False and an else block is present?

A. The first block executes  
B. The last elif executes  
C. The else block executes  
D. The program automatically stops

---

### 6. Which loop keeps executing as long as its condition remains True?

A. for  
B. while  
C. if  
D. elif

---

### 7. What is the output?

    i = 1

    while i <= 4:
        print(i)
        i += 1

A. 0 1 2 3  
B. 1 2 3 4  
C. 1 2 3 4 5  
D. Infinite loop

---

### 8. What is the main problem if the control variable of a while loop is never updated and its condition remains True?

A. The loop may become infinite  
B. The loop executes only once  
C. The loop becomes a for loop  
D. The program automatically uses break

---

### 9. What is the output?

    for i in range(2, 7):
        print(i)

A. 2 3 4 5 6  
B. 2 3 4 5 6 7  
C. 1 2 3 4 5 6  
D. 3 4 5 6 7

---

### 10. Which value is NOT included in `range(1, 6)`?

A. 1  
B. 3  
C. 5  
D. 6

---

### 11. What is the output?

    for i in range(1, 8, 2):
        print(i)

A. 1 2 3 4 5 6 7  
B. 1 3 5 7  
C. 2 4 6 8  
D. 1 3 5

---

### 12. What is the output?

    for i in range(5, 0, -1):
        print(i)

A. 0 1 2 3 4  
B. 5 4 3 2 1  
C. 5 4 3 2 1 0  
D. 1 2 3 4 5

---

### 13. Which statement immediately terminates the current loop?

A. continue  
B. break  
C. range  
D. elif

---

### 14. What is the output?

    for i in range(1, 6):
        if i == 4:
            break
        print(i)

A. 1 2 3  
B. 1 2 3 4  
C. 4 5  
D. 1 2 3 4 5

---

### 15. Which statement skips the current iteration but allows the loop to continue?

A. break  
B. continue  
C. stop  
D. exit

---

### 16. What is the output?

    for i in range(1, 6):
        if i == 3:
            continue
        print(i)

A. 1 2 3 4 5  
B. 1 2 4 5  
C. 1 2  
D. 3 4 5

---

### 17. What is a nested loop?

A. A loop without a condition  
B. A loop inside another loop  
C. Two loops written separately  
D. A loop containing only an if statement

---

### 18. How many times will `*` be printed?

    for i in range(2):
        for j in range(3):
            print("*")

A. 2  
B. 3  
C. 5  
D. 6

---

### 19. Which statement correctly describes `break` and `continue`?

A. Both terminate the loop  
B. break skips one iteration, continue terminates the loop  
C. break terminates the loop, continue skips the current iteration  
D. Both skip the current iteration

---

### 20. What is the output?

    for i in range(1, 5):
        if i == 2:
            continue
        if i == 4:
            break
        print(i)

A. 1 2 3 4  
B. 1 3  
C. 1 3 4  
D. 2 3

---

# Answer Key

| Question | Answer |
|---|---|
| 1 | B |
| 2 | B |
| 3 | C |
| 4 | B |
| 5 | C |
| 6 | B |
| 7 | B |
| 8 | A |
| 9 | A |
| 10 | D |
| 11 | B |
| 12 | B |
| 13 | B |
| 14 | A |
| 15 | B |
| 16 | B |
| 17 | B |
| 18 | D |
| 19 | C |
| 20 | B |

## Unit 2 Coverage

- [x] Simple if statement
- [x] if-else statement
- [x] if-elif-else statement
- [x] while loop
- [x] for loop
- [x] range() function
- [x] break statement
- [x] continue statement
- [x] nested loops

**Total: 20 MCQs**