def no_teen_sum(a, b, c):
  def fix_teen(x):
    if (x == 15) or (x == 16):
      return x
    elif x in range(13, 20):
      return 0
    else:
      return x
      
  sum = fix_teen(a) + fix_teen(b) + fix_teen(c)
  return sum