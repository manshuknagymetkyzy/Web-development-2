def same_first_last(nums):
  if len(nums) < 1:
    return False
  return nums[0] == nums[len(nums)-1]