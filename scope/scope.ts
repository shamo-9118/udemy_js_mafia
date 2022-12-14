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
type CalcFactory = {
    plus: (value: number) => number;
    minus: (value: number) => number;
    multiply: (value: number) => number;
    divide: (value: number) => number;
};
{
    const calcFactory: CalcFactory = (function (num: number): CalcFactory {
        function plus(value: number): number {
            return num + value;
        }
        function minus(value: number): number {
            return num - value;
        }
        function multiply(value: number): number {
            return num * value;
        }
        function divide(value: number): number {
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
    type CulcFuctoryObject = {
        plus: (number: number) => number;
        minus: (number: number) => number;
        multiply: (number: number) => number;
        divide: (number: number) => number;
    };

    function culcFuctory(value: number) {
        function plus(number: number) {
            const newValue: number = value + number;
            value = newValue;
            return newValue;
        }
        function minus(number: number) {
            const newValue = value - number;
            value = newValue;
            return newValue;
        }
        function multiply(number: number) {
            const newValue = number * value;
            value = newValue;
            return newValue;
        }
        function divide(number: number) {
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

    // const props = [];
    // if (props.length) {
    //     console.log("hello");
    // } else {
    //     console.log("good");
    // }
}
{
    type Countries = ["Japan", "America", "England", "Korea"];
    type Country = Countries["length"] 
    const hello:Country= 4
    // interface Countries {
    //     length:4,
    //     0:"Japan",
    //     1:"America", 
    //     2:"England", 
    //     3:"Korea"
    // }
}
