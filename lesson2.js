"use strict";
{
    let a = undefined;
    function fun(num = -1) {
        num = num || -1;
        console.log(num);
    }
    fun(a);
}
{
    function callGreeting(name, greeting) {
        if (greeting) {
            console.log(`${name + greeting}`);
            return;
        }
        console.log(`hey!${name}`);
    }
    const name = "Bob";
    let greeting = undefined;
    console.log(Boolean(greeting));
    callGreeting(name);
}
