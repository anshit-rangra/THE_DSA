

function sort(arr) {

    let max = arr[0]

    for(let i = 1; i<arr.length; i++){
        if(max < arr[i]){
            max = arr[i]
        }
    }

    const countArr = new Array(max+1).fill(0)


    for(let i = 0; i<arr.length; i++){

        countArr[arr[i]]++

    }

    let res = []

    for(let i = 0; i<countArr.length; i++){

        while(countArr[i] > 0){
            res.push(i)
            countArr[i]--
        }
    }

    return res

}

const ans = sort([5,9,3,5,1,7,2])

console.log(ans)