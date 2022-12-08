{
    const arry: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    function fn(arry: number[]) {
        const result: number = Math.max.apply(null, arry);
        console.log(...arry);
        console.log(result);
    }
    fn(arry);
}
{
    const users = ["marumoto", "shoma", "yui", "deguchi"];
    const hello = (propId: number) => {
        setTimeout(() => {
            console.log(`hello ${users[propId]}`);
        }, 3000);
    };
    const showAlert = () => {
        setTimeout(() => {
            alert("Welcome");
        }, 2000);
    };
    // hello(1);
    // showAlert();
}
{
    const name = "marumoto";
    const iife = (function (name) {
        console.log("colled iife");
        const publicNum = 0;
        const privateNum = 10;

        function publicFunction() {
            console.log(`called public ${name}`);
        }

        function privateFunction() {
            console.log(`called private ${privateNum}`);
        }
        return {
            publicFunction,
            publicNum,
        };
    })(name);
}
