x = int(input())
y = 0

while x > 0:
    z = x % 10
    x = x // 10
    y = y * 10
    y = y + z

print(y)