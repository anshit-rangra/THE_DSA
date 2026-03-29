
function primeFactor(n) {

    let arr = []

    let i = 2;

    while(i <= Math.floor(n/2)){ // optimised condition( i * i <= n) || i <= n/2

        while(n % i === 0){
            arr.push(i)
            n = Math.floor(n/i)
        }

        i++
    }

    return arr;

}

console.log(primeFactor(18))