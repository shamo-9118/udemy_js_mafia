"use strict";
//スコープの理解を確かめる問題
//問題1エラーが出ないようにする
{
    function fn() {
        if (true) {
            let a = "fn called";
            return a;
        }
    }
    const result = fn();
    // console.log(result);
}
//問題2 期待値通りに出力できるようにする
{
    const val = "val1";
    function fn2() {
        console.log(val); //val1
        if (true) {
            const val = "val2";
            console.log(val); //val2
        }
        console.log(val); //val1
    }
    // fn2();
}
//問題3
// increment() //1
// increment() //2
// increment() //3
// increment() //4
// increment() //5
{
    {
        let num = 0;
        function increment() {
            num + 1;
            console.log(num);
            return num;
        }
    }
}
{
    const calcFactory = (function (num) {
        function plus(value) {
            return num + value;
        }
        function minus(value) {
            return num - value;
        }
        function multiply(value) {
            return num * value;
        }
        function divide(value) {
            return num / value;
        }
        return {
            plus,
            minus,
            multiply,
            divide,
        };
    })(10);
    const plusResult = calcFactory.plus(3);
    // console.log(plusResult);
}
{
    function culcFuctory(value) {
        function plus(number) {
            const newValue = value + number;
            value = newValue;
            return newValue;
        }
        function minus(number) {
            const newValue = value - number;
            value = newValue;
            return newValue;
        }
        function multiply(number) {
            const newValue = number * value;
            value = newValue;
            return newValue;
        }
        function divide(number) {
            const newValue = value / number;
            value = newValue;
            return newValue;
        }
        return {
            plus,
            minus,
            multiply,
            divide,
        };
    }
    const culc = culcFuctory(10);
    const plusResult = culc.plus(5);
    const minusResult = culc.minus(3);
    const multiplyResult = culc.multiply(2);
    const divideResult = culc.divide(3);
    console.log(plusResult);
    console.log(minusResult);
    console.log(multiplyResult);
    console.log(divideResult);
}
