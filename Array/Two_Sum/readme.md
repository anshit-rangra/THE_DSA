# Two Sum

## Problem Statement
Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to `target`.

- Each input will have exactly one solution.
- You may not use the same element twice.
- You can return the answer in any order.

**Example:**
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: nums[0] + nums[1] = 2 + 7 = 9
```

---

## Brute Force Approach

- Check every possible pair of numbers in the array.
- Time Complexity: $O(n^2)$
- Space Complexity: $O(1)$

**Code:**
```js
var twoSum = function(nums, target) {
    let arr = [];
    for(let i = 0; i<nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            if(nums[i] + nums[j] === target){
                arr.push(i)
                arr.push(j)
                return arr;
            }
        }
    }
    return arr;
};
console.log(twoSum([3,6,2,4,7], 6))
```

---

## Optimized Approach (Using Hash Map)

- Use a hash map to store the value and its index while iterating.
- For each element, check if `target - nums[i]` exists in the map.
- If found, return the indices.
- Time Complexity: $O(n)$
- Space Complexity: $O(n)$

**Code:**
```js
function twoSum(nums, target) {
    let hashMap = new Map()
    for(let i = 0; i<nums.length; i++){
        let complement =  target - nums[i]
        if(hashMap.has(complement)){
            return [i, hashMap.get(complement)]
        }
        hashMap.set(nums[i], i)
    }
}
console.log(twoSum([2,7,11,15], 9))
```

---

## Summary
- Brute force checks all pairs, hash map approach finds the answer in one pass.
- Hash map approach is preferred for efficiency.
