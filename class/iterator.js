const obj = [
    [1, 2, 3, 4, 5, 6],
    ["a", "b", "c"],
    {
        name: "marumoto",
        age: 22,
    },
];

const number2 = [...obj[0]];
number2[1] = 10;

console.log(number2);
console.log(obj);
