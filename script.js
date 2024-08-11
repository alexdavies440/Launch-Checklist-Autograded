// const { validateInput } = require("./scriptHelper"); Nice try VS Code!



// Write your JavaScript code here!

window.addEventListener("load", function () {

    console.log("script.js loaded");
    let pilot = document.querySelector("input[name=pilotName]").value;
    let copilot = document.querySelector("input[name=copilotName]").value;
    
    let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    fuelLevel = parseInt(fuelLevel);
    
    let cargoLevel = document.querySelector("input[name=cargoMass]").value;
    cargoLevel = parseInt(cargoLevel);
    
    let list = document.getElementById("faultyItems");
    
    
    
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
    
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        
        event.preventDefault();

    });
    
    
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    
 });