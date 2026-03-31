
function isPrime(n) {

    let prime = true;

    for(let i = 2; i<Math.floor(n/2); i++){
        if(n%i === 0) {
            prime = false;
            break;
        };
    }

    return prime? "Is Prime" : "Is not Prime"

}

console.log(isPrime(15))