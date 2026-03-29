
function factorial(n) {

    if(n == 1 || n == 0) return 1;

    let ans = n * factorial(n-1)

    return ans;

}

function nCr(n, r){

    const ncr = Math.floor(factorial(n) / ( factorial(r) * factorial(n-r) ))


    return ncr;

}

// const ans = factorial(5)

const ans = nCr(5, 2)


console.log(ans)