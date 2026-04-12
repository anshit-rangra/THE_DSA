/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {

    let ans = [];

    let map = new Map()

    for(let i = 0; i<nums2.length; i++){
        map.set(nums2[i], i)
    }

    for(let i = 0; i<nums1.length; i++){

        let index = map.get(nums1[i]) + 1;

        let notFound = true;

        for(let j = index; j<nums2.length; j++){

            if(nums1[i] < nums2[j]){
                ans.push(nums2[j])
                notFound = false;
                break;
            }
        }

        if(notFound){
            ans.push(-1)
        }

    }

    return ans;
    
};