let ratlist = []
var finishOrder = []

window.onload = (event) => {
    ratList= Array.from(document.getElementById("rats").children).map((ratElement)=> new Rat(ratElement.id));
    console.log ('-------------ratList', ratList)
    
}




function startRace() {
    ratList.forEach((rat) => {
                rat.run()
               
            
    })
}




  

    //------------------------------------------------------------------------------

  