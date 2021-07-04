class Mission {
    
    constructor(
        fuellevel,
        oxygenlevel,
        foodlevel,
        spacecraft,
        launchDateDay,
        launchDateMonth,
        launchDateYear,
        NumofAstronauts


    ) {
        this.fuellevel = fuellevel;
        this.oxygenlevel = oxygenlevel;
        this.foodlevel = foodlevel;
        this.spacecraft = spacecraft;
        this.launchDateDay = launchDateDay;
        this.launchDateMonth = launchDateMonth;
        this.launchDateYear = launchDateYear
        this.NumofAstronauts = NumofAstronauts;
    }



    launch() {
        alert("We are taking off");

    }

    dismissionlaunchdate(){
        alert("This mission launch on " + this.launchDateMonth + " "+ this.launchDateDay + ". "+ this.launchDateYear)
    }
}
function launchFall() {
    console.log ("launchFall() running")
    fallLaunch.launch();
}
function displayFall() {
    console.log("displayFall() running")
    fallLaunch.dismissionlaunchdate();

}

