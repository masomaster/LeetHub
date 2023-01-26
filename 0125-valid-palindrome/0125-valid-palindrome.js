/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    console.log(s)
    let s2 = '';
    let s3 = '';
    for (let i = 0; i < s.length; i++) {
        if ( /^[a-zA-Z0-9]/.test(s[i]) ) {
          s3 += s[i];
          s2 = s[i] + s2;
        }
    }
    console.log(s2)
    console.log(s3)
    if (s3 === s2) return true;
    else return false;
};