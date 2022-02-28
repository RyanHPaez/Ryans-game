let ratList = []

window.onload = (event) => {
    ratList = Array.from(document.getElementById("rat").children).map((ratElement) => new rat(ratElement.id))
    console.log ('-------------ratList', ratList)
}


function startRace() {
    ratList.forEach(function () {
            rat.run()
        })
}

function stopRace() {
    ratList.forEach(() => {
        rat.reset()
    })
   // move.reset()
}