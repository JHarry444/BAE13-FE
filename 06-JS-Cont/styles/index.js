"use strict"; // enables strict mode - tells browser to enforce modern JS standards

const x = 12;

const y = 34;

const a = 12 // ; inserted as the 2 lines dont work together
const b = 24

function sum(a, b) {
    // debugger; stops code execution at this line if the dev console is open
    return // ; inserted here due to return statement 
    a + b;
}

function product(a, b) {
    return (
        a * b
    );
}

function scoped() {
    var myVar  = 12;
}
//  var bloop; Implied Global - inserted due to missing var/let/const on line 26

function butTheImplication() {
    bloop = "hello";
}

function byMyOwnPetard() {
    innocentVar = 27; //should error here due to variable not being declared yet
    {
        var innocentVar = null;
    }
   return innocentVar;
}

function byMyOwnPetardActual() {
    var innocentVar; // hoisted
    innocentVar = 27; //should error here due to variable not being declared yet
    {
        innocentVar = null;
    }
   return innocentVar;
}

function argsExample(var1, var2, var3) {
    console.log(arguments);
    return var1 + var2 + var3;
}


function truthyFalsey(var1) {
    if (!var1) {
        return "Invalid value";
    }
    
    if (var1) {
        console.log("YO!");
    } else {
        console.log("NO!");
    }
}


function global() {
    function inner() {
        return "Hello";
    }

    const msg = inner();

    return msg;
}

// ; inserted at end of file