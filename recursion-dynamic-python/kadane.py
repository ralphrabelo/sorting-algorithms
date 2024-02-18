import sys

def max_sub_array_sum(arr, size):
    max_so_far = -sys.maxsize - 1
    max_ending_here = 0
    for i in range(0, size):
        max_ending_here = max_ending_here + arr[i]
        if max_so_far < max_ending_here:
            max_so_far = max_ending_here
        if max_ending_here < 0:
            max_ending_here = 0
    return max_so_far

a= [1, -2, 3, 10, -4, 7, 2, -5]
print(max_sub_array_sum(a, len(a)))

a= [1, -2, 3, 10, -4, 7, 10, 10]
print(max_sub_array_sum(a, 2))