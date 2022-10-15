const ftoc = function(num) {
 let result =  (num - 32) * 5 / 9 ;
 if (result === 0) {
    return 0
  }
 return parseFloat(result.toFixed(1));
};

const ctof = function(num) {
  let result =  (num * 9 / 5 + 32) ;
  if (result === 0) {
    return 0
  }
 return parseFloat(result.toFixed(1))
};
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
