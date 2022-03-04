

function startRace() {
    


    ratList= Array.from(document.getElementById("rats").children).map((ratElement)=> new Rat(ratElement.id));
    console.log ('ratListArray', ratList);

    ratList.forEach((rat) => {
                rat.run();            
    })

}




// function RaceWinners() {
//     console.log("0")
//     return new Promise(resolve => {
//       setInterval(function() {
//           resolve(1)
//         }, 0)
//     })
//   }
//   console.log ("1")

//   async function Start() {
//     console.log('== START==')
//     Start() // starts right away"
//   }

//     async function resolveAfter2Seconds() {
//         // console.log("ratlist") ok          
//       }
//       const winners =  RaceWinners()
//       this.ratElement = document.getElementById(this.id)
//       console.log ("2")




  


    
//     alert('1');
//   }, 500);
  
  // With a function defined separately
//   function sayHi() {
//     alert('2');
//   }
  
 
    //------------------------------------------------------------------------------

  