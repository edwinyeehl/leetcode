/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

var leastInterval = function(tasks, n) {
    const taskMap = new Map();
    let max = 0;
    let maxTask = tasks[0];

    for (const task of tasks) {
        taskMap.set(task, (taskMap.get(task) || 0) + 1);
        if (taskMap.get(task) > max) {
            max = taskMap.get(task);
            maxTask = task;
        }
    }

    let idleCount = (max - 1) * n;

    taskMap.forEach((count, task) => {
        if (task === maxTask) return;
        if (count === max) idleCount -= (count - 1);
        else idleCount -= count;
    })

    if (idleCount <= 0) return tasks.length;
    return tasks.length + idleCount;
}

console.log(leastInterval(["A","A","A","B","B","B"], 2));
console.log(leastInterval(["A","A","A","B","B","B"], 0));
console.log(leastInterval(["A","A","A","A","A","A","B","C","D","E","F","G"], 2));
