var myPow = function(x, n) {

    if(n == 0 || x == 1) return 1;
    let res = x;
    for(let i = 1; i<Math.abs(n); i++){
        res *= x
    }
    return n<0? 1/res : res;
};

// In this code the time complexity is O(n)