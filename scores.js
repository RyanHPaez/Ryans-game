// this page will only work if window onload is here
window.onload = function () {
     
    user = {
        funds: document.getElementById("funds").textContent,
        bet: document.getElementById("amount").value,
        betRat: document.getElementById("betRat").value,
       
       }

       document.getElementById("amount").addEventListener('change', change);
       document.getElementById("betRat").addEventListener('change', changeBetRat);
       
       
}

var user = {
 funds: null,
 bet: null,
 betRat: null

}

function change (event) {
    user.bet = amount.value;

}

function changeBetRat (event) {
    user.betRat = event.target.value;
    
}

