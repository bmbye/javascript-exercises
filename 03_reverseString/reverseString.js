const reverseString = function(text) {
    if (text == '') {
        return ''
    }

    return Array.from(text).reverse().join('')
};

// Do not edit below this line
module.exports = reverseString;
