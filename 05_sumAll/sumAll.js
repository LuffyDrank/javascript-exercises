const sumAll = function(num1, num2) {
    if(num1 < 0 || num2 < 0){
        return "ERROR"
    }
    else if(num1 < num2 && typeof num1 === "number" && typeof num2 === "number") {
        let myArray = [];
        for(let i = num1; i <= num2; i++)
        myArray.push(i);
        let myNewArray = myArray.reduce((total, num) => {
            return total + num;
        }) 
        return myNewArray
    }
    else if(num1 > num2 && typeof num1 === "number" && typeof num2 === "number") {
        let myArray = [];
        for(let i = num2; i <= num1; i++)
        myArray.push(i);
        let myNewArray = myArray.reduce((total, num) => {
            return total + num;
        }) 
        return myNewArray
    }
    else {
        return "ERROR"
    }
};
console.log(typeof 5)
// Do not edit below this line
module.exports = sumAll;
