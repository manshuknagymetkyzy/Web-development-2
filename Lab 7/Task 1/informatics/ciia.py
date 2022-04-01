import math
n = int(input())
for i in range(1, n + 1):
    x = int(math.sqrt(i))
    if x * x == i:
        print(i)