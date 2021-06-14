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

function btrCountDownTime() {
    //loop function to reduce lines of code
    console.log("btrCountDownTime() started");
    // setting confirmation for debugging
    var currTime = 50
    //setting local variable
    for(var i = 0; i <11; i++){
        if(i == 10) { 
            setTimeout(function(){
                document.getElementById("countdownStatus").innerHTML = "Blastoff";
                currTime = currTime - 5;
            },5000 * i );

        } else if (i > 4) {
            setTimeout(function() {
                document.getElementById("countdownStatus").innerHTML = "Warning Less that 1/2 way to launch, time left = "+ currTime;
                currTime = currTime - 5;
                
            },5000 * i);

        } else {
            setTimeout(function(){
                document.getElementById("countdownStatus").innerHTML = currTime;
                currTime = currTime -5;
            },5000 * i);
        }
    }
        //setting for loop with three statements,
        // I is set for 0, if I is less than 10, add 10
    
        //creating a function that will contain our count down
      
        //setting currTime to be displayed instead of count down status.
     
        //setting currTime to be reduced by 5
           
        //this is to coincide var i with the timer, 1000 = 1 second.
        //10 seconds will coincide with currTime descending to 0
}
        
    
function sandBoxRun(){
    console.log("SandboxRun Starts")
    var a = 7;
    if(a==5){
        document.getElementById("sandboxArea").innerHTML = "a does in fact equal 5";
        
    }else{
        document.getElementById("sandboxArea").innerHTML = "a does not in fact equal 5 "
    }
}