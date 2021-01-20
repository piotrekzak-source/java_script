let Car = function(maxSpeed, driver){

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){

        console.log(speed * time);
    };
    this.logDriver = function(){

        console.log("driver name is " + this.driver);
    }

};
let myCar = new Car(100, "James Bond");
let myCar2 = new Car(90, "Piotr");

myCar.drive(30,5);
myCar2.logDriver();