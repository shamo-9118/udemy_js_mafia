{
    let a = undefined;
    function fun(num: number | null = -1) {
        num = num || -1;
        // console.log(num);
    }
    fun(a);
}
{
    function callGreeting(name: string, greeting?: string) {
        if (greeting) {
            // console.log(`${name + greeting}`);
            return;
        }
        // console.log(`hey!${name}`);
    }
    const name: string = "Bob";
    let greeting = undefined;
    // console.log(Boolean(greeting));

    callGreeting(name);
}
{
    type Numbers = {
        [key: number]: number;
    };
    const numbers = {
        propA: 10,
        propB: 20,
        propC: 30,
    };
}
{
    function fn(...args: number[]) {
       
    }
    fn(1, 2);
}

