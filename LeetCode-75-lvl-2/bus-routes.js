/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */

var numBusesToDestination = function (routes, source, target) {
  if (source === target) return 0;

  let graph = routes.map((x) => []);
  let sets = routes.map((x) => new Set(x));
  let sourceIndex = routes.length;
  let targetIndex = routes.length + 1;

  graph[sourceIndex] = [];
  graph[targetIndex] = [];

  for (let i = 0; i < routes.length; i++) {
    for (let j = i + 1; j < routes.length; j++) {
      if (hasJolt(routes[i], sets[j])) {
        graph[i].push(j);
        graph[j].push(i);
      }
    }

    if (sets[i].has(source)) graph[sourceIndex].push(i);
    if (sets[i].has(target)) graph[i].push(targetIndex);
  }

  return bfs(sourceIndex, targetIndex);

  function bfs(source, target) {
    let visited = routes.map((x) => false);
    let queue = [[source, 0]];
    visited[source] = true;

    while (queue.length) {
      let [cur, buses] = queue.shift();

      for (let i of graph[cur]) {
        if (!graph[cur].includes(i) || visited[i]) continue;

        if (i == target) {
          return buses;
        }

        queue.push([i, buses + 1]);
        visited[i] = true;
      }
    }
    return -1;
  }

  function hasJolt(r1 = [], r2 = new Set()) {
    let set = r2;

    for (let x of r1) {
      if (set.has(x)) return true;
    }

    return false;
  }
};

console.log(
  numBusesToDestination(
    [
      [1, 2, 7],
      [3, 6, 7],
    ],
    1,
    6
  )
);

console.log(
  numBusesToDestination(
    [[7, 12], [4, 5, 15], [6], [15, 19], [9, 12, 13]],
    15,
    12
  )
);

console.log(
  numBusesToDestination(
    [
      [7, 12],
      [4, 5, 15],
      [15, 19],
      [9, 12, 13],
    ],
    7,
    13
  )
);
