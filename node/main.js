
//!をつけることでフォルスになる。!をつけるだけでそもそもbooleanにタイプチェンジされる？

let num = 1;
const sumNumber = (num) => {
    return num++;
};
const getNumber = (sumNumber,num) => {
    return function () {
        sumNumber(num)
    };
};
getNumber(sumNumber)
