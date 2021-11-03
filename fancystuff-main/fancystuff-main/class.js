class Rocket{
constructor(
    fuelType,
    weight,
    power,

){
    this.fuelType = fuelType;
    this.weight = weight;
    this.power = power;
}
launch(){
    alert("launch sequence started");
    return true;
}
landing(){
    alert("landing sequence started");
    return true;
}
detachThuruster(thurusterID){
alert("Thuruster" + thurusterID + "has been detached.");
return true;
}

}
class Mission{
    constructor(
        objective,
        launchDateDay,
        launchDateMonth,
        launchDateyear,
        spaceCraft,
        numAs
    ){this.objective =objective;
        this. launchDateDay= launchDateDay;
        this.launchDateMonth = launchDateMonth;
        this. launchDateyear = launchDateyear;
        this. spaceCraft=spaceCraft ;
    }

    
launch(){
    alert("launch sequence started");
}
}
    function LaunchFall() {
    console.log("launchFall() started");
    fallLaunch.launch();
    }
    function displayFall(){
console.log(LaunchFall)
    }

  