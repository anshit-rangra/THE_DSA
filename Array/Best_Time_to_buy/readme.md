in the bruteforce approach just nested loop check every difference and set it to max

but in the best approach the time complexity should be O(n)

how it works 

just a loop start from second element to last element of the array

use two variables one is MAX and second is MinVal

initilize MAX = 0 and MinVal = arr[0] first element of array;

now just a conditional statement first your aim is to find smallest if find MinVal should change and if not found then 
change MAX to max amoung MAX or arr[i] - MinVal

and you got the answer