/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    // modified after reviewing discussions/solution
    if (x < 0) return false;
    let reverse = 0;
    for (let i = x; i >= 1; i = Math.floor(i/10)) {
          reverse = reverse*10 + i%10;
    }
    return reverse === x;
};

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