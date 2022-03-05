
function startRace() {

    ratList= Array.from(document.getElementById("rats").children).map((ratElement)=> new Rat(ratElement.id));
    console.log ('ratListArray', ratList);

    ratList.forEach((rat) => {
                rat.run();            
    })

}


function results(ratList){
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