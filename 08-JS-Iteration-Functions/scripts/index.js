"use strict";

const arr = [2,4,6,8,10,12,14,16,18,20];

console.log("Standard for loop");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log("Enhanced for with 'of'");
for (let num of arr) {
    console.log(num);
}
console.log("Enhanced for with 'in'");
for (let index in arr) {
    console.log(index);
    console.log(arr[index])
}

const me = {
    name: "JH",
    age: 27,
    job: "Trainer"
}

for (let key in me) {
    console.log(key + ":", me[key]);
}
console.log("SUM:", sum(8, 4));

function sum(a, b) {
    return a + b;
}

const divide = function(a, b) {
    return a / b;
}

console.log("DIVIDE:", divide(20, 5));


const product = (a, b) => a * b; // efficient

const print = arg => console.log(arg); // MOAR efficient