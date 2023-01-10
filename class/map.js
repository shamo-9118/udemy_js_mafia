const newOne = new Map();
const obj = {
    name: "marumoto",
    age: "24",
    country: "japan",
};
const user = {
    name: "marumoto",
    age: 18,
    country: "JAPAN",
};
const countries = ["japan", "america", "england", "canada"];
newOne.set(user, "human");
newOne.set(countries, "location");
const result = [...newOne];
result.map((one) => {});

const map = new Map();
map.set("dog", "ワン！");
map.set("cat", "にゃー！");
map.set("mouse", "チュー");
map.set("cow", "モー");

console.log(obj["name"]);

// for (let key of map) {
//     console.log(key);
// }
