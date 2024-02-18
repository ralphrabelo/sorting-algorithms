import sys
 
# Define a function to find the maximum subarray sum
 
 
def max_sub_array_sum(arr):
    # Base case: when there is only one element in the array
    if len(arr) == 1:
        return arr[0]
 
    # Recursive case: divide the problem into smaller sub-problems
    m = len(arr) // 2
 
    # Find the maximum subarray sum in the left half
    left_max = max_sub_array_sum(arr[:m])
 
    # Find the maximum subarray sum in the right half
    right_max = max_sub_array_sum(arr[m:])
 
    # Find the maximum subarray sum that crosses the middle element
    left_sum = -sys.maxsize - 1
    right_sum = -sys.maxsize - 1
    sum = 0
 
    # Traverse the array from the middle to the right
    for i in range(m, len(arr)):
        sum += arr[i]
        right_sum = max(right_sum, sum)
 
    sum = 0
 
    # Traverse the array from the middle to the left
    for i in range(m - 1, -1, -1):
        sum += arr[i]
        left_sum = max(left_sum, sum)
 
    cross_max = left_sum + right_sum
 
    # Return the maximum of the three subarray sums
    return max(cross_max, max(left_max, right_max))
 
 
# Example usage
arr = [-2, -3, 4, -1, -2, 1, 5, -3]
max_sum = max_sub_array_sum(arr)
print("Maximum contiguous sum is", max_sum)