 
/*
        Given an expression string exp, write a program to examine whether the pairs 
        and the orders of “{“, “}”, “(“, “)”, “[“, “]” are correct or not.
        return either true or false
 */

function isBalanced(exp){
    // write your code here ...
    const dict = {
        '[' : ']',
        '{' : '}',
        '(' : ')'
    }
    let stack = [];
    for (const iterator of exp) {
        if(iterator == '[' || iterator == '{' || iterator == '('){
            stack.push(iterator);
        }else{
            const popped = stack.pop();
            if(dict[popped] != iterator) return false;
        }
    }
    return stack.length == 0
}

console.log(isBalanced('[()]{}{[()()]()}')) // true
console.log(isBalanced('[(])')) // false
console.log(isBalanced('[({}])')) // false
console.log(isBalanced('[]{}()')) // true
console.log(isBalanced('[(){()}{}]')) // true
