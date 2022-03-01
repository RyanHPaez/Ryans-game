
//main rat class------------------
class Rat { 
    constructor(id) {
        this.id = id
        this.movementLoop = null
        this.ratElement = document.getElementById(this.id)
        this.finishedStatus = false
}

//stops movement
reset() {
    clearInterval(this.movementLoop);
    this.ratElement= document.getElementById(this.id);
    this.ratElement.style.left = "0px";
    this.finishedStatus = true
}



run() {
    ratList= Array.from(document.getElementById("rats").children).map((ratElement)=> new Rat(ratElement.id));//changes gif

    this.movementLoop = setInterval(() => {
        var step = 25; // this is the speed

        var xPosition = this.ratElement.offsetLeft;

        if (xPosition < 1700){
            xPosition = xPosition + step;
            this.ratElement.style.left = xPosition + "px"; //horizontal movement
            
        } else {
            this.ratElement= document.getElementById(this.id);
            this.finishedStatus = true
        }
    }, 1000/(Math.random() * 30 + 12));
    }
}









//works

// var move = {

//     reset: function() {
//         clearInterval(movementLoop);
//         documentElementById('whiteRat'.style.left="500px");
//         documentElementById('whiteRat'.style.top="500px");
//     },

//     disp: function(){
//         var step = 80;
//         console.log(document.getElementById('whiteRat'))
//         var x = document.getElementById('whiteRat').offsetLeft;
//         //var x = document.getElementById('greyRat').offsetLeft;
//         console.log('---------------x', x)
//         if(x < 1600) {
//             x = x + step;
//             document.getElementById('whiteRat').style.left = x +"px";
//             console.log('----- position', document.getElementById('whiteRat').style.left)
//         }
//     },

//     timer: function(){
//         var movementLoop = setInterval(() => {
//             this.disp();
//         },900);
//     }
// }
















