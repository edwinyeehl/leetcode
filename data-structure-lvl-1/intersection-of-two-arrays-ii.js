var intersect = function(nums1, nums2) {
    let cache = {};
    let result=[];

    for (let num of nums2){
        if (!cache[num])cache[num]=1;
        else cache[num]++;
    }
    
    for (let num of nums1){
        if (cache[num]){
            result.push(num);
            cache[num]--;
        }
    }
    
    return result;
}