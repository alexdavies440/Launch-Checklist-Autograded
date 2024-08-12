// Write your helper functions here!
console.log("scriptHelper.js loaded");


require('cross-fetch/polyfill');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
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

// Functions to be used in formSubmission
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
        window.alert("Pilot cannot be a number");
        return "invalid";
    }
    else if (validateInput(pilot) === "Not a Number") {
    
        
        return "valid";
    }
}

function checkCopilot(copilot) {
   
    if (validateInput(copilot) === "Is a Number") {
        window.alert("Copilot cannot be a number");
        return "invalid";
    }
    else if (validateInput(copilot) === "Not a Number") {
        
        return "valid";
    }
}

function checkFuelLevel(fuelLevel) {
    if (validateInput(fuelLevel) === "Not a Number") {
        window.alert("Fuel Level must be a number");
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
        window.alert("Cargo Mass must be a number");
        return "invalid";
    }
    else if (validateInput(cargoLevel) === "Is a Number" && cargoLevel > 10000) {
        
        return "insuficient";
    }
    else if (validateInput(cargoLevel) === "Is a Number" && cargoLevel < 10000) {
        return "valid";
    }
}

function updateList(pilot, copilot, fuelLevel, cargoLevel) {

    let pilotStatus = document.getElementById("pilotStatus")
    let copilotStatus = document.getElementById("copilotStatus");
            

    if (checkCopilot(pilot) === "valid") {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        pilotStatus.style.visibility = "visible";
    }
    if (checkCopilot(copilot) === "valid") {
        copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`;
        copilotStatus.style.visibility = "visible";
    }
    if (checkFuelLevel(fuelLevel) === "valid" && checkCargoLevel(cargoLevel) === "valid") {
        document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
        document.getElementById("launchStatus").style.color = "green";
    }
    if (checkFuelLevel(fuelLevel) === "insuficient") {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch"
        document.getElementById("launchStatus").style.color = "red";
    }
    if (checkCargoLevel(cargoLevel) === "insuficient") {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = "red";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    console.log("formSubmission called");

    if (isEmpty(pilot, copilot, fuelLevel, cargoLevel) === "proceed") {
        checkPilot(pilot);
        checkCopilot(copilot);
        checkFuelLevel(fuelLevel);
        checkCargoLevel(cargoLevel)
        updateList(pilot, copilot, fuelLevel, cargoLevel);
    }
    
}



 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 console.log("End of page")

 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;