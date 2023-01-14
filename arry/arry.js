const arry = ["a", "b", "c", "d"];

const result = arry.reduce((accumulation, current) => {
    return accumulation + current;
});

console.log(result);
