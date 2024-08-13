
// Write your JavaScript code here! 

window.addEventListener("load", function () {

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        //fuelLevel = parseInt(fuelLevel);
        
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;
        //cargoLevel = parseInt(cargoLevel);
        
        let list = document.getElementById("faultyItems");
 
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        
        event.preventDefault();

    });
    
    
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        //console.log(listedPlanets);
    }).then(function () {
        //console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        console.log(listedPlanets);
        let destination = pickPlanet(listedPlanets);
        
        let name = destination.name;
        let diameter = destination.diameter;
        let star = destination.star;
        let distance = destination.distance;
        let moons = destination.moons;
        let imageUrl = destination.image
        
        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
        
    })
    
 });