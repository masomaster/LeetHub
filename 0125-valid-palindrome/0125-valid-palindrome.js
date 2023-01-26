/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    console.log(s)
    for (let i=0, j=s.length-1; i <= j; i++, j--) {
      if (s[i] !== s[j]) return false;
    }
    return true;
};