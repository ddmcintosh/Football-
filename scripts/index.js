"use strict";

window.onload = init;


const teams = [
  { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
  { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
  { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
  { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];

function init() {
  console.log("index.js");
  fillDropdown();
  const selectBtn = document.getElementById("selectBtn");
  selectBtn.onclick = selectBtnOnClick;
  //document.getElementById("selectBtn") = selectBtnOnClick;

}

function fillDropdown() { // To create the dropdown menu
  const teamSelect = document.getElementById("teamSelect");
  let selectTeamOption = document.createElement("option");
  selectTeamOption.value = "";
  selectTeamOption.textContent = "Select a Team...";
  teamSelect.appendChild(selectTeamOption);

  let teamsLength = teams.length;
  for (let i = 0; i < teamsLength; i++) {
    let newOption = document.createElement("option");
    newOption.value = teams[i].code;
    newOption.textContent = teams[i].name;

    teamSelect.appendChild(newOption);
  }

}

function selectBtnOnClick() {
  const teamSelect = document.getElementById("teamSelect");
  let selectedTeamCode = teamSelect.value;
  let selectedTeam = getTeamFromCode(teams, selectedTeamCode);

  let message = `You selected the ${selectedTeam.name} (${selectedTeam.code}) who play in ${selectedTeam.plays}.`
  const teamInfo = document.getElementById("teamInfo");
  teamInfo.innerHTML = message;
  return false;
}

function getTeamFromCode(teams, code) { 
  let teamscount = teams.length;
  for (let i = 0; i < teamscount; i++) {
    if (teams[i].code == code) {
      return teams[i];
    }
  }
  return null;
}

// function selectBtnOnClick()
// {
//   const teamSelect = document.getElementById("teamSelect");
//   teamSelect.code = "DAL";

//   let length = teamSelect.options.length;
//   for (let i = 0;i < length; i++)
//   {
//     if (teamSelect.options[i].name == .code)
//   }
// }
















