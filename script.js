// Write your JavaScript code here!
console.log("script.js loaded");

// const scriptHelper = require('./scriptHelper.js');

// let formSubmission = scriptHelper.formSubmission;

// let status = document.getElementById("launchStatusCheck");
// status.style.color = "green"; Does not seem to be responding to anything in this


window.addEventListener("load", function () {

    // window.alert("test"); //This did something
    // let submitButton = window.getElementById("formSubmit"); commenting this out allows things below it to work
    //window.alert("test"); //This did not do anything?
    
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        // console.log("test submit");
        formSubmission();
        //document.body.style.backgroundColor = "red"; //Submit is working to change background red, formsubmission function is not yet
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