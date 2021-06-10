function checkCred(){
    console.log("checkCred() function started");
    // variables to put in login
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var badgeNum = document.getElementById("badgeNumber").value;
    var fullName = firstName + " " + lastName;
   
    document.getElementById("loginStatus").innerHTML="First name is:" + firstName + ", last name is " + lastName + ", and the Badge ID is: "+ badgeNum;

    console.log("Full name is: " + fullName + ", and the Badge ID is: "+ badgeNum);

    if(fullName.length > 20 || fullName.length == 0){
        document.getElementById("loginStatus").innerHTML = "Full name has too many characters. Please Try again."
    }else if (badgeNum > 999){
        document.getElementById("loginStatus").innerHTML =" Invalid Badge number, please re-enter"
    } else {
        alert("Access Granted! Welcome" +fullName);
        location.replace("Wk5 Assignment.html");
    }
}
