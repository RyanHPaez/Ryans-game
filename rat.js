// I use this contructor to help make the rats run
class Rat { 
    constructor(id) {
        this.id = id
        this.movementLoop = true
        this.ratElement = document.getElementById(this.id)
        this.finishedStatus = null
        this.results = results
}                    

// this makes the rats run
run() {
    this.movementLoop = setInterval(() => {
        var step =7; // this is the speed
        var xPosition = this.ratElement.offsetLeft; 

    if (xPosition < 1700)
    {// how far
        xPosition = xPosition + step;
        this.ratElement.style.left = xPosition + "px"; //horizontal movement
    } else {        
        clearInterval(this.movementLoop);
        window.alert(this.id + "Wins!" );      
    }   
},
100/(Math.random() * 20 + 15));
// make a different winner everytime
}   
}
