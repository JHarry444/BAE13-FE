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


const sum = (accumulator, next) => accumulator + next;

console.log("SUM:", nums.reduce(sum, 0));

let studentGrades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Cyrus', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Jeff', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

const isBoy = ({sex}) => sex === "M";
const getMales = students => students.filter(isBoy);


const isGirl = ({sex}) => sex === "F";
const getFemales = students => students.filter(isGirl);


const average = students => students.map(student => student.grade).reduce(sum) / students.length;

const max = (highestGradeSoFar, nextGrade) => Math.max(nextGrade, highestGradeSoFar);
const maxGrade = students => students.map(student => student.grade).reduce(max);

const maxGradeMyWay = students => students.reduce((currMax, {grade}) => Math.max(currMax, grade), 0);
