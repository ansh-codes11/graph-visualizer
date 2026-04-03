// BFS Function
function runBFS() {
    let graph = {
        0: [1, 2],
        1: [0, 3],
        2: [0],
        3: [1]
    };

    let visited = {};
    let queue = [0];
    visited[0] = true;

    let result = [];

    while (queue.length > 0) {
        let node = queue.shift();
        result.push(node);

        for (let neighbor of graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }

    document.getElementById("output").innerText =
        "BFS: " + result.join(" → ");
}


// Dijkstra Function
function runDijkstra() {
    let graph = {
        0: [[1, 4], [2, 1]],
        1: [[3, 1]],
        2: [[1, 2], [3, 5]],
        3: []
    };

    let dist = {};
    let pq = [[0, 0]]; // [distance, node]

    for (let node in graph) {
        dist[node] = Infinity;
    }
    dist[0] = 0;

    while (pq.length > 0) {
        pq.sort((a, b) => a[0] - b[0]);
        let [currDist, node] = pq.shift();

        for (let [neighbor, weight] of graph[node]) {
            let newDist = currDist + weight;

            if (newDist < dist[neighbor]) {
                dist[neighbor] = newDist;
                pq.push([newDist, neighbor]);
            }
        }
    }

    document.getElementById("output").innerText =
        "Dijkstra: " + JSON.stringify(dist);
}
