function countdownTimer(){

    // console.log("countdownTimer Working");

    var currTime = 50;

    // document.getElementById("countdownstatus").InnerHTML = currTime;

    currTime = currTime - 5;



    // first time

    setTimeout(function() { 

        alert("The time is "+ currTime); 

        currTime = currTime - 5;

    }, 5000);



    // second time

    setTimeout(function() { 

        alert("The time is "+ currTime); 

        currTime = currTime - 5;

    }, 5000);



    // third time

    setTimeout(function() { 

        alert("The time is "+ currTime); 

        currTime = currTime - 5;

    }, 5000);



    // fourth time

    setTimeout(function() { 

        alert("The time is "+ currTime); 

        currTime = currTime - 5;

    }, 5000);



    // fifth time

    setTimeout(function() { 

        alert("The time is "+ currTime); 

        currTime = currTime - 5;

    }, 5000);



    // sixth time

    setTimeout(function() { 

        alert("The time is "+ currTime); 

        currTime = currTime - 5;

    }, 5000);



    // seventh time

    setTimeout(function() { 

        alert("The time is "+ currTime); 

        currTime = currTime - 5;

    }, 5000);



    // eighth time

    setTimeout(function() { 

        alert("The time is "+ currTime); 

        currTime = currTime - 5;

    }, 5000);



    // ninth time

    setTimeout(function() { 

        alert("The time is "+ currTime); 

        currTime = currTime - 5;

    }, 5000);



    // tenth time

    setTimeout(function() { 

        alert("The time is "+ currTime);

        alert("Blastoff!"); 

        currTime = currTime - 5;

    }, 5000);
}
var wins = 0
function playCraps(){
    console.log("Craps game initiated");
    //var wins = 0;
    var die1 = Math.ceil(Math.random()* 6);
    var die2 = Math.ceil(Math.random()* 6);
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    document.getElementById("winStatus").innerHTML = wins;
    var dieSum = die1 + die2;
    document.getElementById("diceSum").innerHTML = dieSum;
    if(dieSum == 7 || dieSum == 11){
        document.getElementById("crapsStatus").innerHTML = "Craps! You lose!";

    }else if (die1 == die2 && die1 % 2== 0){
        document.getElementById("crapsStatus").innerHTML = "Doubles! You win!"
       
    
    }else{
        
            document.getElementById("crapsStatus").innerHTML = "you did not lose or win. Try again"
            
    }

    if (document.getElementById("crapsStatus").innerHTML == "Doubles! You win!"){
        wins = wins + 1
    }
    document.getElementById("winStatus").innerHTML = wins;
}

function btrCountDownTime(){
    console.log("btrCountDownTimer() started");
    var currTime = 50
    for(var i = 0; i <10; i++){
        setTimeout(function(){
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
        },1000 * i);    
    }
    setTimeout(function(){
        document.getElementById("countdownStatus").innerHTML = "Blastoff!";
    }, 1000);
}