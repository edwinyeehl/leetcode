/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */

var groupThePeople = function(groupSizes) {
    const groups = {};
    let result = [];

    // Create a hashmap of group sizes and their members
    for (let i = 0; i < groupSizes.length; i++) {
        if (!groups[groupSizes[i]]) {
            groups[groupSizes[i]] = [i];
        } else {
            groups[groupSizes[i]].push(i);
        }
    }

    // Iterate through the hashmap and create a new array of arrays for each group
    for (let grouping of Object.entries(groups)) {
        const group = grouping[1];
        const groupSize = grouping[0];
        const groupCount = group.length / groupSize;

        for (let i = 0; i < groupCount; i++) {
            result.push(group.slice(i * groupSize, (i + 1) * groupSize));
        }
    } 

    // Return the result
    return result;
}

console.log(groupThePeople([2,1,3,3,3,2]));