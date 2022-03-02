
//main rat class------------------
class Rat { 
    constructor(id) {
        this.id = id
        this.movementLoop = true
        this.ratElement = document.getElementById(this.id)
        this.finishedStatus = null
}



                      


run() {
    ratList= Array.from(document.getElementById("rats").children).map((ratElement)=> new Rat(ratElement.id));//changes gif

    this.movementLoop = setInterval(() => {
        var step = 35; // this is the speed

        var xPosition = this.ratElement.offsetLeft;

        if (xPosition < 1700){
            xPosition = xPosition + step;
            this.ratElement.style.left = xPosition + "px"; //horizontal movement
            
        } else {
            this.ratElement= document.getElementById(this.id);
            this.finishedStatus = false
        }
        
    }, 
    1000/(Math.random() * 20 + 15));
    }
}





















