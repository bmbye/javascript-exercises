const removeFromArray = function(nums, ...vals) {
    let valMap = new Map();
    vals.forEach(v => {
        valMap.set(v);
    });

    valMap.forEach((val, key) => {
        const index = nums.indexOf(key);
        if (index >= 0) {
            nums.splice(index, 1);
        }    
    })

    return nums
};

// Do not edit below this line
module.exports = removeFromArray;
