# 15_quadratic_equation.py
# Program to Solve Quadratic Equation

import cmath

a = float(input("Enter a: "))
b = float(input("Enter b: "))
c = float(input("Enter c: "))

d = b**2 - 4*a*c

root1 = (-b + cmath.sqrt(d)) / (2*a)
root2 = (-b - cmath.sqrt(d)) / (2*a)

print("Root 1 =", root1)
print("Root 2 =", root2)