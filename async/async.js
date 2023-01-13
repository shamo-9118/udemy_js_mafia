"use strict";
const promisFunction = () => {
    return new Promise((reject, resolve) => {
        console.log("hello");
    });
};

const increment = (value) => {
    console.log(value++);
    console.log(value++);
};
increment(0);

function asyncProcess(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value) {
                resolve(`入力値：${value}`);
            } else {
                reject(`入力は空です`);
            }
        }, 1000);
    });
}

asyncProcess("トクジロウ")
    .then(
        (response) => {
            console.log(response);
            return asyncProcess("ニンジロウ");
        },
        (error) => {
            console.log(`エラー：${error}`);
        }
    )
    .then(
        (response) => {
            console.log(response);
            return asyncProcess("ゲンジイ");
        },
        (error) => {
            console.log(error);
        }
    )
    .then(
        (response) => {
            console.log(response);
        },
        (error) => {
            console.log(error);
        }
    );
