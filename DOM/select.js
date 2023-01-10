// const foods = document.getElementById("foods");
// const checkFood = (defaultFood) => {
//     for (let i = 0, len = foods.length; len > 0; i++) {
//         const food = foods[i];
//         if (defaultFood.indexOf(food.value) > -1) {
//             food.selected = true;
//             console.log(food.value);
//         }
//     }
// };
// checkFood(["チャーハン", "ラーメン"]);

const text = document.createTextNode("今日の夜ご飯はラーメン");
const div = document.createElement("div");
div.appendChild(text);
console.log(div);
