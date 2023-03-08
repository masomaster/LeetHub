/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString()
    let reverse = "";
    for (let i=str.length-1; i>=0; i--) {
        reverse = reverse + str[i];
    }
    console.log(reverse, str)
    return reverse === str;
};