"use strict";

const getOutput = document.querySelector("#getOutput");

document.querySelector("#deleteForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const form = this;

    const duckId = form.duckId.value;
    axios
        .delete(`http://localhost:8081/duck/deleteDuck/${duckId}`)
        .then(res => {
            console.log(res);
            form.reset();
            form.duckId.focus();
            getDucks();
        })
        .catch(err => console.error(err));
});

// use anonymous functions not arrow functions for eventListeners
document.querySelector("#duckForm").addEventListener("submit", function(event) {
    event.preventDefault(); // disables page refreshing

    console.log("THIS:", this);

    const form = this; // purely to make it more obvious

    console.log("COLOUR: ", form.colour);

    const data = {
        name: form.name.value,
        age: form.age.value,
        colour: form.colour.value,
        habitat: form.habitat.value,
    };

    console.log("DATA: ", data);

    axios
        .post("http://localhost:8081/duck/createDuck", data)
        .then(res => {
            getDucks();
            form.reset(); // resets the form
            form.name.focus(); // puts the cursor in the name field
            console.log(res);
        })
        .catch(err => console.error(err));
});

const getDucks = () => {
    axios
        .get("http://localhost:8081/duck/getAll")
        .then(res => {
            console.log(res);
            const ducks = res.data;
            getOutput.innerHTML = ""; // blanks the output field
            for (let duck of ducks) {
                const duckCol = document.createElement("div");
                duckCol.classList.add("col");

                const duckCard = document.createElement("div");
                duckCard.style = `background-color: ${duck.colour}`;
                duckCard.classList.add("card");

                const duckBody = document.createElement("div");
                duckBody.classList.add("card-body");

                const duckName = document.createElement("h5");
                duckName.classList.add("card-title");
                duckName.innerText = duck.name;
                duckBody.appendChild(duckName);

                const duckAge = document.createElement("p");
                duckAge.classList.add("card-text");
                duckAge.innerText = `Age: ${duck.age}`;
                duckBody.appendChild(duckAge);

                // const duckColour = document.createElement("p");
                // duckColour.classList.add("card-text");
                // duckColour.innerText = `Colour: ${duck.colour}`;
                // duckBody.appendChild(duckColour);

                const duckHabitat = document.createElement("p");
                duckHabitat.classList.add("card-text");
                duckHabitat.innerText = `Habitat: ${duck.habitat}`;
                duckBody.appendChild(duckHabitat);

                const duckDelete = document.createElement("button");
                duckDelete.innerText = "DELETE";
                duckDelete.classList.add("btn", "btn-danger");
                duckDelete.addEventListener("click", () => {
                    axios
                        .delete(`http://localhost:8081/duck​/deleteDuck​/${duck.id}`)
                        .then(res => getDucks())
                        .catch(err => console.error(err))
                });
                duckBody.appendChild(duckDelete);
                duckCard.appendChild(duckBody);
                duckCol.appendChild(duckCard);

                getOutput.appendChild(duckCol);
            }
        })
        .catch(err => console.error(err));
}

getDucks();