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
        habitat: form.habitat.value
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
                const duckContainer = document.createElement("div");
                    
                const duckName = document.createElement("p");
                duckName.innerText = `Name: ${duck.name}`;
                duckContainer.appendChild(duckName);

                const duckAge = document.createElement("p");
                duckAge.innerText = `Age: ${duck.age}`;
                duckContainer.appendChild(duckAge);

                const duckColour = document.createElement("p");
                duckColour.innerText = `Colour: ${duck.colour}`;
                duckContainer.appendChild(duckColour);

                const duckHabitat = document.createElement("p");
                duckHabitat.innerText = `Habitat: ${duck.habitat}`;
                duckContainer.appendChild(duckHabitat);

                getOutput.appendChild(duckContainer);
            }
        })
        .catch(err => console.error(err));
}

getDucks();