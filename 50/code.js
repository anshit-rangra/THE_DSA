var myPow = function(x, n) {

    let result = 1;
    let power = Math.abs(n)

    while(power > 0) {

        if(power % 2 == 1){
            result *= x
        }
        x *= x

        power = Math.floor(power/2)
    }

    return n<0? 1/result : result;
};


// The time complexity of this code is O(log n)