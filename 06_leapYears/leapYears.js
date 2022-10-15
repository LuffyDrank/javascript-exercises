const leapYears = function(year) {
    let result = year % 4;
    let result100 = year % 100;
    let result400 = year % 400;
    if (result === 0) {
        if(result100 === 0 && result400 !== 0) {
            return false;
        }
        else {
        return true;
    }
    }
    else {
        return false;
    }
};
console.log(leapYears(2000))
// Do not edit below this line
module.exports = leapYears;
