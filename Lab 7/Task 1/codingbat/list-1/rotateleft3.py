def rotate_left3(nums):
  a = nums[0]
  nums[0] = nums[1]
  nums[1] = nums[2]
  nums[2] = a
  return nums
