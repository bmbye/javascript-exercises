const ftoc = function(temp) {
  const convTemp = (temp-32)*5/9
  return Math.round(convTemp*10)/10
};

const ctof = function(temp) {
  const convTemp = (temp*9/5)+32
  return Math.round(convTemp*10)/10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
