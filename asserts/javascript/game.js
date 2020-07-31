let shotone = document.querySelector("#teamone-numshots")
let goalone = document.querySelector("#teamone-numgoals")
let teamoneshootbutton = document.querySelector("#teamone-shoot-button")
let shottwo = document.querySelector("#teamtwo-numshots")
let goaltwo = document.querySelector("#teamtwo-numgoals")
let teamtwoshootbutton = document.querySelector("#teamtwo-shoot-button")
let resetbutton = document.querySelector("#reset-button")
let resetnumber = document.querySelector("#num-resets")

teamoneshootbutton.addEventListener("click", function () {
    console.log("teamoneshootbutton button clicked");

    let teamonenumshots = Number(shotone.innerHTML) + 1;
    shotone.innerHTML = teamonenumshots
    teamonenumgoals = Number(goalone.innerHTML) + 1;
    if (Math.random() >= 0.5) { goalone.innerHTML = teamonenumgoals; }
})

teamtwoshootbutton.addEventListener("click", function () {
    console.log("teamtwoshootbutton button clicked");

    let teamtwonumshots = Number(shottwo.innerHTML) + 1;
    shottwo.innerHTML = teamtwonumshots
    teamtwonumgoals = Number(goaltwo.innerHTML) + 1;
    if (Math.random() >= 0.5) { goaltwo.innerHTML = teamtwonumgoals; }
})

resetbutton.addEventListener("click", function () {
    console.log("resetbutton button clicked")

    let resetfunction = Number(resetnumber.innerHTML) + 1;
    shotone.innerHTML = 0;
    shottwo.innerHTML = 0;
    goalone.innerHTML = 0;
    goaltwo.innerHTML = 0;
    resetnumber.innerHTML = 0;

})