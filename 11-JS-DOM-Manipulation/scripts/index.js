"use strict";

const handleClick = () => alert("Hello again!");

const kmInput = document.querySelector("input#kms");
const milesInput = document.querySelector("input#miles");

const heading = document.createElement("h1");
heading.innerText = "DOM Manipulation";
document.querySelector("body").prepend(heading);

const convertKmToMiles = () => {
    const km = kmInput.value;
    const miles =   km / 1.609;

    milesInput.value = miles;
}

milesInput.addEventListener("input", function(event) {
    console.log("EVENT:", event);
    const miles = milesInput.value;
    const km =   miles * 1.609;
    console.log(km);
    kmInput.value = km;
});