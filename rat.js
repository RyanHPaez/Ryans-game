var winningRat = null

// I use this contructor to help make the rats run
class Rat { 
    constructor(id) {
        this.id = id
        this.movementLoop = true
        this.ratElement = document.getElementById(this.id)        
       
}                    

// this makes the rats run
run() {
    this.movementLoop = setInterval(() => {
        var step =7; // this is the speed
        var xPosition = this.ratElement.offsetLeft; 

    if (xPosition < 1700)// how far
    {
        xPosition = xPosition + step;
        this.ratElement.style.left = xPosition + "px"; //horizontal movement
    } 
    
    else {        
        clearInterval(this.movementLoop); //needs this tostop loop
        
        if (winningRat == (null)) {
            winningRat= this.id;            
           
            if (winningRat == (user.betRat)) {
               user.funds = Number(user.funds) + Number(user.bet)
               document.getElementById("funds").textContent = user.funds 
               window.alert(this.id + "Wins!" );//alerts window
            } else   { 
                user.funds = Number(user.funds) - Number(user.bet)
                document.getElementById("funds").textContent = user.funds
                window.alert(this.id + "Lost!" );//alerts window
            }

        }
    }   
},100/(Math.random() * 20 + 15));// make a different winner everytime
}   
}
