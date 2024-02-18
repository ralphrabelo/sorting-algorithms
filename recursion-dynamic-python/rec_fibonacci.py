def rec_fibonacci(n):
    if n <= 1:
        return n
    
    return rec_fibonacci(n-1) + rec_fibonacci(n-2)

if __name__ == "__main__":
    print(rec_fibonacci(10))