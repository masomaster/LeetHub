/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    // Simple solution: make an object with key value pairs of integers and Roman numerals.
    // process through the integer, converting integers to Roman.
    // E.g. for each place (only up to 4 places), check if more/less than 5 * the 10 or 100 or 1000.
    
    // Or could divide number by each integer threshold and add that many roman symbols.
    // If I invert the intAndRoman so it starts with biggest num,
    // then use a loop to go through all the keys, I can automate the process for all symbols
    // (instead of hard code separate if statements to divide num and assign symbols).
    
    
    // Error handling
    if (num < 1 || num > 3999) {
        throw new Error("Number is out of bounds!")
    }
    if (num % 1 !== 0) {
        throw new Error("Not an integer!")
    }
    
    // Constants for symbols
    const intAndRoman = {
        1000: "M",
        500: "D",
        100: "C",
        50: "L",
        10: "X",
        5: "V",
        1: "I",
    }
    const romanInts = [1000, 100, 10, 1]
    let romanNum = "";
    
    for (let i = 0; i<romanInts.length; i++) {
        const int = romanInts[i];
        console.log("num is", num)
        console.log("int is", int)
        let multiplier = Math.floor(num / int);
        console.log("multiplier is ", multiplier)
        if (multiplier === 9) {
            if (int === 1) {
                romanNum += "IX"
            } else if (int === 10) {
                romanNum += "XC"
            } else if (int === 100) {
                romanNum += "CM"
            }
            num -= int*multiplier
            multiplier -= 9;
        }
        else if (multiplier >= 5) {
            if (int === 1) {
                romanNum += "V"
            } else if (int === 10) {
                romanNum += "L"
            } else if (int === 100) {
                romanNum += "D"
            }
            num -= int*5;
            multiplier -= 5;
        }
        if (multiplier === 4) {
            // multiplier is 4, then find int and insert appropriate CD or CM etc.
            if (int === 1) {
                romanNum += "IV"
            } else if (int === 10) {
                romanNum += "XL"
            } else if (int === 100) {
                romanNum += "CD"
            }
            num -= int*multiplier
            multiplier -= 4;
        } 
        for (let j=multiplier; j>0; j--) {
            romanNum += intAndRoman[int];
        }
        num -= int*multiplier;
    }
    return romanNum;
};