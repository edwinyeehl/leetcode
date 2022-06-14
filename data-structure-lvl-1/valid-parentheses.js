/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    const stack = [];
      
    for (let i = 0; i < s.length; i += 1) {
        const prev = stack[stack.length - 1];
        const curr = s[i];
        
        if (prev && 
            (prev === '(' && curr === ')') ||
            (prev === '{' && curr === '}') ||
            (prev === '[' && curr === ']')) {
            stack.pop();
            continue;
        }
        
        stack.push(curr);
    }
    
    return stack.length === 0;
};