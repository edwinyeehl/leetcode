/**
 * @param {number[][]} people
 * @return {number[][]}
 */

var reconstructQueue = function(people) {
    people.sort((a, b) => {
        if (a[0] !== b[0]) {
            return b[0] - a[0];
        } else {
            return a[1] - b[1];
        }
    });

    const res = [];

    for (const p of people) {
        res.splice(p[1], 0, p);
    }

    return res;
}

console.log(reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]));
