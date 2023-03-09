/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // const for all brackets opening and closing
    const opening = ["[", "{" , "("];
    const closing = ["]", "}", ")"];
    
    // const for stack of last bracket
    const stack = [];
    
    // for loop going through s
    for (let i=0; i < s.length; i++) {        
        // for any opening bracket, add to stack
        if (opening.includes(s[i])) {
            stack.push(s[i]);
            console.log(stack)
            }
        // for any closing bracket
        else if (closing.includes(s[i])) {
            console.log()
            // if its index in closing brackets DOES NOT match the opening index of the last item in stack, return false;
            if (closing.indexOf(s[i]) !== opening.indexOf(stack[stack.length-1])) {
                return false;
            }
            // else pop last item from stack
            else {
                console.log(s[i])
                stack.pop();
            }
        }
    }
    if (stack.length) {return false} else {return true};
};