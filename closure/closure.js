"use strict";
function addNumberFactory(number) {
    function addNumber(value) {
        return number + value;
    }
    return addNumber;
}

const add5 = addNumberFactory(5);
const add4 = addNumberFactory(4);

const countNumberFactory = (init) => {
    let num = init;
    return function () {
        return num++;
    };
};

// const count2 = countNumberFactory(2);
// console.log(count2());
// console.log(count2());
// console.log(count2());
// console.log("------------")
// const count5 = countNumberFactory(5)
// console.log(count5())
// console.log(count5())
// console.log(count5())
// console.log(count5())

