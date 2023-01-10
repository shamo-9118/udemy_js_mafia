"use strict";
document.addEventListener(
    "DOMContentLoaded",
    function () {
        document.getElementById("result_text").textContent =
            "<a href='https://goqsystem.com'>goqsystemHP</a>";
        document.getElementById("result_html").innerText =
            "<a href='https://goqsystem.com'>goqsystemHP</a>";
    },
    false
);
document.addEventListener(
    "DOMContentLoaded",
    function () {
        document.getElementById("btn").addEventListener(
            "click",
            function () {
                const name = document.getElementById("name");
                const result = document.getElementById("result");
                result.innerText = "こんにちは！" + name.value + "さん！";
            },
            false
        );
    },
    false
);

const getRadioValue = (name) => {
    const foods = document.getElementsByName(name);
    for (let i = 0, len = foods.length; i < len; i++) {
        const food = foods[i];
        if (food.checked) {
            const selectedFood = food;
            alert(selectedFood.value);
        }
    }
};
const btn = document.getElementById("food_btn");
btn.addEventListener("click", () => {
    getRadioValue("food");
});

