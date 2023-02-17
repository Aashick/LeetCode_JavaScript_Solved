/**
 * @param {number[]} heights
 * @return {number[]} Do not return anything, modify matrix in-place instead.
 */
var findBuildings = function(heights) => {
  const start = heights.length - 1
  const result = [start]

  for(let i = heights.length - 2; i >= 0; i--){
    let curBuilding = heights[i]
    let lastBuilding = heights[result[result.length - 1]]

    if(curBuilding > lastBuilding) {
      result.push(i)
    }
  }

  return result.reverse()
}


/*
1762.Building with an Ocean View

There are n buildings in a line. You are given an integer array beights of size n that represents the heights of the buildings in the line
The ocean is to the right of the buildings. A building has an ocean view if the building can see the ocean without obstructions. Formally, a building has an ocean view if all the buildings to its right have a smaller height.
Return a list of indices (0-indexed) of buildings that have an ocean view, sorted in increasing order.

Example 1:
Input: heights = [4,2,3, 1]
Output: [0,2,3]
Explanation: Building 1 (0-indexed) does not have an ocean view because building 2 is taller.

Example 2:
Input: heights = [4,3, 2, 1]
Output: [0, 1,2,3]
Explanation: All the buildings have an ocean view.

Example 3:
Input: heights = [1,3,2,4]
Output: (31
Explanation: Only building 3 has an ocean view.

Example 4:
Input: heights = [2,2,2,21
Output: [3]
Explanation: Buildings cannot see the ocean if there are buildings of the same height to its right.
Constraints:
1 <- heights. length <= 105
• 1 <= heights (1] <= 10°
*/