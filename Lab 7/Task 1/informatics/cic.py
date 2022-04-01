import math
a = int(input())
b = int(input())

for x in range(a, b + 1):
    if int(math.sqrt(x))*int(math.sqrt(x)) == x:
        print(x)