/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let parentheses = "() {} []";
  let stack = [];
  let i = 0;

  while (i < s.length) {
    stack.push(s[i]);
    i++;
    let open = stack[stack.length - 2];
    let closed = stack[stack.length - 1];

    if (parentheses.includes(open + closed)) {
      stack.pop();
      stack.pop();
    }
  }

  return stack.length === 0;
};

isValid("()[]");
/* 
Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false
*/
