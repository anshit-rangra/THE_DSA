

function sort(arr) {

    let min = Infinity;
    let max = -Infinity;

    for(let i = 0; i<arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }

        if(max < arr[i]){
            max = arr[i]
        }
    }

    

    return [min, max]

}

const ans = sort([8,3,2,9,5,7,1,4])

console.log(ans)