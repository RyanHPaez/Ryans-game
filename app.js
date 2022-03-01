const rats = ['rat4', 'rat2', 'rat3']
rats.forEach(rat =>console.log(rats))

window.onload = (event) => {
    ratList= Array.from(document.getElementById("rats").children).map((ratElement)=> new Rat(ratElement.id));
    console.log ('-------------ratList', ratList)
}




function startRace() {
    ratList.forEach((rat) => {
                rat.run()
            
    })
}


function stopRace() {
    ratList.forEach((rat) => {
        rat.reset()
    })}
//    move.reset()


