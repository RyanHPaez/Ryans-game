// lets the start button what to do
function startRace() {
// makes all the rats an array so it makes it easy to call them all out
    ratList= Array.from(document.getElementById("rats").children).map((ratElement)=> new Rat(ratElement.id));
    console.log ('ratListArray', ratList);
// selects all rats and sets them to run
    ratList.forEach((rat) => {
                rat.run();            
    })

}


function resetRace() {
  // makes all the rats an array so it makes it easy to call them all out
      ratList= Array.from(document.getElementById("rats").children).map((ratElement)=> new Rat(ratElement.id));
      console.log ('ratListArray', ratList);
  // selects all rats and sets them to run
      ratList.forEach((rat) => {
                  rat.ratElement.style.left = 0; 
                    
                  console.log(rat)         
      })
  
  }
  