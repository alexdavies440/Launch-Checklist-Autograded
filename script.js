// Write your JavaScript code here!
const scriptHelper = require('./scriptHelper.js');

let formSubmission = scriptHelper.formSubmission;

// let status = document.getElementById("launchStatusCheck");
// status.style.color = "green"; Does not seem to be responding to anything in this


window.addEventListener("load", function () {

    window.alert("test");
    let submitButton = window.getElementById("formSubmit");

    submitButton.addEventListener("click", function () {
        formSubmission();
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