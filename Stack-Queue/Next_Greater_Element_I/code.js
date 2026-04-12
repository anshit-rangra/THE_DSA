var nextGreaterElement = function(nums1, nums2) {

    let map = new Map();
    let stack = [];


    for(let i = 0; i < nums2.length; i++){

        while(stack.length > 0 && nums2[i] > stack[stack.length - 1]){
            let top = stack.pop();
            map.set(top, nums2[i]);
        }

        stack.push(nums2[i]);
    }


    while(stack.length > 0){
        map.set(stack.pop(), -1);
    }

    let ans = [];

    for(let num of nums1){
        ans.push(map.get(num));
    }

    return ans;
};