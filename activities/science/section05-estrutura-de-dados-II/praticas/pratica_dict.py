# encontre o numero mais frequente

def nums_count(nums):
  frequencies = {}
  most_frequent = nums[0]

  for num in nums:
    if num not in frequencies:
      frequencies[num] = 1
    else:
      frequencies[num] += 1

    if frequencies[num] > frequencies[most_frequent]:
        most_frequent = frequencies[num]

  return frequencies, most_frequent
