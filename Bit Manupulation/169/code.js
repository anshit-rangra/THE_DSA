

var majorityElement = function(nums) {

    let max = nums[0]
    let count = 1;

    for(let i = 1; i<nums.length; i++){
        if(count === 0){
            max = nums[i]
            count++
        } else if(max === nums[i]) count++;
        else count--;
    }

    return max;
    
};