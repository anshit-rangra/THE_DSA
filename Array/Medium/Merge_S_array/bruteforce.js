
// Merging without extra space

function merge(arr1, arr2){

    while(arr2.length > 0){
        let elem = arr2.pop();
        arr1.push(elem)
    }


    for(let i = 0; i<arr1.length; i++){
        for(let j = 0; j<arr1.length-i; j++){

            if(arr1[j] > arr1[j+1]){
                    let temp = arr1[j]
                    arr1[j] = arr1[j+1]
                    arr1[j+1] = temp
            }

        }
    }

    return arr1;


}


let arr1 = [1,2,3,5,6,7]
let arr2 = [4,6,7,8,9]


const ans = merge(arr1, arr2)

console.log(ans)