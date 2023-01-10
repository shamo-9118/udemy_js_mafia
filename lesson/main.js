const { convertCompilerOptionsFromJson } = require("typescript");

const classes = ["boss", "manager", "leader", "player"];
const newClasses = classes.splice(2, 0, "marumoto", "aaaa", "ssss");

const arry = [9, 10, 13, 1, 50, 94, 3];
arry.sort((a, b) => {
    return a - b;
});

const members = [
    { name: "marumoto", clazz: "player" },
    { name: "nagaoka", clazz: "boss" },
    { name: "mori", clazz: "manager" },
    { name: "iwata", clazz: "manager" },
    { name: "mouri", clazz: "player" },
    { name: "hashiguchi", clazz: "boss" },
    { name: "fujita", clazz: "player" },
];

const member = members.sort((x, y) => {
    return classes.indexOf(x.clazz) - classes.indexOf(y.clazz);
});
console.log(member);
