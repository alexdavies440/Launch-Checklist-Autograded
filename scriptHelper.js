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
let validated;
    if (testInput === "") {
        validated =  "Empty";
    }
    else if (isNaN(testInput)) {
        validated =  "Not a Number";
    }
    else if (typeof(parseInt(testInput)) === "number") {
        validated = "Is a Number";
    }
    return validated;
};

// Functions to be used in formSubmission
function checkPilot(pilot) {
    if (validateInput(pilot) === "Empty") {
        window.alert("All fields required!");
    }
    else if (validateInput(pilot) === "Is a Number") {
        window.alert("Cannot be a number");
    }
    else if (validateInput(pilot) === "Not a Number") {
    
        let pilotStatus = document.getElementById("pilotStatus")
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        pilotStatus.style.visibility = "visible";
    }
}

function checkCopilot(copilot) {
    if (validateInput(copilot) === "Empty") {
        window.alert("All fields required!");
    }
    else if (validateInput(copilot) === "Is a Number") {
        window.alert("Cannot be a number");
    }
    else if (validateInput(copilot) === "Not a Number") {
        let copilotStatus = document.getElementById("copilotStatus");
        copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`;
        copilotStatus.style.visibility = "visible";
    }
}

function checkFuelLevel(fuelLevel) {
    if (validateInput(fuelLevel) === "Empty") {
        window.alert("All fields required!");
    }
    else if (validateInput(fuelLevel) === "Not a Number") {
        window.alert("Must be a number");
    }
    else if (validateInput(fuelLevel) === "Is a Number" && fuelLevel < 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
        document.getElementById("launchStatus").style.color = "red";
    }
    // PROBABLY NEED IF STATEMENT FOR OVER 10000 HERE
    else if (validateInput(fuelLevel) === "Is a Number" && fuelLevel > 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch"
        document.getElementById("launchStatus").style.color = "green";
    }

}

function checkCargoLevel(cargoLevel) {
    if (validateInput(cargoLevel) === "Empty") {
        window.alert("All fields required!");
    }
    else if (validateInput(cargoLevel) === "Not a Number") {
        window.alert("Must be a number");
    }
    else if (validateInput(cargoLevel) === "Is a Number" && cargoLevel > 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "red";
    }
    //PROBABLY NEED IF STATEMENT FOR LESS THAN 10000 HERE
    else if (validateInput(cargoLevel) === "Is a Number" && cargoLevel < 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch"
        document.getElementById("launchStatus").style.color = "green";
    }
}
// function finalCheck() {
//     //May refactor this whole section and declare these variables globally to simplify above functions so i can pass them into this one
//     let fuelStatus = document.getElementById("fuelStatus").innerHTML
//     let cargoStatus = document.getElementById("cargoStatus").innerHTML;
//     let launchStatus = document.getElementById("launchStatus").innerHTML;

//     if (
//         fuelStatus === "Fuel level high enough for launch" 
//         && cargoStatus === "Cargo mass low enough for launch"
//     ) {
//         launchStatus = "Shuttle is Ready for Launch";
//         launchStatus.style.color = "green";
//     } 
//     else {
//         launchStatus = "Shuttle not ready for launch";
//         launchStatus.style.color = "red";
//     }

// }

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //Wondering if I'm supposed to update the list status within this function since it takes a document and a list?
    //document.body.style.backgroundColor = "aqua"; // To see if function is being passed
    console.log("formSubmission called");

    function finalCheck(document, list) {
        //May refactor this whole section and declare these variables globally to simplify above functions so i can pass them into this one
        list = document.getElementById("faultyItems")
        let fuelStatus = document.getElementById("fuelStatus").innerHTML
        let cargoStatus = document.getElementById("cargoStatus").innerHTML;
        let launchStatus = document.getElementById("launchStatus").innerHTML;
    
        if (
            fuelStatus === "Fuel level high enough for launch" 
            && cargoStatus === "Cargo mass low enough for launch"
        ) {
            launchStatus = "Shuttle is Ready for Launch";
            launchStatus.style.color = "green";
        } 
        else {
            launchStatus = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
        }
    
    }

    checkPilot(pilot);
    checkCopilot(copilot);
    checkFuelLevel(fuelLevel);
    checkCargoLevel(cargoLevel);
    finalCheck(document, list);

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