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

    /*
    setTimeout(function(){
    //stuff in here after timeouts
        document.getElementById("countdownstatus").InnerHTML = currTime;
        currTime = currTime - 5;
    }, 5000);
    setTimeout(function(){
        //stuff in here after timeouts
        document.getElementById("countdownstatus").InnerHTML = currTime;
        currTime = currTime - 5;
    }, 5000);
    setTimeout(function(){
    //stuff in here after timeouts
        document.getElementById("countdownstatus").InnerHTML = currTime;
        currTime = currTime - 5;
    }, 5000);
    setTimeout(function(){
        //stuff in here after timeouts
        document.getElementById("countdownstatus").InnerHTML = currTime;
        currTime = currTime - 5;
    }, 5000);
    setTimeout(function(){
    //stuff in here after timeouts
        document.getElementById("countdownstatus").InnerHTML = currTime;
        currTime = currTime - 5;
    }, 5000);
    setTimeout(function(){
        //stuff in here after timeouts
        document.getElementById("countdownstatus").InnerHTML = currTime;
        currTime = currTime - 5;
    }, 5000);
    setTimeout(function(){
    //stuff in here after timeouts
        document.getElementById("countdownstatus").InnerHTML = currTime;
        currTime = currTime - 5;
    }, 5000);
    setTimeout(function(){
        //stuff in here after timeouts
        document.getElementById("countdownstatus").InnerHTML = currTime;
        currTime = currTime - 5;
    }, 5000);

    setTimeout(function(){
    //stuff in here after timeouts
        document.getElementById("countdownstatus").InnerHTML = "Blastoff!";
        currTime = currTime - 5;
    }, 5000);
    */
}