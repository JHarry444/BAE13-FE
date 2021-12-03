"use strict";

const output = document.querySelector("#output");

const kings = [];

document.querySelector("#filter").addEventListener("input", (event) => {
    renderKings(event.target.value);
});


const renderKings = (filter) => {
    output.innerHTML = "";
    
    for (let king of kings) {
        if (filter && !king.nm.toLowerCase().startsWith(filter)) 
            continue;
        
        const kingContainer = document.createElement("div");
            
        const kingName = document.createElement("p");
        kingName.innerText = `Name: ${king.nm}`;
        kingContainer.appendChild(kingName);

        const kingCity = document.createElement("p");
        kingCity.innerText = `City: ${king.cty}`;
        kingContainer.appendChild(kingCity);

        const kingHouse = document.createElement("p");
        kingHouse.innerText = `House: ${king.hse}`;
        kingContainer.appendChild(kingHouse);

        const kingYears = document.createElement("p");
        kingYears.innerText = `Years: ${king.yrs}`;
        kingContainer.appendChild(kingYears);

        output.appendChild(kingContainer);
    }
}

axios
    .get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json")
    .then(({data}) => {
        kings.push(...data);
        renderKings();
    })
    .catch(err => console.error(err));