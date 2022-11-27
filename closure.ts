function addNumberFactory(number: number): (value: number) => number {
    function addNumber(value: number): number {
        return number + value;
    }
    return addNumber;
}

const number: number = 5;
const add5: (value: number) => number = addNumberFactory(number);
const result = add5(5);
// console.log(result);
