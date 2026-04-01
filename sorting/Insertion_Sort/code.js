

function sort(arr){

    for(let i = 1; i<arr.length; i++){
        let j = i-1;

        let key = arr[i]

        while(j>= 0 && key < arr[j]){

                arr[j+1] = arr[j]
                j--
            
        }
        arr[j+1] = key;
    }

    return arr;
}

const ans = sort([7,4,8,2,1,9,5])

console.log(ans)