# Majority Element (LeetCode 169)

Find the element that appears more than ⌊n/2⌋ times in an array (the majority element).

## Approach: Moore's Voting Algorithm
- Maintains a candidate and a count.
- If count is 0, set candidate to current element and count to 1.
- If current element equals candidate, increment count.
- Otherwise, decrement count.
- At the end, candidate is the majority element (guaranteed by problem constraints).

## Example
nums = [2,2,1,1,1,2,2]

| Step | Candidate | Count |
|------|-----------|-------|
|  2   |     2     |   1   |
|  2   |     2     |   2   |
|  1   |     2     |   1   |
|  1   |     2     |   0   |
|  1   |     1     |   1   |
|  2   |     1     |   0   |
|  2   |     2     |   1   |

## Complexity
- Time: O(n)
- Space: O(1)

## Story
Democracy mein vo hi raaj krta hai jise majority log raj krne dete hai. Prr Array Nagar jo ki ek bda desh hai vha pe bhot saare votes aaye. Fir Anshit dev ne ek tarika nikala
usne vote ko count krne ke bajaye ye track kiya ki kon majority prr hai with the help of one counter.

usne kha ki sabse pehle wale vote ke insaan ko declare krr do ko vo winner hai aur counter ko 1 pe set krr do. av agle harr ek element ko check kro agr agla vote bhe maximum ko mila to count ko increase krr do 
aur agr counter 0 ho jaaye to current vote ko maximum bna diya jaaye aur counter ko bda do. aur koi bhe condition match ni ho to counter ko decrement krr do
