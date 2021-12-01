"use strict";

const me = {
    name: "JH",
    age: 27,
    job: "Trainer",
    greet: () => console.log("Hello"),
    isWeapon: true
}

const {name, age, job} = me;

const print = ({name="John", age=27, job="Weapon", ...rest}) => {
    console.log("REST: ", rest);
    console.log(`Name: ${name} Age: ${age} Job: ${job}`);
}

const printBAD = person => console.log("Name: " + person.name +  "Age:" + person.age + "Job: " + person.job);


const arr = [me, 123, "abc"];

const [a, b, c] = arr;

const [first, ...rest] = arr;

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const flat = [...nums, ...arr];