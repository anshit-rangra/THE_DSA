
// Merging without extra space

function merge(arr1, arr2){

   let arr = []

   let i = 0; 
   let j = 0

   while(arr1.length > i && arr2.length > j){

    if(arr1[i] < arr2[j]){
        arr.push(arr1[i])
        i++
    } else {
        arr.push(arr2[j])
        j++
    }
   }

   while(i< arr1.length){
        arr.push(arr1[i])
        i++
   }

   while(j< arr2.length){
        arr.push(arr2[j])
        j++
   }

    return arr;


}


let arr1 = [1,2,3,5,6,7]
let arr2 = [4,6,7,8,9]


const ans = merge(arr1, arr2)

console.log(ans)