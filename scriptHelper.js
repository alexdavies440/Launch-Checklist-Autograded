// Write your helper functions here!

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
    
}
// console.log(validateInput("10"));  //This function on it's own seems to work


// These below may need to go in other script file, not sure

// pilot = document.querySelector("input[name=pilotName]");
// copilot = document.querySelector("input[name=copilotName]");
// fuelLevel = document.querySelector("input[name=fuelLevel]");
// fuelLevel = parseInt(fuelLevel);
// cargoLevel = document.querySelector("input[name=cargoMass]");
// cargoLevel = parseInt(cargoLevel);


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    window.addEventListener("submit", function() {

        pilot = document.querySelector("input[name=pilotName]");
        copilot = document.querySelector("input[name=copilotName]");
        fuelLevel = document.querySelector("input[name=fuelLevel]");
        // fuelLevel = parseInt(fuelLevel);
        cargoLevel = document.querySelector("input[name=cargoMass]");
        // cargoLevel = parseInt(cargoLevel);
        list = document.getElementById("faultyItems");
        
        if (validateInput(pilot) === "Empty") {
            window.alert("All fields required!");
        }
        else if (validateInput(pilot) === "Is a Number") {
            window.alert("is a number");
        }
        else if (validateInput(pilot) === "Not a Number") {
            let pilotStatus = list.getElementById("pilotStatus") 
            pilotStatus = `Pilot ${pilot} is ready for launch`
        }
    
        else if (validateInput(copilot) === "Empty") {
            window.alert("All fields required!");
        }
        else if (validateInput(copilot) === "Is a Number") {
            window.alert("is a number");
        }
        else if (validateInput(copilot) === "Not a Number") {
            let copilotStatus = list.getElementById("copilotStatus");
            copilotStatus = `Copilot ${copilot} is ready for launch`
        }
    
        else if (validateInput(fuelLevel) === "Empty") {
            window.alert("All fields required!");
        }
        else if (validateInput(fuelLevel) === "Not a Number") {
            window.alert("Not a Number");
        }
        else if (validateInput(fuelLevel) === "Is a Number" && fuelLevel < 10000) {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
            document.getElementById("launchStatus").style.color = "red";
        }
    // PROBABLY NEED IF STATEMENT FOR OVER 10000 HERE
        else if (validateInput(cargoLevel) === "Empty") {
            window.alert("All fields required!");
        }
        else if (validateInput(cargoLevel) === "Not a Number") {
            window.alert("Not a Number");
        }
        else if (validateInput(cargoLevel) === "Is a Number" && cargoLevel > 10000) {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
            document.getElementById("launchStatus").style.color = "red";
        }
        //PROBABLY NEED IF STATEMENT FOR LESS THAN 10000 HERE
    })
}



 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;