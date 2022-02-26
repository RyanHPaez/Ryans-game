// create Track
// create background
// create Rats

// create start line
// create motion

// create finish line
// create user
// create bets on Rats
// create wallet
// create winner
// create loser
// create tie


function sleep(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })  
}

function test(){
    sleep(5000)
        .then(() => console.log('Hello World'))
}