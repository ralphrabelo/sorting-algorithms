

def dy_fibonacci(n):
    
    f = [0,1] #taking the first two fibonacci numbersas 0 and 1

    for i in range(2,n+1):
        f.append(f[i-1]+f[i-2])
    return f[n]

print(dy_fibonacci(10))