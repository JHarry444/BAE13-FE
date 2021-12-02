"use strict";

const counter = document.querySelector("input#counter");

const output = document.querySelector("section#history");

const minusFive = () => {
    const current = counter.value;

    const newValue = Number.parseInt(current) - 5;

    counter.value = newValue;

    const newHistory = document.createElement("p");
    newHistory.innerText = `${current} -5 = ${newValue}`;
    output.appendChild(newHistory);
}

const minusOne = () => {
    const current = counter.value;

    const newValue = Number.parseInt(current) - 1;

    counter.value = newValue;
}


const resetCounter = () => {
    counter.value = 0;
}


const plusOne = () => {
    const current = counter.value;

    const newValue = Number.parseInt(current) + 1;

    counter.value = newValue;
}


const plusFive = () => {
    const current = counter.value;

    const newValue = Number.parseInt(current) + 5;

    counter.value = newValue;
}

