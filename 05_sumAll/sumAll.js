const sumAll = function(range1, range2) {
    switch(true) {
        case typeof range1 !== "number" || typeof range2 !== "number":
        case range1 < 0 || range2 < 0:
            return 'ERROR'
        default:
            break
    }
    
    let greatest = range2<range1?range1:range2

    return (greatest*(greatest +1)/2)
};

// Do not edit below this line
module.exports = sumAll;
