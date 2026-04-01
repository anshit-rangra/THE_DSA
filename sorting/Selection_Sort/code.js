

function sort(arr){


    for(let i = 0; i<arr.length; i++){

        let min = i;

        for(let j = i+1; j<arr.length; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }

        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }

    return arr;

}

const ans = sort([5,2,4,1,7,9,8])

console.log(ans)