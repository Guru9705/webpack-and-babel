const add = (a, b) => a + b;

let obj = {
    a: 1,
    add,
    mul(a, b) {
        return a * b;
    }
}

const { mul } = obj;
console.log(mul(5,4))