
//main rat class------------------
class Rat { 
    constructor(id) {
        this.id = id
        this.movementLoop = true
        this.ratElement = document.getElementById(this.id)
        this.finishedStatus = null
}

//restarts race
reset() {
    
    clearInterval(this.finishedStatus);
    this.ratElement= document.getElementById(this.id);
    this.ratElement.style.left = "0px";
    
    

    
    
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

//   var betRat, amount, funds;  //Global variables

// document.getElementById('startRace').onclick = function () {
//     //Get the values from the DOM
//     betRat = document.getElementById('betRat').value;
//     amount = parseInt(document.getElementById('amount').value);
//     funds = parseInt(document.getElementById('funds').innerText);

//     //Basic input validation
//     if (amount > funds) {
//         alert("You do not have enough funds.");
//         return 0;
    
//     } else if (amount < 1) {
//         alert("Bet amount must be greater than 0.");
//         return 0;
//     }





















