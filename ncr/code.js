

function nCr(n, r) {

    if(n<r) return 0;

    let result = 1;

    r = Math.min(r, n-r)

    for(let i = 0; i<r; i++){
        result = result * ((n-i) / (i+1))
    }

    return result

}

const ans = nCr(5,2)

console.log(ans)