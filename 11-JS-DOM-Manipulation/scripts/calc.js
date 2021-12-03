
(function() {
    let num1 = "";
    let operator = ";"
    let num2 = "";

    let postOp = false;
    let postCalc = false;

    const output = document.querySelector("#output");

    document
        .querySelectorAll("button.calcNum")
        .forEach(btn => btn.addEventListener("click", ({target: {innerText}}) => {
            if (postCalc) {
                num1 = innerText;
                output.value = num1;
                postCalc = false;
            } else if (!postOp) {
                num1 += innerText;
                output.value = num1;
            } else { 
                num2 += innerText;
                output.value = num2;
            }
        })
    );

    document.querySelectorAll("button.calcOp")
        .forEach(btn => btn.addEventListener("click", (event) => {
            operator = event.target.innerText;
            output.value = "";
            postOp = true;   
        })
    );

    document.querySelector("button#equalsBtn").addEventListener("click", (event) => {
        const calc = `${num1} ${operator} ${num2}`;
        const result = eval(calc);

        output.value = result;
        
        num1 = "";
        num2 = "";
        postOp = false;
        postCalc = true;
    });
})();