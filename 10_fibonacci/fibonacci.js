const fibonacci = function(num) {
    if (num < 1) {
        return 'OOPS'
    }
    let numberA = 1;
    let numberB = 1;
    let numberC = 0;
    let numberD = 0;
    let myArray = [1, 1];
    for(let i = 1; i < num; i++) {
        if(i % 2 === 0) {
            numberD = numberA + numberB;
            numberB = numberD;
            myArray.push(numberB)
        }
        else {
            numberC = numberA + numberB;
            numberA = numberC;
            myArray.push(numberA)
        }
    }
    return myArray[num - 1];
}
console.log(fibonacci(4))
// Do not edit below this line
module.exports = fibonacci;
