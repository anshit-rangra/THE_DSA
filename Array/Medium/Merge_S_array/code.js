
// Merging without extra space

function merge(arr1, arr2){

    let i = 0;
    let j = 0;

    while(i<arr1.length){
        if(arr1[i] > arr2[j]){
            let temp = arr1[i]
            arr1[i] = arr2[j]
            arr2[j] = temp
        }
        i++

        while(arr2[j] > arr2[j+1]){
            let temp = arr2[j]
            arr2[j] = arr2[j+1]
            arr2[j+1] = temp
        }

    }

    for(let i = 0; i<arr2.length; i++){
        arr1.push(arr2[i])
    }

    return arr1;
    

}


let arr1 = [1,2,3,5,6,7]
let arr2 = [4,6,7,8,9]


const ans = merge(arr1, arr2)

console.log(ans)