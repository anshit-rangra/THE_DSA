/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {



        let i = 0;
        let j = nums.length -1;
        let k = 0;


        while(k<=j){

            if(nums[k] === 0){
                let temp = nums[k]
                nums[k] = nums[i]
                nums[i] = temp
                i++
                k++
            } else if(nums[k] === 2){
                let temp = nums[k]
                nums[k] = nums[j]
                nums[j] = temp
                j--
            } else {
                k++
            }

        }
        

    return nums
    
};