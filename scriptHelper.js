// Write your helper functions here!

require('cross-fetch/polyfill');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
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
        return  "Empty";
    }
    else if (isNaN(testInput)) {
        return  "Not a Number";
    }
    else if (typeof(parseInt(testInput)) === "number") {
        return "Is a Number";
    }
};

function isEmpty(pilot, copilot, fuelLevel, cargoLevel) {
    if (
        validateInput(pilot) === "Empty" ||
        validateInput(copilot) === "Empty" ||
        validateInput(fuelLevel) === "Empty" ||
        validateInput(cargoLevel) === "Empty"
    ) {
        window.alert("All fields required!");
        return "Empty";
    } else {
        return "proceed";
    }
}

function checkPilot(pilot) {
   
    if (validateInput(pilot) === "Is a Number") {
        return "invalid";
    }
    else if (validateInput(pilot) === "Not a Number") {
    
        return "valid";
    }
}

function checkCopilot(copilot) {
   
    if (validateInput(copilot) === "Is a Number") {
        return "invalid";
    }
    else if (validateInput(copilot) === "Not a Number") {
        
        return "valid";
    }
}

function checkFuelLevel(fuelLevel) {
    if (validateInput(fuelLevel) === "Not a Number") {
        
        return "invalid";
    }
    else if (validateInput(fuelLevel) === "Is a Number" && fuelLevel < 10000) {
        
        return "insuficient";
    }
    else if (validateInput(fuelLevel) === "Is a Number" && fuelLevel >= 10000) {
        return "valid";
    }
}

function checkCargoLevel(cargoLevel) {
    
    if (validateInput(cargoLevel) === "Not a Number") {
        
        return "invalid";
    }
    else if (validateInput(cargoLevel) === "Is a Number" && cargoLevel > 10000) {
        
        return "insuficient";
    }
    else if (validateInput(cargoLevel) === "Is a Number" && cargoLevel < 10000) {
        return "valid";
    }
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    document.getElementById("launchStatus").innerHTML = "Awaiting Information Before Launch";
    document.getElementById("launchStatus").style.color = "";
    list.style.visibility = "hidden";

    if (isEmpty(pilot, copilot, fuelLevel, cargoLevel) === "proceed") {

        if (
            checkPilot(pilot) === "valid" &&
            checkCopilot(copilot) === "valid" &&
            checkFuelLevel(fuelLevel) === "valid" &&
            checkCargoLevel(cargoLevel) === "valid"
        ) {
            list.style.visibility = "visible"
        }
        if (checkCopilot(pilot) === "valid") {

            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        }
        if (checkCopilot(copilot) === "valid") {

            document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
        }
        if (checkFuelLevel(fuelLevel) === "valid") {
        
            document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
            document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
            document.getElementById("launchStatus").style.color = "green";
        }
        if (checkCargoLevel(cargoLevel) === "valid") {
            
            document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
            document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
            document.getElementById("launchStatus").style.color = "green";
        }
        if (checkFuelLevel(fuelLevel) === "insuficient") {

            list.style.visibility = "visible";
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch"
            document.getElementById("launchStatus").style.color = "red";
        }
        if (checkCargoLevel(cargoLevel) === "insuficient") {

            list.style.visibility = "visible";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
            document.getElementById("launchStatus").style.color = "red";
        }

        if (checkPilot(pilot) === "invalid") {
            window.alert("Pilot cannot be a number");
            list.style.visibility = "hidden";            
            document.getElementById("launchStatus").innerHTML = "Awaiting Information Before Launch";
            document.getElementById("launchStatus").style.color = "";
        }        
        if (checkCopilot(copilot) === "invalid") {
            window.alert("Copilot cannot be a number");
            list.style.visibility = "hidden";            
            document.getElementById("launchStatus").innerHTML = "Awaiting Information Before Launch";
            document.getElementById("launchStatus").style.color = "";
    
        }
        if (checkFuelLevel(fuelLevel) === "invalid") {
            window.alert("Fuel Level must be a number");
            list.style.visibility = "hidden";            
            document.getElementById("launchStatus").innerHTML = "Awaiting Information Before Launch";
            document.getElementById("launchStatus").style.color = "";
    
        }
        if (checkCargoLevel(cargoLevel) === "invalid") {
            window.alert("Cargo Mass must be a number");
            list.style.visibility = "hidden";            
            document.getElementById("launchStatus").innerHTML = "Awaiting Information Before Launch";
            document.getElementById("launchStatus").style.color = "";
        }
    }
    
};



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