"use strict"


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

        window.onload = function() {
            initTeamsDropdown() 
            const SubmitBtn = document.getElementById("submitBtn");
            SubmitBtn.onclick = displayInfo;


        }
        function initTeamsDropdown() {

            for (let i = 0; i < length; i++) {
                // create the option element 
                let theOption = document.createElement("option")
    
                //set the text & value 
                theOption.textContent = names[i];
                theOption.value = codes[i];
    
                // append option 
                footballTeam.appendChild(theOption);
            }

        }
    function displayInfo() {
        let selectedValue = footballTeam.value;
        for (let i = 0; i < length; i++) {
            if (selectedValue == codes[i]) {
                document.getElementById("teamInfo").innerHTML = " You selected the " + names[i] + codes[i] + " who play in " + locations[i];
            }
        }
        return false;
    }
