// * A traversal algorithm that visits all the vertices of a graph in breadthward margin.

const bfs = (graph, start) => {
  const visited = new Set();
  const queue = [start];

  while (queue.length > 0) {
    const node = queue.shift();

    if (!visited.has(node)) {
      console.log(node);
      visited.add(node);

      const neighbors = graph[node];
      for (const neighbor of neighbors) {
        queue.push(neighbor);
      }
    }
  }
};

const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"]
};

bfs(graph, "A");
