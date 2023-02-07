/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows < 1) return [];
  if (numRows === 1) return [[1]];

  const triangle = [[1]];

  for (let i = 1; i < numRows; i++) {
    const prevRow = triangle[i - 1];
    const curRow = [];
    curRow.push(1);

    for (let j = 1; j < prevRow.length; j++) {
      curRow[j] = prevRow[j - 1] + prevRow[j];
    }
    curRow.push(1);
    triangle.push(curRow);
  }

  return triangle;
};

/*
118. Pascal's Triangle
Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
Input: numRows = 1
Output: [[1]]
 

Constraints:
1 <= numRows <= 30
*/
