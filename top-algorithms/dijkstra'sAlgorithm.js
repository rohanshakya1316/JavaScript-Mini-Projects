// * A graph search algorithm that finds the shortest path between two nodes in a weighted graph. 

const dijkstra = (graph, start) => {
    const distances = {};
    const visited = new Set();

    // Initialize distances
    for (const vertex in graph) {
        distances[vertex] = Infinity;
    }

    distances[start] = 0;

    while (true) {
        const current = getMinNode(distances, visited);

        if (!current) break;

        // Mark as visited
        visited.add(current);

        // Relax edges
        for (const neighbor in graph[current]) {
            const newDistance =
                distances[current] + graph[current][neighbor];

            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
            }
        }
    }

    return distances;
};


const getMinNode = (distances, visited) => {
    let minNode = null;

    for (const node in distances) {
        if (
            !visited.has(node) &&
            (minNode === null ||
             distances[node] < distances[minNode])
        ) {
            minNode = node;
        }
    }

    return minNode;
};

const graph = {
    A: { B: 4, C: 2 },
    B: { A: 4, C: 1, D: 5 },
    C: { A: 2, B: 1, D: 8, E: 10 },
    D: { B: 5, C: 8, E: 2, F: 6 },
    E: { C: 10, D: 2, F: 3 },
    F: { D: 6, E: 3 }
};

console.log(dijkstra(graph, "A"));