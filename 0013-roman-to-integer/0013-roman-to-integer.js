/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum = 0;
    let roman = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
    let ints = [1000, 500, 100, 50, 10, 5, 1]

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "C" && s[i+1] === "M") {
            sum += 900;
            i++;
        } else if (s[i] === "C" && s[i+1] === "D") {
            sum += 400;
            i++;
        } else if (s[i] === "X" && s[i+1] === "C") {
            sum += 90;
            i++;
        } else if (s[i] === "X" && s[i+1] === "L") {
            sum += 40;
            i++;
        } else if (s[i] === "I" && s[i+1] === "X") {
            sum += 9;
            i++;
        } else if (s[i] === "I" && s[i+1] === "V") {
            sum += 4;
            i++;
        } else {
            sum += ints[roman.indexOf(s[i])]
        }
    }
    return sum;
};