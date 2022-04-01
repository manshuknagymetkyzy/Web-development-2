import math
x = int(input())
cnt = 0
y = int(math.sqrt(x))
for i in range(1, y):
    if x % i == 0:
        cnt += 2
if x % y == 0:
    cnt += 1

print(cnt)