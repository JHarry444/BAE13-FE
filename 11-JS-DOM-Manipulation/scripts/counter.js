"use strict";

const counter = document.querySelector("input#counter");

const output = document.querySelector("section#history");

const addHistory = (current, change, newValue) => {
    const newHistory = document.createElement("p");
    if (change === 0) {
        newHistory.innerText = 0;
    } else {
        newHistory.innerText = `${current} ${change} = ${newValue}`;
    }
    output.appendChild(newHistory);
}

const updateCounter = (change) => {
    if (change === 'R') {
        counter.value = 0;
        addHistory(null, 0, null);
        return;
    }
    const current = counter.value;

    const newValue = Number.parseInt(current) + change ;

    counter.value = newValue;

    addHistory(current, change, newValue);
}