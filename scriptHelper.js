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

let result;

    if (testInput === "") {
        return "Empty";
    }
    else if (typeof(testInput) === "number") {
        return "Is a number";
    }
    else if (isNaN(testInput)) {
        return "Is not a number";
    }
}
// console.log(validateInput(""));  This function on it's own seems to work


// These below may need to go in other script file, not sure

// pilot = document.querySelector("input[name=pilotName]");
// copilot = document.querySelector("input[name=copilotName]");
// fuelLevel = document.querySelector("input[name=fuelLevel]");
// fuelLevel = parseInt(fuelLevel);
// cargoLevel = document.querySelector("input[name=cargoMass]");
// cargoLevel = parseInt(cargoLevel);


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    

    if (validateInput(pilot) === "Empty") {
        window.alert("All fields required!");
    }
    else if (validateInput(pilot) === "Is a Number") {
        window.alert("is a number");
    }
    else if (validateInput(pilot) === "Not a Number") {

    }

    else if (validateInput(copilot) === "Empty") {
        window.alert("All fields required!");
    }
    else if (validateInput(copilot) === "Is a number") {
        window.alert("is a number");
    }
    else if (validateInput(copilot) === "Is not a number") {

    }

    else if (validateInput(fuelLevel) === "Empty") {
        window.alert("All fields required!");
    }
    else if (validateInput(fuelLevel) === "Is not a number") {
        window.alert("Is not a number");
    }
    else if (validateInput(fuelLevel) === "Is a number") {

    }

    else if (validateInput(cargoLevel) === "Empty") {
        window.alert("All fields required!");
    }
    else if (validateInput(cargoLevel) === "Is not a number") {
        window.alert("Is not a number");
    }
    else if (validateInput(cargoLevel) === "Is a number") {
        
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
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;