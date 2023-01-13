"use strict";
const asyncCount = (value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(value++);
            resolve(value);
        }, 1000);
    });
};

const init = async () => {
    let val = await asyncCount(0);
    val = await asyncCount(val);
    val = await asyncCount(val);
};
init();
