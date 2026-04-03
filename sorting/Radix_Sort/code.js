

function countSort(arr) {

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

function radixSort(arr) {

    let max = Math.max(...arr)

    let exp = 1

    while (Math.floor(max / exp) > 0) {
        arr = countingSortForRadix(arr, exp)
        exp *= 10
    }

    return arr
}


// test
const arr = [170, 45, 75, 90, 802, 24, 2, 66]

console.log(radixSort(arr))