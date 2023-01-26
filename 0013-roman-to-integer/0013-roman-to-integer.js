/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum = 0;
    let roman = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
    let ints = [1000, 500, 100, 50, 10, 5, 1]

    for (let i = 0; i < s.length; i++) {
        sum += ints[roman.indexOf(s[i])]
        if (roman.indexOf(s[i+1]) !== -1 && roman.indexOf(s[i]) > roman.indexOf(s[i+1])) {
            sum -= ints[roman.indexOf(s[i])]*2
        }
    }
    return sum;
};