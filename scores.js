// this page will only work if window onload is here
window.onload = function () {
    //  setting values and textcontent to objects
    user = {
        funds: document.getElementById("funds").textContent,
        bet: document.getElementById("amount").value,
        betRat: document.getElementById("betRat").value,
       
       }
        // adding event listeners to object
       document.getElementById("amount").addEventListener('change', change);
       document.getElementById("betRat").addEventListener('change', changeBetRat);
       
       
}
// identifying what user will control
var user = {
 funds: null,
 bet: null,
 betRat: null

}
// adding function to objects
function change (event) {
    user.bet = amount.value;

}

function changeBetRat (event) {
    user.betRat = event.target.value;
    
}

