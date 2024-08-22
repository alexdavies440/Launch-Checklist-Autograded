
require('cross-fetch/polyfill');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    document.getElementById("missionTarget").innerHTML =
        `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
                 `;
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    }
    else if (isNaN(testInput)) {
        return "Not a Number";
    }
    else if (typeof (parseInt(testInput)) === "number") {
        return "Is a Number";
    }
}

function checkFuelLevel(fuelLevel) {
    if (fuelLevel < 10000) {
        return "Insufficient";
    }
    else if (fuelLevel >= 10000) {
        return "Sufficient";
    }
}

function checkCargoLevel(cargoLevel) {
    if (cargoLevel > 10000) {
        return "Insufficient";
    }
    else if (cargoLevel < 10000) {
        return "Sufficient";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    list.style.visibility = "visible";
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;

    if (
        validateInput(pilot) === "Empty" ||
        validateInput(copilot) === "Empty" ||
        validateInput(fuelLevel) === "Empty" ||
        validateInput(cargoLevel) === "Empty"
    ) {
        window.alert("All fields required!");
        list.style.visibility = "hidden";
        document.getElementById("launchStatus").innerHTML = "Awaiting Information Before Launch";
        document.getElementById("launchStatus").style.color = "";
    }
    else if (
        validateInput(pilot) === "Is a Number" ||
        validateInput(copilot) === "Is a Number" ||
        validateInput(fuelLevel) === "Not a Number" ||
        validateInput(cargoLevel) === "Not a Number"
    ) {
        window.alert("Make sure to enter valid information for each field!");
        list.style.visibility = "hidden";
        document.getElementById("launchStatus").innerHTML = "Awaiting Information Before Launch";
        document.getElementById("launchStatus").style.color = "";
    }
    else if (checkFuelLevel(fuelLevel) === "Sufficient" && checkCargoLevel(cargoLevel) === "Sufficient") {
        document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
        document.getElementById("launchStatus").style.color = "green";
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
    }
    else if (checkFuelLevel(fuelLevel) === "Insufficient" && checkCargoLevel(cargoLevel) === "Insufficient") {
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch"
        document.getElementById("launchStatus").style.color = "red";
    }
    else if (checkFuelLevel(fuelLevel) === "Insufficient" && checkCargoLevel(cargoLevel) === "Sufficient") {
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch"
        document.getElementById("launchStatus").style.color = "red";
    }
    else if (checkFuelLevel(fuelLevel) === "Sufficient" && checkCargoLevel(cargoLevel) === "Insufficient") {
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch"
        document.getElementById("launchStatus").style.color = "red";
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    const pick = Math.floor(Math.random() * planets.length);
    return planets[pick];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;