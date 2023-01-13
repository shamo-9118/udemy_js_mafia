const count = (number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(number++);
            resolve(number);
            reject("エラーが発生しました");
        }, 1000);
    });
};

count(0)
    .then((value) => {
        throw new Error();
        return count(value);
    })
    .then((value) => {
        return count(value);
    })
    .catch((errorMessage) => {
        console.log(errorMessage);
    });
