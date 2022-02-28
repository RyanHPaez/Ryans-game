function randomInterger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
//main rat class------------------
class rat { 
    constructor(id) {
        this.id = id
        this.movementLoop = null
        this.ratElement = document.getElementById(this.id)
        this.finishedStatus = false
}

//stops movement
reset() {
    clearInterval(this.movementLoop);
    this.ratElement.src = 'image/${this.id}/rat.png'
    this.ratElement.style.left = "0px";
    this.finishedStatus = false
}

run() {
    this.ratElement.src = 'image/${this.id}/rat.png'//changes gif

    this.movementLoop = setInterval(() => {
        var step = 5; // this is the speed

        var xPosition = this.Element.offsetLeft;

        if (xPosition < 700){
            xPosition = xPosition + step;
            this.ratElement.style.left =
            xPosition + "px"; //horizontal movement
            
        } else {
            this.ratElement.src = 'image/${this.id}/rat.png'
            this.finishedStatus = true
        }
    }, randomInteger(40, 70));
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
















