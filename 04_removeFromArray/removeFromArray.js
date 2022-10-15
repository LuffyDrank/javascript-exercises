const removeFromArray = function(array, ...args) {
    const myArray = [];
    array.forEach(function(item) {
        if(args.includes(item)) {
            console.log("Deleted Item = " + item);
        }
        else {
            myArray.push(item);
        }
    })
    return myArray;
};
console.log(removeFromArray([0, 1, 2, 3], 3, 0));
// Do not edit below this line
module.exports = removeFromArray;
