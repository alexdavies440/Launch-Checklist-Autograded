
window.addEventListener("load", function () {

    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {

        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;

        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;

        let cargoLevel = document.querySelector("input[name=cargoMass]").value;

        let list = document.getElementById("faultyItems");

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

        event.preventDefault();

    });


    let listedPlanets;

    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
    }).then(function () {

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