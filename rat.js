
//main rat class------------------
class Rat { 
    constructor(id) {
        this.id = id
        this.movementLoop = true
        this.ratElement = document.getElementById(this.id)
        this.finishedStatus = null
}                    

run() {


    
    this.movementLoop = setInterval(() => {

            //  setTimeout(startRace()){
//  if ((left+ width) < 1700) 
// timer = setTimeout ("starRace"(),1700);
// }
// else if ((left+width)< 1700 ){
    // clearTimeout(timer);
//    
// }
        var step = 35; // this is the speed

        var xPosition = this.ratElement.offsetLeft;

        if (xPosition < 1700)
        
        {// how far
            xPosition = xPosition + step;
            this.ratElement.style.left = xPosition + "px"; //horizontal movement
            
        } else { 
            this.ratElement= document.getElementById(this.id);
            this.finishedStatus = true;
            
        } 
        
    }, 
    1000/(Math.random() * 20 + 15)); 
    }

}

// 
// function resolveAfter2Seconds() {
//   console.log("ratlist")





//   })
// }
// 
// function resolveAfter1Second() {
//   console.log("starting fast promise")
//   return new Promise(resolve => {
    // setTimeout(function() {
    //   resolve("rat3")
    //   console.log("rat4")
    // }, 1700)
//   })
// }
// 
// async function sequentialStart() {
//   console.log('==SEQUENTIAL START==')
// 
//   1. Execution gets here almost instantly
//   const slow = await resolveAfter2Seconds()
//   console.log(slow) // 2. this runs 2 seconds after 1.
// 
//   const fast = await resolveAfter1Second()
//   console.log(fast) // 3. this runs 3 seconds after 1.
// }
// 
// 
// 
// sequentialStart() // after 2 seconds, logs "slow", then after 1 more second, "fast"
// 
// 