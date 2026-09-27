# set_operations.py

set1 = {10, 20, 30, 40}
set2 = {30, 40, 50, 60}

# Join
result = set1 | set2
print(result)

# Union
result = set1.union(set2)
print(result)

# Intersection
result = set1 & set2
print(result)

# Difference
result = set1 - set2
print(result)