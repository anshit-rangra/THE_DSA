# Single Number (LeetCode 136)

Find the element that appears exactly once in an array where every other element appears twice.

## Idea
- Use bitwise XOR: a ^ a = 0, a ^ 0 = a, and XOR is commutative/associative, so duplicates cancel out.
- XOR all numbers; the leftover value is the unique element.

## Walkthrough
Example nums = [4, 1, 2, 1, 2]

- 0 ^ 4 = 4
- 4 ^ 1 = 5
- 5 ^ 2 = 7
- 7 ^ 1 = 6
- 6 ^ 2 = 4  (unique number)

## Complexity
- Time: O(n)
- Space: O(1)


---

## 🧙‍♂️ Story (Hinglish)

Ek jadui nagar tha **Array Nagar**, jahan har insaan ka ek twin hota tha.  
Lekin ek din pata chala ki ek aisa insaan bhi hai jiska koi twin nahi hai.

Raja pareshaan ho gaya aur usne turant **Wizard Anshit** ko bulaya:  
_"Humein uss unique insaan ko dhoondhna hai!"_

Wizard Anshit ke paas ek powerful spell thi — **XOR Spell** 🔮

Is spell ki special power thi:
👉 Jo bhi do same log hote, woh ek dusre ko eliminate kar dete.

Wizard ne sabhi logon ko ek-ek karke **XOR Room** mein bhejna shuru kiya:

- Twin aaye → eliminate ho gaye ❌  
- Phir twin aaye → eliminate ho gaye ❌  

Aakhir mein sirf ek hi insaan bach gaya...

✨ **Wahi tha — jo unique tha!**

---
