let teamoneshootbutton = document.querySelector("#teamone-shoot-button");
let teamtwoshootbutton = document.querySelector("#teamtwo-shoot-button");

let teamonenumshots = document.querySelector("#teamone-numshots");
let teamtwonumshots = document.querySelector("#teamtwo-numshots");

let teamonenumgoals = document.querySelector("#teamone-numgoals");
let teamtwonumgoals = document.querySelector("#teamtwo-numgoals");

let resetcontainer = document.querySelector("#reset-container");
let resetbutton = document.querySelector("#reset-button");
let numresets = document.querySelector("#num-resets");

teamoneshootbutton.addEventListener("click", function () {
    Console.log("shoot button clicked")

    let newteamonenumshotsvalue = Number(teamonenumshots.innerHTML) + 1;
    teamonenumshots.innerHTML = newteamonenumshotsvalue;

    let newteamonenumgoalsvalue = Number(teamonenumgoals.innerHTML) + 1;
    teamonenumgoals.innerHTML = newteamonenumgoalsvalue;

    if (Math.random() >= 0.5) { goalone.innerHTML = teamonenumgoals; }

    else {
    }
})

teamtwoshootbutton.addEventListener("click", function () {
    Console.log("shoot button clicked")

    let newteamtwonumshotsvalue = Number(teamtwonumshots.innerHTML) + 1;
    teamtwonumshots.innerHTML = newteamtwonumshotsvalue;

    let newteamtwonumgoalsvalue = Number(teamtwonumgoals.innerHTML) + 1;
    teamtwonumgoals.innerHTML = newteamtwonumgoalsvalue;

    if (Math.random() >= 0.5) { goalone.innerHTML = teamtwonumgoals; }

    else {
    }
})

resetbutton.addEventListener("click", function () {

    let resetbutton = number(resetnumber.innerHTML) + 1;

    teamonenumshots.innerHTML = 0;
    teamonenumgoals.innerHTML = 0;
    teamtwonumshots = 0;
    teamtwonumgoals = 0;

})