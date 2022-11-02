"use strict"

window.onload = function() {
initTeamsDropdown();
const submitBtn = document.getElementById("submitBtn");
submitBtn.onclick = displayInfo();
}

function initTeamsDropdown() {

    let teams = [
        {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
        {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
        {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
        {code:"KAN", name:"Kansas City Chiefs", plays:"Kansas City, MO"},
    ];

       let codes = [];
       let names = [];
       let plays = [];

        for (let value of teams) {
         codes.push(value.code);
         names.push(value.name);
         plays.push(value.plays);
        }

        const teamsList = document.getElementById("footballTeam");

        let length = teams.length 
        for (let i = 0; i < length; i++) {
            // create the option element 
            let theOption = document.createElement("option")

            //set the text & value 
            theOption.textContent = names[i];
            theOption.value = codes[i];

            // append option 
            teamsList.appendChild(theOption);
        }
 }