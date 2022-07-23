const repeatString = function(text, repeatAmount) {
    if (repeatAmount < 0) {
        return 'ERROR'
    } else if (text != ''&&repeatAmount!=0) {
        let repeatedString = text
        for (let i = 1;i < repeatAmount;i++) {
            repeatedString += text
        }
        return repeatedString
    } else {
        return ''
    }
};

// Do not edit below this line
module.exports = repeatString;
