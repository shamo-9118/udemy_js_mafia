"use strict";
{
    const arry = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    function fn(arry) {
        const result = Math.max.apply(null, arry);
        console.log(...arry);
        console.log(result);
    }
    fn(arry);
}
