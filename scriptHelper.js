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
        return "Empty";
    }
    else if (isNaN(testInput)) {
        return "Not a Number";
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
        }
        return "Empty";
}


function checkPilot(pilot) {
    
    if (validateInput(pilot) === "Is a Number") {
        window.alert("Pilot cannot be a number");
    }
    else if (validateInput(pilot) === "Not a Number") {
    
        let pilotStatus = document.getElementById("pilotStatus")
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        //pilotStatus.style.visibility = "visible"; //just faultItems?
    }
}

function checkCopilot(copilot) {
    
    if (validateInput(copilot) === "Is a Number") {
        window.alert("Copilot cannot be a number");
    }
    else if (validateInput(copilot) === "Not a Number") {
        let copilotStatus = document.getElementById("copilotStatus");
        copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`;
        //copilotStatus.style.visibility = "visible"; //just faultyItems?
    }
}

function checkFuelLevel(fuelLevel) {
    
    if (validateInput(fuelLevel) === "Not a Number") {
        window.alert("Fuel Level must be a number");
    }
    else if (validateInput(fuelLevel) === "Is a Number" && fuelLevel < 10000) {
        //document.getElementById("faultyItems").style.visibility = "visible"; //Not sure if checking visibility will cause test to fail, will try .includes first
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        // document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
        // document.getElementById("launchStatus").style.color = "red";
    }
    // Ideal condition
    else if (validateInput(fuelLevel) === "Is a Number" && fuelLevel > 10000) {
        //document.getElementById("faultyItems").style.visibility = "visible"; //Item not faulty
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
        // document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch"
        // document.getElementById("launchStatus").style.color = "green";
    }

}

function checkCargoLevel(cargoLevel) {
    
    if (validateInput(cargoLevel) === "Not a Number") {
        window.alert("Cargo Mass must be a number");
    }
    else if (validateInput(cargoLevel) === "Is a Number" && cargoLevel > 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        // document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        // document.getElementById("launchStatus").style.color = "red";
    }
    // Ideal condition
    else if (validateInput(cargoLevel) === "Is a Number" && cargoLevel < 10000) {
        //document.getElementById("faultyItems").style.visibility = "visible"; //see fuelLevel =^
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
        // document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch"
        // document.getElementById("launchStatus").style.color = "green";
    }
}
function checkStatus(document, list) {
    //May refactor this whole section and declare these variables globally to simplify above functions so i can pass them into this one
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");

    if (fuelStatus === "Fuel level too low for launch" || cargoStatus === "Cargo mass too heavy for launch") {
        launchStatus = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
        list.style.visibility = "visible";
    }
    else if (
        fuelStatus === "Fuel level high enough for launch" 
        && cargoStatus === "Cargo mass low enough for launch"
    ) {
        launchStatus = "Shuttle is Ready for Launch";
        launchStatus.style.color = "green";
        list.style.visibility = "visible";
    } 
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //Wondering if I'm supposed to update the list status within this function since it takes a document and a list?
    //document.body.style.backgroundColor = "aqua"; // To see if function is being passed
    console.log("formSubmission called");

    let firstCheck = isEmpty(pilot, copilot, fuelLevel, cargoLevel); 
//checks first to make sure all fields aren't empty before checking values
    if (firstCheck !== "Empty") {
        checkPilot(pilot);
        checkCopilot(copilot);
        checkFuelLevel(fuelLevel);
        checkCargoLevel(cargoLevel);
    
        //checkStatus(document, list);
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