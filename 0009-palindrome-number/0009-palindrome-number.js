/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
    
//     // modified after reviewing discussions/solution
//     if (x < 0) return false;
//     let reverse = 0;
//     for (let i = x; i >= 1; i = Math.floor(i/10)) {
//           reverse = reverse*10 + i%10;
//     }
//     return reverse === x;
// };

// recursive solution
var isPalindrome = function(x) {
    if (x<0) return false;
    let numStr = x.toString();
    if (numStr.length < 2) return true;
    if (numStr[0] !== numStr[numStr.length-1]) return false;
    else {
        numStr = numStr.slice(1, numStr.length-1);
        console.log(numStr);
        return isPalindrome(numStr);
    }
}

// Or two-pointer version for strings (not integers) which maintains O(n) time complexity but reduces to O(1) space complexity:
// function isPalindrome(x) {
//     left = 0;
//     right = x.length-1;
//     while (left < right) {
//         if (x[left] !== x[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }

// original answer:
// var isPalindrome = function(x) {
//     let str = x.toString()
//     let reverse = "";
//     for (let i=str.length-1; i>=0; i--) {
//         reverse = reverse + str[i];
//     }
//     console.log(reverse, str)
//     return reverse === str;
// };