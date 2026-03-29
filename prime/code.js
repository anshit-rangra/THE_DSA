
function prime(n){

    // step 1 is create an array of length n+1 and fill it with true
    const isPrime = new Array(n+1).fill(true)

    isPrime[0] = false; // setting the 0 value as false
    isPrime[1] = false; // setting the value 1 as false

    for(let i = 2; i<=Math.floor(n); i++){ // ek loop jo 2 se start hoga aur n/2 tak jayega
        if(isPrime[i]){
            for(let j = i*i; j <= n; j+=i){ // ye loop unn saare elements ke liye jo i ke table mein aate hai , unn sabko false krne ke liye
                isPrime[j] = false
            }
        }
    }

    let primes = []
    for(let i = 0; i<isPrime.length; i++){
        if (isPrime[i]) primes.push(i);
    }
    return primes;
}

console.log(prime(9))