"use strict";

const counter = document.querySelector("input#counter");

const minusFive = () => {
    const current = counter.value;
    console.log("CURR:", current);

    const newValue = Number.parseInt(current) - 5;
    console.log("NEW:", newValue);

    counter.value = newValue;
}