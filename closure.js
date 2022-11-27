"use strict";
function addNumberFactory(number) {
    function addNumber(value) {
        return number + value;
    }
    return addNumber;
}
const number = 5;
const add5 = addNumberFactory(number);
const result = add5(5);
// console.log(result);
