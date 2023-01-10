// //コールバック関数と非同期
// const sleep = (greeting) => {
//     setTimeout(() => {
//         console.log("hello!");
//     }, 2000);
//     greeting("marl");
// };
// const greeting = (userName) => {
//     console.log(`${userName} goodnight!!`);
// };
// sleep(greeting);

const increment = (callback, value) => {
    setTimeout(() => {
        value++;
        callback(value);
    }, 1000);
};

increment(function (val) {
    increment(function (val) {});
}, 0);
