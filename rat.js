
class Rat { 
    constructor(id) {
        this.id = id
        this.movementLoop = true
        this.ratElement = document.getElementById(this.id)
        this.finishedStatus = null
        this.finishOrder = []
}                    

run() {

    
          
      

     this.movementLoop = setInterval(() => {

 
   
    var step =7; // this is the speed

    var xPosition = this.ratElement.offsetLeft;

    if (xPosition < 1700)
    {// how far
        xPosition = xPosition + step;
        this.ratElement.style.left = xPosition + "px"; //horizontal movement
    } else {
        
        this.finishedStatus = true;
        this.finishOrder.push(this.id) 
        alert (this.id  );
        // reload();
        

       

        // run logic here to .push(this.id) into the finish array
    }
    
    
},
100/(Math.random() * 20 + 15));
// console.log("ratEmenlet")
}   
}
