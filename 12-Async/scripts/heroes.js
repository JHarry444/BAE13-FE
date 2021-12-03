"use strict";

const output = document.querySelector("#output");

axios
    .get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
    .then(res => {
        const squad = res.data;

        const squadName = document.createElement("h2");
        squadName.innerText = squad.squadName;
        output.appendChild(squadName);

        const subheading = document.createElement("h3");
        subheading.innerText = "Members:";
        output.appendChild(subheading);

        const membersContainer = document.createElement("div");

        for (let member of squad.members) {
            const heroContainer = document.createElement("div");
            
            const heroName = document.createElement("p");
            heroName.innerText = `Name: ${member.name}`;
            heroContainer.appendChild(heroName);

            const heroAge = document.createElement("p");
            heroAge.innerText = `Age: ${member.age}`;
            heroContainer.appendChild(heroAge);

            const heroIdentity = document.createElement("p");
            heroIdentity.innerText = `Secret Identity: ${member.secretIdentity}`;
            heroContainer.appendChild(heroIdentity);

            makeEle("label", heroContainer, {
                id: `${member.name}Label`,
                innerText: "Powers:"
            })

            const powers  = document.createElement("ul");

            for (let power of member.powers) {
                const powerItem = document.createElement("li");
                powerItem.innerText = power;
                powers.appendChild(powerItem);
            }

            heroContainer.appendChild(powers);

            membersContainer.appendChild(heroContainer);
        }

        output.appendChild(membersContainer);
    });

function makeEle(tag, parent, options) {
    const newEle = document.createElement(tag);
    for (let attr in options) {
        newEle[attr] = options[attr];
    }
    parent.appendChild(newEle);

    return newEle;
}