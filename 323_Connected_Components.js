const buildAdjList = (n, edges) => {
  const adjList = Array.from({ length: n }, () => []);

  for (let edge of edges) {
    let [src, dest] = edge;
    adjList[src].push(dest);
    adjList[dest].push(src);
  }

  return adjList;
};

const bFs = (node, adjList, visited) => {
  let queue = [node];
  visited[node] = true;

  while (queue.length) {
    let curNode = queue.shift();

    for (let neighbor of adjList[curNode]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    }
  }
};

var countComponents = (n, edges) => {
  let adjList = buildAdjList(n, edges);
  let visited = {};
  let numComponents = 0;

  for (let vertex = 0; vertex < adjList.length; vertex++) {
    if (!visited[vertex]) {
      numComponents++;
      bFs(vertex, adjList, visited);
    }
  }

  return numComponents;
};

console.log(
  countComponents(5, [
    [0, 1],
    [1, 2],
    [3, 4],
  ])
);

/*
Number of Connected Components in an Undirected Graph

Given n nodes labeled from o to m - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to find the number of connected components in an undirected graph.

Example 1:
Input: n = 5 and edges = [[0,1], [1,2], [3,4]]

0	   3	
|	   |
1—2	  4	

Output: 2

Example 2:
Input: n = 5 and edges = [[0,1], [1,2], [2,3], [3,4]]

0	    4	
|	    |
1—2	—3	

Output: 1
*/
