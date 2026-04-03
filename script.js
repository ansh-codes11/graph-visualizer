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

    document.getElementById("output").innerText = result.join(" → ");
}
