

function maximum(arr){

    let count = 1;
    let max = arr[0]

    for(let i = 0; i<arr.length; i++){

        if(count === 0){
            max = arr[i]
            count++
        } else if( arr[i] === max ){
            count++
        } else {
            count--
        }

    }

    return max;

}

let arr = [2,3,4,2,2,2]

const ans = maximum(arr)

console.log(ans)