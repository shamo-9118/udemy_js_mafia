"use strict";
//コンストラクタ関数について学ぶ
//コンストラクタ関数は新しいオブジェクト（インスタンス）を作成する
function user(name, age) {
    //コンストラクター関数 ->ここではインスタンスを作成
    this.name = name;
    this.age = age;
    // greeting = function () {
    //     console.log(`hello ${this.name}`);
    // };
}
user.prototype.greeting = function () {
    //prototypeに関数を定義
    console.log(`hello ${this.name}`);
};

const userA = new user("shamo", 24); //インスタンスを作成

userA.greeting(); //実行
