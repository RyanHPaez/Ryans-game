
// var betrat, amount, funds;  //Global variables

// //Trigger the following when "start" button is clicked
// let = startRace () = {
//     //Get the values from the DOM
//     betrat = document.getElementById('betrat').value;
//     amount = parseInt(document.getElementById('amount').value);
    
//     funds = parseInt(document.getElementById('funds').innerText);

//     //Basic input validation
//     if (amount > funds) {
//         alert("You do not have enough funds.");
//         return 0;
//     }  else if (amount < 1) {
//         alert("Bet amount must be greater than 0.");
//         return 0;
//     }

//     function arrival(Rat, RatNo) {
        
//         ratList[RatNo].top = undefined;
       
//         var resultIcons = document.getElementsByClassName("results");
//         RatNo++;  //Arrays start with index 0, but the class names start with index 1
//         resultIcons[0].className = "Rat"+RatNo;
//         if (resultIcons.length == 3){
//             if(betRat == "Rat" + RatNo) {
//                 funds+=amount;
//             } else {
//                 funds-=amount;
//             }
//             document.getElementById("funds").innerText = funds;
//         }
//     }}