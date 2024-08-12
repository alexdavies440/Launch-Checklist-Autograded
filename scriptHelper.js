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
        //window.alert("All fields required!");
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
        //window.alert("Cannot be a number");
    }
    else if (validateInput(pilot) === "Not a Number") {
    
        let pilotStatus = document.getElementById("pilotStatus")
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        pilotStatus.style.visibility = "visible";
    }
}

function checkCopilot(copilot) {
   
    if (validateInput(copilot) === "Is a Number") {
        //window.alert("Cannot be a number");
    }
    else if (validateInput(copilot) === "Not a Number") {
        let copilotStatus = document.getElementById("copilotStatus");
        copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`;
        copilotStatus.style.visibility = "visible";
    }
}

function checkFuelLevel(fuelLevel) {
    if (validateInput(fuelLevel) === "Not a Number") {
        //window.alert("Must be a number");
    }
    else if (validateInput(fuelLevel) === "Is a Number" && fuelLevel < 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
        document.getElementById("launchStatus").style.color = "red";
    }
    // PROBABLY NEED IF STATEMENT FOR OVER 10000 HERE
}

function checkCargoLevel(cargoLevel) {
    
    if (validateInput(cargoLevel) === "Not a Number") {
        //window.alert("Must be a number");
    }
    else if (validateInput(cargoLevel) === "Is a Number" && cargoLevel > 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "red";
    }
     //PROBABLY NEED IF STATEMENT FOR LESS THAN 10000 HERE
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    //document.body.style.backgroundColor = "aqua"; // To see if function is being passed
    console.log("formSubmission called");

    if (isEmpty(pilot, copilot, fuelLevel, cargoLevel) === "proceed") {
        checkPilot(pilot);
        checkCopilot(copilot);
        checkFuelLevel(fuelLevel);
        checkCargoLevel(cargoLevel)
    }
    ;

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