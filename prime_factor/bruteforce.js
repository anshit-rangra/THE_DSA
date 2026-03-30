
function primeFactor(n) {

    let arr = []

    let i = 2;

    while(i*i <= n){ // optimised condition( i * i <= n) || i <= n/2

        while(n % i === 0){
            arr.push(i)
            n = Math.floor(n/i)
        }

        i++
    }

    if(n>1){
        arr.push(i)
    }

    return arr;

}

console.log(primeFactor(10))
