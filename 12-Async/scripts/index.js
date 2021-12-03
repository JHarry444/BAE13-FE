"use strict"

const promisesPromises = new Promise((resolve, reject) => {
    const rand = Math.random();

    console.log("Start of promise");
    setTimeout(() => {
        if (rand > 0.5) {
            resolve("Yay!");    
        } else {
            reject("Boo!");
        }
    }, 5_000);  

    console.log("End of promise");
});

const onSuccess = res => console.log("Success:", res);
const onFailure = err => console.error("Failure:", err);

promisesPromises.then(onSuccess).catch(onFailure);

console.log("Hello there!");

const output = document.querySelector("section#pokemon");

axios
    .get("https://pokeapi.co/api/v2/pokemon/snorlax")
    .then(response => {
        const pokemon = response.data;
        console.log("RES:", response);

        const name = document.createElement("h2");
        name.innerText = pokemon.name;
        output.appendChild(name);

        const info = document.createElement("p");
        info.innerText += `ID: ${pokemon.id}\n`;
        info.innerText += `Height: ${pokemon.height}\n`;
        info.innerText += `Weight: ${pokemon.weight}`;
        output.appendChild(info);

        const typeHeading = document.createElement("h2");
        typeHeading.innerText = "Types:";
        output.appendChild(typeHeading);

        const types = document.createElement("ul");
        for (let type of pokemon.types) {
            const typeItem = document.createElement("li");
            typeItem.innerText = type.type.name;
            types.appendChild(typeItem);
        }
        output.appendChild(types);

        const image = document.createElement("img");
        image.src = pokemon.sprites.front_default;
        output.appendChild(image);
    })
    .catch(err => console.error(err));
