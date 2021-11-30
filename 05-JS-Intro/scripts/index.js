const textEle = document.getElementById("text");

console.log("TEXT: ", textEle.innerText);


let x = 12;

{
    var y = 27; // don't do this - super dodgy
}

console.log("SUM: ", x  + y);
