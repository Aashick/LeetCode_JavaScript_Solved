/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const table = Array.from({ length: m }, () => new Array(n));

  for (let i = 0; i < table.length; i++) table[i][0] = 1;
  for (let i = 0; i < table[0].length; i++) table[0][i] = 1;

  for (let i = 1; i < table.length; i++) {
    for (let j = 1; j < table[i].length; j++) {
      table[i][j] = table[i - 1][j] + table[i][j - 1];
    }
  }

  return table[m - 1][n - 1];
};

/*
Example 1:
Input: m = 3, n = 7
Output: 28

Example 2:
Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down
 */
