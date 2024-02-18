from shell_sort import shell_sort
from bubble_sort import bubble_sort
from merge_sort import merge_sort
from quick_sort import quick_sort
from selection_sort import selection_sort
from insertion_sort import insertion_sort
from random import randint
from datetime import datetime

def main():
    arr_size = 10000
    DIFF = "diff "
    arr_bubble =[]
   
    for i in range(arr_size):
        arr_bubble.append(randint(1, arr_size*2))

    arr_shell =  arr_bubble.copy()
    arr_selection = arr_bubble.copy()
    arr_insertion = arr_bubble.copy()
    arr_merge = arr_bubble.copy()
    arr_quick = arr_bubble.copy()
    arr_python = arr_bubble.copy()

    print("bubble")
    init_time = datetime.now().timestamp()
    selection_sort(arr_bubble)
    end_time = datetime.now().timestamp()
    print(DIFF, end_time - init_time)
    
    print("selection")
    init_time = datetime.now().timestamp()
    bubble_sort(arr_selection)
    end_time = datetime.now().timestamp()
    print(DIFF, end_time - init_time)

    print("insertion")
    init_time = datetime.now().timestamp()
    insertion_sort(arr_insertion)
    end_time = datetime.now().timestamp()
    print(DIFF, end_time - init_time)

    print("shell")
    init_time = datetime.now().timestamp()
    shell_sort(arr_shell,len(arr_shell))
    end_time = datetime.now().timestamp()
    print(DIFF, end_time - init_time)

    print("merge")
    init_time = datetime.now().timestamp()
    merge_sort(arr_merge)
    end_time = datetime.now().timestamp()
    print(DIFF, end_time - init_time)

    print("quick")
    init_time = datetime.now().timestamp()
    arr_quick = quick_sort(arr_quick)
    end_time = datetime.now().timestamp()
    print(DIFF, end_time - init_time)

    print("python sort")
    init_time = datetime.now().timestamp()
    arr_python.sort()
    end_time = datetime.now().timestamp()
    print(DIFF, end_time - init_time)

if __name__ == "__main__":
    main()