"use strict"

const callback = () => console.log("Hello!");


const func = (myCallback) => {
    console.log("About to call: ", myCallback);
    myCallback();
}

const arr = [1,2,3,4,5,6,7,8,9,10];

const cb = num => console.log(num);
arr.forEach(cb);

const promisesPromises = new Promise((resolve, reject) => {
    const rand = Math.random();

    if (rand > 0.5) {
        resolve("Yay!");    
    } else {
        reject("Boo!");
    }
});

const onSuccess = res => console.log("Success:", res);
const onFailure = err => console.error("Failure:", err);

promisesPromises.then(onSuccess).catch(onFailure);

const nums = [1,2,3,4,5,6,7,8,9,10];

const print = num => console.log(num);

nums.forEach(print);

// === is it the SAME TYPE and the same value
const isEven = num => num % 2 === 0;

nums.filter(isEven).forEach(print);

const square = num => num ** 2;

nums.map(square).forEach(print);


const sum = (accumulator, next) =>{
    console.log("ACC:", accumulator);
    console.log("NEXT:", next);
    const result = accumulator + next;
    console.log("RES:", result);
    return result;
} 

console.log("SUM:", nums.reduce(sum, 0));