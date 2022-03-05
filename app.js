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


function results( ){
  this.ratList = ratlist;
}
Rat.prototype.getExt = function(){
  return this.obj.ext;
}
Rat.prototype.getTitle = function(){
 return this.ratList.title;
}

var ratList = [];
for (var i=0; i<ratList.length; i++){
docs.push(new results(aDocs[i]));
}