const sum = (...nums) => {
    for (num of nums) {
        if (typeof num !== "number") {
            throw new Error("渡された値が数値ではありません");
        }
    }
};
try {
    sum("a", "b", "c", "d", "e");
} catch (e) {
    console.log(e.message);
}
//関数スコープないで定義したvar変数は外のスコープでも参照することが可能となっている。ただfunctionスコープ内で定義したものは関数スコープ内でvarで定義したとしても外のスコープでは参照することができないから注意が必要
